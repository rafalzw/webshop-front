import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { url } from '../config/config';
import { stripeKey } from '../config/stripe';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axios from 'axios';

function Payment() {
  const [clientSecret, setClientSecret] = useState('');
  const cart = useSelector((state: RootState) => state.cart);

  const stripePromise = loadStripe(stripeKey);

  useEffect(() => {
    (async () => {
      const res = await axios.post(
        `${url}/stripe/create-payment-intent`,
        { amount: cart.total * 100 },
        { method: 'post', withCredentials: true },
      );
      const { clientSecret } = res.data;
      setClientSecret(clientSecret);
    })();
  }, []);

  return (
    <>
      <h1>React Payment</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
