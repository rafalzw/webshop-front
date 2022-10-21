import * as React from 'react';
import styled from 'styled-components';
import { LocalShippingOutlined } from '@mui/icons-material';

const Container = styled.div`
  height: 40px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Text = styled.p`
  margin-left: 10px;
`;

export const Announcement = () => {
  return (
    <Container>
      <LocalShippingOutlined />
      <Text>Darmowa dostawa już od 500 zł!</Text>
    </Container>
  );
};
