import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;
const InfoContainer = styled.div``;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;

export const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
        </ImgContainer>
        <InfoContainer>
          <Title>Garnitur Gustavo</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequatur
            culpa, dolor eum labore laudantium, modi necessitatibus pariatur quibusdam quidem, vero
            voluptatibus. Ab at in nesciunt praesentium, quos recusandae.
          </Desc>
          <Price>699,99 zł</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
