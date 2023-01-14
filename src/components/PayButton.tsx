import { ProductInCart } from '../redux/cartRedux';
import axios from 'axios';
import { url } from '../config/config';
import styled from 'styled-components';
import React, { useState } from 'react';

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #000;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #404040;
  }
`;

interface Props {
  products: ProductInCart[];
}

export const PayButton = ({ products }: Props) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const res = await axios.post(`${url}/stripe/checkout`, products);
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button disabled={isProcessing || products.length === 0} onClick={() => handleCheckout()}>
        <span id='button-text'>{isProcessing ? 'PRZETWARZANIE... ' : 'PRZEJDŹ DALEJ'}</span>
      </Button>
    </>
  );
};
