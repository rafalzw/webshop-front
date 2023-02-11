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
import { useNavigate, useSearchParams } from 'react-router-dom';
import { incQuantity, decQuantity } from '../redux/cartRedux';
import { EmptyList } from '../components/EmptyList';
import { productImagesFolder } from '../config/config';

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
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border: ${(props: TopButtonProps) => props.value === 'filled' && 'none'};
  background-color: ${(props: TopButtonProps) =>
    props.value === 'filled' ? 'black' : 'transparent'};
  color: ${(props: TopButtonProps) => props.value === 'filled' && 'white'};
  transition: background-color 0.4s ease;
  &:hover {
    background-color: ${(props: TopButtonProps) => (props.value === 'filled' ? '#404040' : '#eee')};
  }
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
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
  ${mobile({ flexDirection: 'column', alignItems: 'center' })}
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

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    sessionId && setShowOrderModal(true);
  }, []);

  const handleQuantity = (id: string, size: string, color: string, type: string) => {
    type === 'inc'
      ? dispatch(incQuantity({ id, size, color }))
      : dispatch(decQuantity({ id, size, color }));
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
        {cart.products.length ? (
          <>
            <Top>
              <TopButton onClick={() => navigate('/products/')}>kontynuuj zakupy</TopButton>
              <TopTexts>
                <TopText>Artykuły({cart.products.length})</TopText>
                <TopText>Lista artykułów</TopText>
              </TopTexts>
              <TopButton onClick={() => navigate(-1)} value='filled'>
                powrót
              </TopButton>
            </Top>
            <Bottom>
              <Info>
                {cart.products.map((product) => (
                  <Product key={product._id + product.size + product.color}>
                    <ProductDetail>
                      <Image src={productImagesFolder + product.img} />
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
                          {product.size.toUpperCase()}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Remove
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            handleQuantity(product._id, product.size, product.color, 'dec')
                          }
                        />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Add
                          style={{ cursor: 'pointer' }}
                          onClick={() =>
                            handleQuantity(product._id, product.size, product.color, 'inc')
                          }
                        />
                      </ProductAmountContainer>
                      <ProductPrice>
                        {Number(product.price * product.quantity).toFixed(2)} zł
                      </ProductPrice>
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
          </>
        ) : (
          <EmptyList
            type='cart'
            title='Twój koszyk jest pusty.'
            text='Dodaj do niego produkty, aby móc rozpocząć składanie zamówienia.'
          />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};
