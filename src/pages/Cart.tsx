import * as React from 'react';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material';
import { mobile, tablet } from '../responsive';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { PayButton } from '../components/PayButton';
import { CheckoutSuccess } from './CheckoutSuccess';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { incQuantity, decQuantity } from '../redux/cartRedux';

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
  transition: background-color 0.5s ease;
  &:hover {
    background-color: ${(props: TopButtonProps) => (props.value === 'filled' ? '#404040' : '#eee')};
  }
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
  ${tablet({ flexDirection: 'column' })}
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const dispatch = useDispatch();

  useEffect(() => {
    sessionId && setShowOrderModal(true);
  }, []);

  const handleQuantity = (id: string, type: string) => {
    type === 'inc' ? dispatch(incQuantity(id)) : dispatch(decQuantity(id));
  };

  return (
    <Container>
      {showOrderModal && (
        <CheckoutSuccess showOrderModal={showOrderModal} setShowOrderModal={setShowOrderModal} />
      )}
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>TWÓJ KOSZYK</Title>
        <Top>
          <TopButton>
            <StyledLink to='/products/'>KONTYNUUJ ZAKUPY</StyledLink>
          </TopButton>
          <TopTexts>
            <TopText>Artykuły({cart.products.length})</TopText>
            <TopText>Lista artykułów</TopText>
          </TopTexts>
          <TopButton value='filled'>PRZEJDŹ DO KASY</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Produkt: </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Rozmiar: </b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleQuantity(product._id, 'dec')}
                    />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleQuantity(product._id, 'inc')}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>{product.price * product.quantity} zł</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>PODSUMOWANIE ZAMÓWIENIA</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Wartość zamówienia:</SummaryItemText>
              <SummaryItemPrice>{cart.total.toFixed(2)} zł</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Koszt przesyłki:</SummaryItemText>
              <SummaryItemPrice>Gratis</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem value='total'>
              <SummaryItemText>Do zapłaty:</SummaryItemText>
              <SummaryItemPrice>{cart.total.toFixed(2)} zł</SummaryItemPrice>
            </SummaryItem>
            <PayButton products={cart.products} />
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
