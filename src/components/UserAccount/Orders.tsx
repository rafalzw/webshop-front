import { useEffect } from 'react';
import axios from 'axios';
import { url } from '../../config/config';

export const Orders = () => {
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${url}/orders`, {
          withCredentials: true,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <p>Historia zamówień:</p>;
};
