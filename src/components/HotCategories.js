import React from "react";
import styled from "styled-components";

const HotDiv = styled.div`
  // border: 1px solid lightblue;
  border-radius: 8px;
  padding: 10px 10px 10px 0px;
  width: 100%;
`;

const HotWrapper =styled.div`
border: 2px solid #66bfbf;
padding: 10px 0px 10px 0px;
 border-radius: 8px;
 background: #fff;
`;

const Card = styled.div`
  width: 100%;
  // border: 1px solid lightblue;
  display: flex;
  margin-top: 20px;
`;
const Category = styled.div`
  background: linear-gradient(to bottom,  #eaf6f6, #66bfbf);
  width: 80px;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left: 5px;

`;
const SubCategory = styled.div`
width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 5px;
`;

const Img = styled.img`
  // width: 100px;
  // height: 100px;
  width: 50%;
`;
const Hr = styled.hr`
  boder: 1px solid lightblue;
  width: 100%;

`;
const HotCategories = () => {
  var imgUrl =
    "https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Clipart.png";
  return (
    <HotDiv>
      <HotWrapper>
      <Category>Tablets</Category>
      <Card>
        <SubCategory>
          <div style={{display: 'flex', alignItems:'center',marginBottom:'5px' }}>
            <i class="fa-solid fa-chevron-right" style={{marginRight:'10px'}}></i>Headphones
          </div>
          <div>
      
            <i class="fa-solid fa-chevron-right" style={{marginRight:'10px',marginBottom:'5px'}}></i>ipods
          </div>
          <div style={{display: 'flex', alignItems:'center',marginBottom:'5px' }}>
            <i class="fa-solid fa-chevron-right" style={{marginRight:'10px'}}></i>Headphones
          </div>
          <div>
      
            <i class="fa-solid fa-chevron-right" style={{marginRight:'10px'}}></i>ipods
          </div>
        </SubCategory>
        <Img src={imgUrl} />
      </Card>
     
      <Hr></Hr>
      
      <i class="fa-solid fa-chevron-right" style={{margin:'0px 5px', }}></i>More
      </HotWrapper>
    </HotDiv>
  );
};

export default HotCategories;
