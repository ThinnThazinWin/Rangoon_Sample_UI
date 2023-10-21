import React from 'react'
import styled from 'styled-components'

const LatestDiv = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 10px 0px 10px 0px;

`;

const Card = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

gap: 20;
border: 1px solid lightblue;
// border-radius: 8px;
padding: 20px 0px;

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
const Img = styled.img`
  width: 180px;
  // height: 200px;
`;
const Rating = styled.div``;
const Latest = () => {
  const rate = [1, 2, 3, 4, 5];

  var imgUrl =
  "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png";
  return (
    <LatestDiv>
      <Card>
      <Img src={imgUrl} />
      <Hr></Hr>
      <Desc>
        <strong>iphone pro max</strong>
        <p>Loresum blah blhallllllllllll</p>
      </Desc>
      <Rating>
          {rate.map((id) => (
            <i key={id} class="fa-solid fa-star"></i>
          ))}
        </Rating>
      </Card>
    </LatestDiv>
  )
}

export default Latest