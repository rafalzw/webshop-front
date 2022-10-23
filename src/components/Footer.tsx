import { Facebook, Instagram, Pinterest } from '@mui/icons-material';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GARNIAK4U</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid consequuntur
          ea est hic iure maiores minima minus, nesciunt perspiciatis praesentium provident quam
          reiciendis sint tempora temporibus voluptate voluptatem voluptates.
        </Desc>
        <SocialContainer>
          <SocialIcon color='#3b5998'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='#C13584'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='#E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};
