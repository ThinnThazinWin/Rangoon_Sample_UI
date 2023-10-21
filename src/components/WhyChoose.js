import React from "react";
import styled from "styled-components";

const WhyChooseDiv = styled.div`
  margin-top: 10px;
  border: 2px solid  #66bfbf;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
`;
const WhyChoose = () => {
  return (
    <WhyChooseDiv>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>Our Pricing</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <p>Brand New </p>
      <p>Warranty</p>
      <p>Guarantee</p>
      <p>Working Hours</p>
    </WhyChooseDiv>
  );
};

export default WhyChoose;
