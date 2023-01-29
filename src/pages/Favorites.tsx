import React from 'react';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { mobile, tablet } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { removeProduct } from '../redux/favoritesRedux';
import { EmptyList } from '../components/EmptyList';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-size: 0.9rem;
  border: none;
  padding: 10px 30px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin: 5px 20px 5px 0;
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
  cursor: pointer;
`;

const ProductName = styled.div`
  cursor: pointer;
`;
const ProductAddDate = styled.div``;

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (id: string | undefined) => {
    navigate(`/product/${id}`);
  };

  const handleRemove = (id: string | undefined) => {
    dispatch(removeProduct(id));
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>ULUBIONE</Title>
        {favorites.products.length ? (
          <List>
            <Hr />
            {favorites.products.map((product) => (
              <>
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} onClick={() => handleClick(product._id)} />
                  </ProductDetail>
                  <ProductDetail>
                    <ProductName onClick={() => handleClick(product._id)}>
                      {product.title}
                    </ProductName>
                  </ProductDetail>
                  <ProductDetail>
                    <ProductAddDate>{product.addDate}</ProductAddDate>
                  </ProductDetail>
                  <ProductDetail>
                    <ProductPrice>{Number(product.price).toFixed(2)} zł</ProductPrice>
                  </ProductDetail>
                  <ProductDetail>
                    <ButtonWrapper>
                      <Button onClick={() => handleClick(product._id)}>Kup teraz</Button>
                      <Button onClick={() => handleRemove(product._id)}>Usuń z listy</Button>
                    </ButtonWrapper>
                  </ProductDetail>
                </Product>
                <Hr />
              </>
            ))}
          </List>
        ) : (
          <EmptyList
            type='favorites'
            title='Lista zakupowa jest pusta.'
            text='Dodaj do niej produkty, które lubisz i chcesz kupić później.'
          />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};
