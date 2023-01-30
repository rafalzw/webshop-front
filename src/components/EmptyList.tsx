import React from 'react';
import styled from 'styled-components';
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  LocalShippingOutlined,
} from '@mui/icons-material';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 0.9rem;
  border: none;
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin: 5px 20px 5px 0;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #404040;
  }
  ${mobile({ width: '100%', margin: '10px 0' })}
`;

const Text = styled.p`
  margin-bottom: 30px;
`;

const H2 = styled.h2`
  margin: 10px 0;
`;

interface Props {
  type: string;
  title: string;
  text: string;
}

export const EmptyList = ({ type, title, text }: Props) => {
  const navigate = useNavigate();

  const renderIcon = (type: string) => {
    switch (type) {
      case 'cart':
        return <ShoppingCartOutlined style={{ fontSize: '64' }} />;
      case 'favorites':
        return <FavoriteBorderOutlined style={{ fontSize: '64' }} />;
      case 'orders':
        return <LocalShippingOutlined style={{ fontSize: '64' }} />;
    }
  };
  return (
    <Wrapper>
      {renderIcon(type)}
      <H2>{title}</H2>
      <Text>{text}</Text>
      <Button onClick={() => navigate('/products/')}>ROZPOCZNIJ ZAKUPY</Button>
    </Wrapper>
  );
};
