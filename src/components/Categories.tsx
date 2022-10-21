import * as React from 'react';
import styled from 'styled-components';
import { CategoryItem } from './CategoryItem';
import { categories } from '../data';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};
