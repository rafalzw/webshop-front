import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room } from '@mui/icons-material';
import * as React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
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
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
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
      <Center>
        <Title>Przydatne Linki</Title>
        <List>
          <ListItem>Strona Główna</ListItem>
          <ListItem>Koszyk</ListItem>
          <ListItem>Garnitury</ListItem>
          <ListItem>Koszule</ListItem>
          <ListItem>Obuwie</ListItem>
          <ListItem>Akcesoria</ListItem>
          <ListItem>Promocje</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Kontakt</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          XX Ulica, XX-XXX Miasto
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +48 123 456 789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          kontakt@garniak4you.pl
        </ContactItem>
      </Right>
    </Container>
  );
};
