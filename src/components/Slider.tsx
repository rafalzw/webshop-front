import * as React from 'react'
import styled from 'styled-components'
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'

interface ArrowProps {
  direction: string
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`
const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #efefef;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props: ArrowProps) => props.direction === 'left' && '10px'};
  right: ${(props: ArrowProps) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`

const Wrapper = styled.div`
  height: 100%;
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  margin: 50px 0 0 100px;
  height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 60px;
`
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

export const Slider = () => {
  return (
    <Container>
      <Arrow direction='left'>
        <ArrowBackIosNewOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src='https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          </ImgContainer>
          <InfoContainer>
            <Title>JESIENNA WYPRZEDAŻ</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto obcaecati sint.
              Accusantium aliquam aliquid ducimus eius enim ipsa minus, odit porro, praesentium,
              quaerat quasi recusandae repellendus vero vitae voluptates.
            </Desc>
            <Button>KUP TERAZ</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction='right'>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  )
}
