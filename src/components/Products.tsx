import * as React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import { Product } from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
`;

export const Products = () => {
  return (
    <>
      <Title>Bestsellers</Title>
      <Container>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};
