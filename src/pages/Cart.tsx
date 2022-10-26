import * as React from 'react';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.h1``;
const Top = styled.div``;
const Bottom = styled.div``;

export const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>TWÓJ KOSZYK</Title>
        <Top></Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
