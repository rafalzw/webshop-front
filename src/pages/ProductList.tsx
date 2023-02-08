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
  text-transform: uppercase;
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
const Button = styled.button`
  border: none;
  padding: 8px;
  background-color: #000;
  margin: 10px;
  font-size: 0.8rem;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #404040;
  }
  ${mobile({ width: '100%', margin: '10px 0' })}
`;

export const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  const location = useLocation();
  const cat = location.pathname.split('/')[2];

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtry:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Kolor</Option>
            <Option value='black'>Czarny</Option>
            <Option value='darkblue'>Granatowy</Option>
            <Option value='blue'>Niebieski</Option>
            <Option value='gray'>Szary</Option>
            <Option value='white'>Biały</Option>
            <Option value='darkred'>Bordowy</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>Rozmiar</Option>
            <Option value='s'>S</Option>
            <Option value='m'>M</Option>
            <Option value='l'>L</Option>
            <Option value='xl'>Xl</Option>
            <Option value='xxl'>XXL</Option>
          </Select>
          <Button onClick={() => setFilters({})}>usuń filtry</Button>
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
