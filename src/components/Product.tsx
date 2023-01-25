import * as React from 'react';
import styled from 'styled-components';
import { SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { ProductInterface } from 'types';
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  margin-bottom: 10px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #eee;
    transform: scale(1.1);
  }
`;

const Title = styled.p`
  font-size: 0.9rem;
  padding: 5px;
`;
const Price = styled.p`
  font-weight: 600;
`;

interface ProductProps {
  item: ProductInterface;
}

export const Product = ({ item }: ProductProps) => {
  return (
    <Container>
      <Image src={item.img} />
      <Title>{item.title}</Title>
      <Price>{Number(item.price).toFixed(2)} zł</Price>
      <Info>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
