import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { mobile } from '../responsive';

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
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Garnitury</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtry:</FilterText>
          <Select>
            <Option disabled selected>
              Kolor
            </Option>
            <Option>Czarny</Option>
            <Option>Granatowy</Option>
            <Option>Niebieski</Option>
            <Option>Szaty</Option>
            <Option>Biały</Option>
            <Option>Bordowy</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Rozmiar
            </Option>
            <Option>46/170</Option>
            <Option>46/176</Option>
            <Option>46/182</Option>
            <Option>48/170</Option>
            <Option>48/176</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sortuj:</FilterText>
          <Select>
            <Option selected>Nazwa rosnąco</Option>
            <Option>Nazwa malejąco</Option>
            <Option>Cena rosnąco</Option>
            <Option>Cena malejąco</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};
