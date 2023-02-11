import * as React from 'react';
import styled from 'styled-components';
import { SearchOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import { ProductInterface } from 'types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct, ProductInFavorites } from '../redux/favoritesRedux';
import { apiUrl } from '../config/config';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  margin-bottom: 10px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #eee;
    transform: scale(1.1);
  }
`;

const Title = styled.p`
  font-size: 0.9rem;
  padding: 5px;
`;
const Price = styled.p`
  font-weight: 600;
`;

interface ProductProps {
  item: ProductInterface;
}

export const Product = ({ item }: ProductProps) => {
  const { _id, img, title, price } = item;
  const dispatch = useDispatch();
  const publicFolder = `${apiUrl}/product-photos/`;

  const handleFavorites = (product: ProductInFavorites) => {
    const date = new Date().toLocaleDateString();
    dispatch(addProduct({ ...product, addDate: date }));
  };

  return (
    <Container>
      <Image src={publicFolder + img} />
      <Title>{item.title}</Title>
      <Price>{Number(price).toFixed(2)} zł</Price>
      <Info>
        <Icon>
          <Link to={`/product/${_id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined onClick={() => handleFavorites({ _id, img, price, title })} />
        </Icon>
      </Info>
    </Container>
  );
};
