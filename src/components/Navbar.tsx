import * as React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined, AccountBoxOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
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
  text-decoration: none;
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
  margin-left: 10px;
  cursor: pointer;
  ${mobile({ fontSize: '12px' })}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
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
          <Logo>
            <StyledLink to='/'>GARNIAK4YOU</StyledLink>
          </Logo>
        </Center>
        <Right>
          {user ? (
            <Menuitem onClick={handleLogout}>WYLOGUJ</Menuitem>
          ) : (
            <>
              <Menuitem>
                <StyledLink to='/register'>REJESTRACJA</StyledLink>
              </Menuitem>
              <Menuitem>
                <StyledLink to='/login'>ZALOGUJ</StyledLink>
              </Menuitem>
            </>
          )}
          {user && (
            <Link to='/account'>
              <Menuitem>
                <AccountBoxOutlined />
              </Menuitem>
            </Link>
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
