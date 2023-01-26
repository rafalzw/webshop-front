import React, { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, Dispatch, SetStateAction, MouseEvent, useRef } from 'react';
import axios from 'axios';
import { url } from '../config/config';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import ClipLoader from 'react-spinners/ClipLoader';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  border-radius: 10px 0 0 10px;
  background: url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    center no-repeat;
  background-size: cover;
  opacity: 0.8;
`;

const ModalContent = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin: 10px;
  }

  span {
    font-weight: 700;
  }
`;

const CloseModalButton = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

interface Props {
  showOrderModal: boolean;
  setShowOrderModal: Dispatch<SetStateAction<boolean>>;
}

export const CheckoutSuccess = ({ showOrderModal, setShowOrderModal }: Props) => {
  const location = useLocation();
  const [orderId, setOrderId] = useState(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const closeModal = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      setShowOrderModal(false);
      navigate('/');
    }
  };

  const createOrder = async (customer: any, amount: number, sessionId: string, items: any) => {
    try {
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
      setOrderId(res.data._id);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${url}/stripe/success/${location.search}`);
      const { session, items } = res.data;

      if (session.status === 'complete') {
        await createOrder(session.customer_details, session.amount_total, session.id, items);
      }
    })();
  }, []);

  return (
    <>
      {showOrderModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <ModalImg />
            <ModalContent>
              {loading ? (
                <ClipLoader />
              ) : (
                <>
                  <h1>GARNIAK4YOU</h1>
                  {orderId ? (
                    <>
                      <p>Dziekujemy za za zakupy w naszym sklepie. </p>
                      <p>Twój numer zamówienia:</p>
                      <span>{orderId}</span>
                    </>
                  ) : (
                    <p>Coś poszło nie tak. Skontaktuj się z nami. </p>
                  )}
                </>
              )}
            </ModalContent>
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowOrderModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
