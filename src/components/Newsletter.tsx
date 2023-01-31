import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  ${mobile({ fontSize: '42px' })}
`;
const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  padding: 0 5px;
  ${mobile({ textAlign: 'center', fontSize: '18px' })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d3d3d3;
  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #000;
  color: #d3d3d3;
  cursor: pointer;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #404040;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Zapisz się i bądź na bierząco z naszymi promocjami i wyprzedażami.</Desc>
      <InputContainer>
        <Input placeholder='Twój adres email' />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};
