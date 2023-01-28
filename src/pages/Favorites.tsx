import * as React from 'react';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styled from 'styled-components';
import { mobile, tablet } from '../responsive';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const Button = styled.button`
  font-size: 0.8rem;
  border: none;
  padding: 10px 30px;
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin: 20px 20px 10px 0;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #404040;
  }
  ${mobile({ width: '100%', margin: '10px 0' })}
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  ${mobile({ flexDirection: 'column' })}
  ${tablet({ flexDirection: 'column' })}
`;
const Product = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0 10px 0;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 1rem;
`;
const Image = styled.img`
  width: 100px;
`;

const ProductName = styled.div``;
const ProductId = styled.div``;

const ProductPrice = styled.div`
  font-weight: 600;
`;

const Hr = styled.hr`
  background-color: #d3d3d3;
  width: 80%;
  margin: 10px 0;
  border: none;
  height: 1px;
`;

export const Favorites = () => {
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>ULUBIONE</Title>
        <List>
          <Hr />
          {favorites.products.map((product) => (
            <>
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                </ProductDetail>
                <ProductDetail>
                  <ProductName>{product.title}</ProductName>
                </ProductDetail>
                <ProductDetail>
                  <ProductId>{product.addDate}</ProductId>
                </ProductDetail>
                <ProductDetail>
                  <ProductPrice>{Number(product.price).toFixed(2)} zł</ProductPrice>
                </ProductDetail>
                <ProductDetail>
                  <Button>Usuń z listy</Button>
                </ProductDetail>
              </Product>
              <Hr />
            </>
          ))}
        </List>
      </Wrapper>
      <Footer />
    </Container>
  );
};
