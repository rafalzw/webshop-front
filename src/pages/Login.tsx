import * as React from 'react';
import styled from 'styled-components';

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
  background-color: cadetblue;
  color: #fff;
  cursor: pointer;
  margin: 20px 0 10px 0;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGOWANIE</Title>
        <Form>
          <Input placeholder='Nazwa użytkownika' />
          <Input placeholder='Hasło' />
          <Button>ZALOGUJ</Button>
          <Link>NIE PAMIĘTASZ HASŁA?</Link>
          <Link>ZAREJESTRUJ SIĘ</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};
