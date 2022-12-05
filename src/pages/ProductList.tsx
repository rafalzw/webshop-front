import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: '0 10px', display: 'flex', flexDirection: 'column' })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
  ${mobile({ marginRight: '0' })}
`;
const Select = styled.select`
  padding: 10px;
  margin: 20px;
  ${mobile({ margin: '10px 0' })}
`;
const Option = styled.option``;

export const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const location = useLocation();
  const cat = location.pathname.split('/')[2];

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Garnitury</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtry:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Kolor</Option>
            <Option>Czarny</Option>
            <Option>Granatowy</Option>
            <Option>Niebieski</Option>
            <Option>Szaty</Option>
            <Option>Biały</Option>
            <Option>Bordowy</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>Rozmiar</Option>
            <Option>46/170</Option>
            <Option>46/176</Option>
            <Option>46/182</Option>
            <Option>48/170</Option>
            <Option>48/176</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj:</FilterText>
          <Select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value)}>
            <Option value='newest'>Najnowsze</Option>
            <Option value='asc'>Cena rosnąco</Option>
            <Option value='desc'>Cena malejąco</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
