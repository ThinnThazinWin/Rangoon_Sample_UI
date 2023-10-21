import React from "react";
import styled from "styled-components";
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 20;
  // border: 1px solid lightblue;
  // // border-radius: 8px;
  // padding: 20px;
  position: relative;

  // width: calc(20%);
  border: 1px solid lightblue;
background: #fff;

`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const SaleDiv = styled.div`
display:flex;
justify-content: flex-end;
position: absolute;
right: 1px;
top: 13px;
`;
const Sale = styled.div`
  text-align: center;
  width: 50px;
  background-color: red;
  transform: rotate(45deg);
`;

const Hr = styled.hr`
  width: 100%;
  border: 1px solid lightblue;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const IconDiv = styled.div`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const Brand = styled.div``;
const Price = styled.div``;
const Rating = styled.div``;
const Card2 = () => {
  const rate = [1, 2, 3, 4, 5];
  var imgUrl =
    "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png";
  return (
    <CardDiv>
      <SaleDiv>
        <Sale>Sale!</Sale>
      </SaleDiv>

      <Img src={imgUrl} />
      <Desc>
        <Brand>iPhone</Brand>
        <p>Loresum blah blah .....</p>
        <Price>5,000,000Ks</Price>

        <Rating>
          {rate.map((id) => (
            <i key={id} class="fa-solid fa-star"></i>
          ))}
        </Rating>
      </Desc>
      <Hr></Hr>
      <IconDiv>
        <i class="fa-solid fa-cart-shopping" style={{marginLeft:'5px'}}></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-share" style={{marginRight:'5px'}}></i>
      </IconDiv>
    </CardDiv>
  );
};

export default Card2;
