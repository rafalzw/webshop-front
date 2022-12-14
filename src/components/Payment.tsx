import React, { useEffect, useRef, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { url } from '../config/config';
import { stripeKey } from '../config/stripe';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import axios from 'axios';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 900px;
  width: 80%;
  height: 80%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: url('https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    center no-repeat;
  background-size: cover;
  opacity: 0.8;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;

  h1 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
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
  showPaymentModal: boolean;
  setShowPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Payment({ showPaymentModal, setShowPaymentModal }: Props) {
  const [clientSecret, setClientSecret] = useState('');
  const cart = useSelector((state: RootState) => state.cart);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const stripePromise = loadStripe(stripeKey);

  const closeModal = (e: React.MouseEvent) => {
    console.log(modalRef.current);
    if (modalRef.current === e.target) {
      setShowPaymentModal(false);
    }
  };

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
      {showPaymentModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <ModalImg />
            <ModalContent>
              <h1>GARNIAK4YOU</h1>
              <p>
                Kwota do zapłaty: <span>{cart.total} zł</span>
              </p>
              {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              )}
            </ModalContent>
            <CloseModalButton
              aria-label='Close modal'
              onClick={() => setShowPaymentModal((prev) => !prev)}
            >
              Zamknij
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

export default Payment;
