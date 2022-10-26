import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1'),
    center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
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
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: cadetblue;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
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
