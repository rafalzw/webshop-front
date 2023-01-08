import React, { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../config/config';

export const CheckoutSuccess = () => {
  const location = useLocation();
  const [orderId, setOrderId] = useState();

  const createOrder = async (customer: any, amount: number, items: any) => {
    const res = await axios.post(
      `${url}/orders`,
      {
        address: {
          street: customer.address.street,
          postCode: customer.address.postal_code,
          city: customer.address.city,
          country: customer.address.country,
        },
        amount: amount / 100,
        products: items.map((item: any) => {
          return { productId: item.price.product.metadata.id, quantity: item.quantity };
        }),
      },
      { method: 'post', withCredentials: true },
    );
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${url}/stripe/success/${location.search}`);
      const { status, customer, amount, items } = res.data;

      if (status === 'complete') {
        await createOrder(customer, amount, items);
      }
    })();
  }, []);

  return <h1>Success</h1>;
};
