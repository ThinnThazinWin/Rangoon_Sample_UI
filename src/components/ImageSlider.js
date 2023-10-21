import React from 'react'
import slide1 from '../assets/desktop1.jpg'
import slide2 from '../assets/desktop2.jpg'
import styled from 'styled-components'

const ImgSliderDiv = styled.div `
width: 90%;

`;
const Img = styled.img`
width: 50%;
height: 270px;
`;
const ImageSlider = () => {
  return (
    <ImgSliderDiv>
      <Img src={slide1} />
      <Img src={slide2} />
    </ImgSliderDiv>
  )
}

export default ImageSlider