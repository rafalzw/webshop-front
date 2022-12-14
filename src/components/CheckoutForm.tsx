import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import styled from 'styled-components';

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

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // eslint-disable-next-line camelcase
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occured.');
    }

    setIsProcessing(false);
  };

  return (
    <form id='payment-form' onSubmit={handleSubmit}>
      <PaymentElement />
      <Button disabled={isProcessing} id='submit'>
        <span id='button-text'>{isProcessing ? 'Przetwarzanie ... ' : 'Zapłać'}</span>
      </Button>
      {message && <div id='payment-message'>{message}</div>}
    </form>
  );
};
