import * as React from 'react';
import styled from 'styled-components';
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

export interface ProductInterface {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string[];
  color: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export const Products = ({ cat = '', filters = {}, sort = '' }: ProductsProps) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductInterface[]>([]);

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

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters as Filters).every(([key, value]) =>
            item[key as keyof typeof filters].includes(value),
          ),
        ),
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()),
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <>
      <Container>
        {cat
          ? filteredProducts.map((item) => <Product key={item._id} item={item} />)
          : products.slice(0, 6).map((item) => <Product key={item._id} item={item} />)}
      </Container>
    </>
  );
};
