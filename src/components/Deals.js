import React from "react";
import styled from "styled-components";


const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #66bfbf;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const Hr = styled.hr`
  width: 100%;
  border: 1px solid lightblue;
`;
const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.div``;
const Rating = styled.div``;
const Deals = () => {
  const rate = [1, 2, 3, 4, 5];
  var imgUrl =
    "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png";
  return (
   
      <Card>
        <Img src={imgUrl} />
        <div>
          <p>iPhone</p>
          <p>Loresum ultara blah blah..</p>
        </div>
        {/* <Hr></Hr>
        <Desc>
          <Rating>
            {rate.map((id) => (
              <i key={id} class="fa-solid fa-star"></i>
            ))}
          </Rating>
          <Price>5,000,000Ks</Price>
        </Desc> */}
      </Card>
 
  );
};

export default Deals;
