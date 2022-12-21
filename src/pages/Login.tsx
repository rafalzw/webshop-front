import * as React from 'react';
import { FormEvent, useEffect, useState } from 'react';
import { checkLogin, login } from '../redux/apiCalls';
import styled from 'styled-components';
import { mobile, tablet } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url('https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1331&dpr=1'),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: '80%' })}
  ${tablet({ width: '50%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: solid 1px #d3d3d3;

  &:focus {
    outline-color: #d3d3d3;
  }
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin: 20px 0 10px 0;
  transition: background-color 0.5s ease;
  &:disabled {
    color: #d3d3d3;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #404040;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: darkred;
`;

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error } = useSelector((state: RootState) => state.user);
  const [isFetching, setIsFetching] = useState(true);
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>LOGOWANIE</Title>
        <Form>
          <Input placeholder='Nazwa użytkownika' onChange={(e) => setUsername(e.target.value)} />
          <Input
            type='password'
            placeholder='Hasło'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSubmit} disabled={loading}>
            ZALOGUJ
          </Button>
          {error && <Error>Niepoprawna Nazwa użytkownika lub Hasło. Spóbuj ponownie.</Error>}
          <Link>NIE PAMIĘTASZ HASŁA?</Link>
          <Link>ZAREJESTRUJ SIĘ</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
