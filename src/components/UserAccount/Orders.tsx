import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../config/config';
import styled from 'styled-components';
import { OrderInterface } from 'types';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  margin: 20px 0;
  width: 80%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
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

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${url}/orders`, {
          withCredentials: true,
        });
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const headers = ['#', 'id zamówienia', 'data', 'produkty', 'suma'];

  if (!orders) {
    return null;
  }

  return (
    <Wrapper>
      <Table>
        <THead>
          <THeadTR>
            {headers.map((item, index) => (
              <TH key={index}>{item}</TH>
            ))}
          </THeadTR>
        </THead>
        <TBody>
          {orders.map((obj, index) => (
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
              <TD>{obj.amount} zł</TD>
            </TBodyTR>
          ))}
        </TBody>
      </Table>
    </Wrapper>
  );
};
