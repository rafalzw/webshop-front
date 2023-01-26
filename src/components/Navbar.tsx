import * as React from 'react';
import styled from 'styled-components';
import {
  Search,
  ShoppingCartOutlined,
  AccountBoxOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkLogin, logout } from '../redux/apiCalls';

const Container = styled.div`
  height: 70px;
  ${mobile({ height: '120px', marginBottom: '20px' })}
`;
const Wrapper = styled.div`
  background-color: #f9f9f9;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  background-color: #fff;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: '0' })}

  }
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
  &:focus {
    outline: none;
  }
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
  color: #404040;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  transition: color 0.4s ease;

  ${mobile({ fontSize: '12px' })}
  &:hover {
    color: #6d6d6d;
  }
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
const ProfileIcon = styled(AccountBoxOutlined)`
  && {
    font-size: 28px;
  }
`;

const CartIcon = styled(ShoppingCartOutlined)`
  && {
    font-size: 28px;
  }
`;

const FavoriteIcon = styled(FavoriteBorderOutlined)`
  && {
    font-size: 28px;
  }
`;

export const Navbar = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [isFetching, setIsFetching] = useState(true);
  const quantity = useSelector((state: RootState) => state.cart.quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <Search style={{ color: '#404040', fontSize: 20 }} />
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
              <Menuitem onClick={() => navigate('/register')}>ZAREJESTRUJ</Menuitem>
              <Menuitem onClick={() => navigate('/login')}>ZALOGUJ</Menuitem>
            </>
          )}
          {user && (
            <>
              <Menuitem>
                <ProfileIcon onClick={() => navigate('/account')} />
              </Menuitem>
              <Menuitem>
                <FavoriteIcon onClick={() => navigate('/favorites')} />
              </Menuitem>
            </>
          )}
          <Menuitem>
            <Badge badgeContent={quantity} color='primary'>
              <CartIcon onClick={() => navigate('/cart')} />
            </Badge>
          </Menuitem>
        </Right>
      </Wrapper>
    </Container>
  );
};
