import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 40px;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

export const Announcement = () => {
  return <Container>Darmowa dostawa już od 500 zł!</Container>
}
