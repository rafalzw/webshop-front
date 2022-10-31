import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile, tablet } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
  ${tablet({ height: '60vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0;
  ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #d3d3d3;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #eee;
  }
`;

export const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src='https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
        </ImgContainer>
        <InfoContainer>
          <Title>Garnitur Gustavo</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequatur
            culpa, dolor eum labore laudantium, modi necessitatibus pariatur quibusdam quidem, vero
            voluptatibus. Ab at in nesciunt praesentium, quos recusandae. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Aliquam consectetur distinctio dolorum earum totam.
            Atque cum doloribus et eum minus necessitatibus neque omnis praesentium, reiciendis
            repellendus sapiente totam velit, voluptatum.
          </Desc>
          <Price>699,99 zł</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Kolor</FilterTitle>
              <FilterColor color='blue' />
              <FilterColor color='black' />
              <FilterColor color='gray' />
            </Filter>
            <Filter>
              <FilterTitle>Rozmiar</FilterTitle>
              <FilterSize>
                <FilterSizeOption>46/170</FilterSizeOption>
                <FilterSizeOption>46/176</FilterSizeOption>
                <FilterSizeOption>46/182</FilterSizeOption>
                <FilterSizeOption>48/170</FilterSizeOption>
                <FilterSizeOption>48/176</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>DODAJ DO KOSZYKA</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
