import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserData } from './UserData';
import { Orders } from './Orders';

interface Props {
  active: boolean;
}

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;

  ${(props: Props) =>
    props.active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

const types = ['Edytuj dane', 'Historia Zamówień'];

export const TabGroup = () => {
  const [active, setActive] = useState(types[0]);

  return (
    <>
      <ButtonGroup>
        {types.map((type) => (
          <Tab key={type} active={active === type} onClick={() => setActive(type)}>
            {type}
          </Tab>
        ))}
      </ButtonGroup>
      {active === 'Edytuj dane' ? <UserData /> : <Orders />}
    </>
  );
};
