import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../config/config';
import styled from 'styled-components';
import { OrderInterface } from 'types';
import ClipLoader from 'react-spinners/ClipLoader';
import { EmptyList } from '../EmptyList';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  margin: 20px 0;
  width: 80%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11), 0 8px 16px rgba(0, 0, 0, 0.11);
`;

export const THead = styled.thead`
  position: sticky;
  z-index: 100;
`;

export const THeadTR = styled.tr`
  background: #eee;
`;

export const TH = styled.th`
  padding: 8px;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid #ccc;
`;

export const TBody = styled.tbody``;

export const TBodyTR = styled.tr`
  background: white;
`;

export const TD = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Orders = () => {
  const [orders, setOrders] = useState<null | OrderInterface[]>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${url}/orders`, {
          withCredentials: true,
        });
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const headers = ['#', 'id zamówienia', 'data', 'produkty', 'suma'];

  return loading ? (
    <Wrapper>
      <ClipLoader />
    </Wrapper>
  ) : (
    <Wrapper>
      {orders?.length ? (
        <Table>
          <THead>
            <THeadTR>
              {headers.map((item, index) => (
                <TH key={index}>{item}</TH>
              ))}
            </THeadTR>
          </THead>
          <TBody>
            {orders?.map((obj, index) => (
              <TBodyTR key={index}>
                <TD>{index + 1}</TD>
                <TD>{obj._id}</TD>
                <TD>{obj.createdAt?.slice(0, 10)}</TD>
                <TD>
                  {obj.products.map((item, index) => (
                    <p key={index}>
                      {item.productId} - {item.quantity} szt.
                    </p>
                  ))}
                </TD>
                <TD>{Number(obj.amount).toFixed(2)} zł</TD>
              </TBodyTR>
            ))}
          </TBody>
        </Table>
      ) : (
        <EmptyList
          type='orders'
          title='Brak zrealizowanych zamówień.'
          text='Przejdź do listy produktów i złóż swoje pierwsze zamówienie.'
        />
      )}
    </Wrapper>
  );
};
