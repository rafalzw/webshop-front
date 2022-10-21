import * as React from 'react';
import styled from 'styled-components';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { sliderItems } from '../data';

interface ArrowProps {
  direction: string;
}
interface WrapperProps {
  slideIndex: number;
}
interface SlideProps {
  bg: string;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props: WrapperProps) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props: SlideProps) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  margin: 50px 0 0 100px;
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-right: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleCLick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleCLick('left')}>
        <ArrowBackIosNewOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>KUP TERAZ</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleCLick('right')}>
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};
