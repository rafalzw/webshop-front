import * as React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';
import { TabGroup } from '../components/UserAccount/TabGroup';

const Container = styled.div``;

export const UserAccount = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <TabGroup />
      <Newsletter />
      <Footer />
    </Container>
  );
};
