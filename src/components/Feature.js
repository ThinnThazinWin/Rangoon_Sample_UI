import React from "react";
import styled from "styled-components";

const FeatureDiv = styled.div`
  width: 100%;
  // border: 1px solid lightblue;
  padding: 10px 10px 10px 0px;
  display: flex;
  justify-content: space-between;
 
`;
const Card = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 8px;
  padding-left: 10px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Feature = () => {
  var imgUrl =
    "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png";

  return (
    <FeatureDiv>
      <Card>
        <span>
          <p>Best Tablets</p>

          <p>buy two tablets for you and fri and pay only one!</p>
        </span>
        <Img src={imgUrl} />
      </Card>
    </FeatureDiv>
  );
};

export default Feature;
