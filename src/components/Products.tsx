import * as React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import { Product } from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../config/config';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

type Filters = {
  color?: string;
  size?: string;
};

interface ProductsProps {
  cat?: string;
  filters?: Filters;
  sort?: string;
}

export const Products = ({ cat, filters, sort }: ProductsProps) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `${url}/products?category=${cat}` : `${url}/products`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  return (
    <>
      <Container>
        {popularProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};
