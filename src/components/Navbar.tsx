import * as React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkLogin, logout } from '../redux/apiCalls';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '120px', marginBottom: '20px' })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ flexDirection: 'column', padding: '10px 0', height: '100%' })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d3d3d3;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: '0' })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  ${mobile({ justifyContent: 'space-between', height: '100%' })}
`;
const Menuitem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

export const Navbar = () => {
  const [isFetching, setIsFetching] = useState(true);
  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await checkLogin(dispatch);
      setIsFetching(false);
    })();
  }, []);

  if (isFetching) {
    return null;
  }

  const handleLogout = async () => {
    await logout(dispatch);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder='Szukaj' />
            <Search style={{ color: 'gray', fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>GARNIAK4YOU</Logo>
        </Center>
        <Right>
          {user ? (
            <Menuitem onClick={handleLogout}>WYLOGUJ</Menuitem>
          ) : (
            <>
              <Menuitem>
                <NavLink to='/register'>REJESTRACJA</NavLink>
              </Menuitem>
              <Menuitem>
                <NavLink to='/login'>ZALOGUJ</NavLink>
              </Menuitem>
            </>
          )}
          <Link to='/cart'>
            <Menuitem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </Menuitem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
