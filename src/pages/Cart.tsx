import * as React from 'react';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

interface TopButtonProps {
  value?: string;
}

interface SummaryItemProps {
  value?: string;
}

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button<TopButtonProps>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props: TopButtonProps) => props.value === 'filled' && 'none'};
  background-color: ${(props: TopButtonProps) =>
    props.value === 'filled' ? 'black' : 'transparent'};
  color: ${(props: TopButtonProps) => props.value === 'filled' && 'white'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.div``;
const ProductId = styled.div``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 26px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.div`
  font-size: 26px;
  font-weight: 300;
  ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
  background-color: #d3d3d3;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #d3d3d3;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.div`
  font-weight: 500;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props: SummaryItemProps) => props.value === 'total' && '600'};
  font-size: ${(props: SummaryItemProps) => props.value === 'total' && '24px'}; ;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>TWÓJ KOSZYK</Title>
        <Top>
          <TopButton>KONTYNUUJ ZAKUPY</TopButton>
          <TopTexts>
            <TopText>Artykuły(2)</TopText>
            <TopText>Lista artykułów</TopText>
          </TopTexts>
          <TopButton value='filled'>PRZEJDŹ DO KASY</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
                <Details>
                  <ProductName>
                    <b>Produkt: </b>Garnitur Gustavo
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>125488471121
                  </ProductId>
                  <ProductColor color='darkblue'></ProductColor>
                  <ProductSize>
                    <b>Rozmiar: </b>48/176
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>599,00 zł</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://static1.sklep.dastan.pl/pol_pl_Koszula-Slim-Fit-Due-Leaf-1756_1.png' />
                <Details>
                  <ProductName>
                    <b>Produkt: </b>Garnitur Mariano
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>389788471121
                  </ProductId>
                  <ProductColor color='lightblue'></ProductColor>
                  <ProductSize>
                    <b>Rozmiar: </b>48/176
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>799,00 zł</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>PODSUMOWANIE ZAMÓWIENIA</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Wartość zamówienia:</SummaryItemText>
              <SummaryItemPrice>1398,00 zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Koszt przesyłki:</SummaryItemText>
              <SummaryItemPrice>Gratis</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem value='total'>
              <SummaryItemText>Do zapłaty:</SummaryItemText>
              <SummaryItemPrice>1398,00 zł</SummaryItemPrice>
            </SummaryItem>
            <Button>PRZEJDŹ DALEJ</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
