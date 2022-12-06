import * as React from 'react';
import styled from 'styled-components';
import { Categories } from '../data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: #555;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

interface CategoryProps {
  item: Categories;
}

export const CategoryItem = ({ item }: CategoryProps) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>KUP TERAZ</Button>
        </Info>
      </Link>
    </Container>
  );
};
