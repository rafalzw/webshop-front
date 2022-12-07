import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile, tablet } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../config/config';
import { ProductInterface } from 'types';

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
  ${tablet({ width: '100%' })}
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
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #404040;
  }
`;

export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${url}/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const handleQuantity = (type: string) => {
    type === 'dec' ? quantity > 1 && setQuantity(quantity - 1) : setQuantity(quantity + 1);
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.desc}</Desc>
          <Price>{product?.price} zł</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Kolor</FilterTitle>
              {product?.color?.map((c) => (
                <FilterColor color={c} key={c} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Rozmiar</FilterTitle>
              <FilterSize>
                {product?.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
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
