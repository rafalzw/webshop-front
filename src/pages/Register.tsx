import * as React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),
    url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1'),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  ${mobile({ width: '80%' })}
  ${tablet({ width: '50%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  border: solid 1px #d3d3d3;

  &:focus {
    outline-color: #d3d3d3;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #404040;
  }
`;

export const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>UTWÓRZ NOWE KONTO</Title>
        <Form>
          <Input placeholder='Imię' />
          <Input placeholder='Nazwisko' />
          <Input placeholder='Nazwa użytkownika' />
          <Input placeholder='Email' />
          <Input placeholder='Hasło' />
          <Input placeholder='Potwierdź hasło' />
          <Button>ZAREJESTRUJ</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
