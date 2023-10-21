import React from "react";
import Feature from "../components/Feature";
import styled from "styled-components";
import HotCategories from "../components/HotCategories";
import Products from "../components/Product";
import Latest from "../components/Latest";
import Deals from "../components/Deals";
import Service from "../components/Service";
import AlertDeals from "../components/AlertDeals";
import HowWork from "../components/HowWork";
import WhyChoose from "../components/WhyChoose";
import Testimonial from "../components/Testimonial";
import Collaborate from "../components/Collaborate";
import Carousel from "react-elastic-carousel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
`;
const ServiceDiv = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: center;
 gap: 20px;
`;
const FeatureDiv = styled.div`
  display: flex;
  width: 80%;
`;
const HotDiv = styled.div`
  display: flex;
  width: 80%;
`;

const LatestDiv = styled.div`
  display: flex;
`;
const DealsContainer = styled.div`
  border: 2px solid #66bfbf;
  display: flex;
  // justify-content: space-between;
  width: 80%;
  background: #fff;
  margin-top: 10px;
`;
const DealsDiv = styled.div`
  display: flex;
  // border: 1px solid lightblue;
  position: relative;
  padding: 25px 0px;
  margin-right: 20px;
  gap: 1px;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${(props) => (props.className === "left" ? "-18px" : "")};
  right: ${(props) => (props.className === "right" ? "-18px" : "")};
  z-index: 10;
  top: 150px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  width: 40%;
`;
const AlertDealsDiv = styled.div`
width: 80%;
`;
const StoreDiv = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content:center;
background:#eaf6f6;
margin-top: 10px;
`;
const HowWorkDiv = styled.div`
  width: 50%;
  // border: 1px solid lightblue;
`;

const WhyChooseDiv = styled.div`
  width: 50%;
  // border: 1px solid lightblue;
`;
const FAQ = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #eaf6f6;
`;

const HomeScreen = () => {
  const feature = [1, 2, 3, 4];
  const hot = [1, 2, 3, 4];
  const latest = [1, 2, 3, 4, 5];
  const deals = [1, 2, 3, 4, 5, 6];
  const service = [1, 2, 3, ];

  const getBox = () => {
    const aa = document.querySelector("DealsDiv");
    console.log(aa);
  };
  const prev = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = width - box.scrollLeft;
  };
  const next = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = width + box.scrollLeft;
  };
  return (
    <Container>
      <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', background:'#eaf6f6', padding:'20px 0px'}}>
      <ServiceDiv>
        {service.map((i) => (
          <Service />
        ))}
      </ServiceDiv>
      </div>
      <strong>Best Sellers</strong>
      <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px 0px'}}>
        <FeatureDiv>
          {feature.map((i) => (
            <Feature />
          ))}
        </FeatureDiv>
      </div>
      <div style={{width:'100%', display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', background:'#eaf6f6', padding:'20px 0px'}}>
      <strong>Hot Categories</strong>
   
        <HotDiv>
          {hot.map((i) => (
            <HotCategories />
          ))}
        </HotDiv>
     
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "10px",
        }}
      >
        <strong> Latest Products</strong>
        {/* <div>
          Show More
          <i class="fa-solid fa-chevron-right"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </div> */}
      </div>
      <div>
        <LatestDiv>
          {latest.map((i) => (
            <Latest />
          ))}
        </LatestDiv>
      </div>
      <div style={{width:'100%', display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center', background:'#eaf6f6', padding:'20px 0px'}}>
      <strong> Today Deals</strong>
      <DealsContainer>
        <Title>
          <strong>Deals Of the Day!</strong>
          <p>00: 00: 00</p>
        </Title>
        <div
          style={{
            width: "70%",
            justifyContent: "space-between",
            display: "flex",
            position:'relative'
          }}
        >
          <Icon className="left" onClick={() => prev()}>
            <i class="fa-solid fa-chevron-left"></i>
          </Icon>
          <DealsDiv className="DealsDiv">
            {deals.map((i) => (
              <>
                <Deals />
              </>
            ))}
            {/* {deals.map(item => <div key={item.id}>hello</div>)} */}
          </DealsDiv>
          <Icon className="right" onClick={() => next()}>
            <i class="fa-solid fa-chevron-right"></i>
          </Icon>
        </div>
      </DealsContainer>
      </div>
      <AlertDealsDiv>
        <AlertDeals />
      </AlertDealsDiv>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>Products in Store</strong>
        <div>
          Show More
          <i class="fa-solid fa-chevron-right"></i>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div> */}
      <div style={{width:'100%',display:'flex', flexDirection:'column',alignItems:'center', justifyContent:'center',background:'#eaf6f6', padding:'10px 0px'}}>
      <strong style={{marginTop:'10px'}}>Products in Store</strong>
      <StoreDiv>
        <Products />
      </StoreDiv>
      </div>
     
      <Collaborate />
      <FAQ>
        <div style={{width:'80%', display:'flex', gap: '20px', margin: '20px 0px'}}>
        <HowWorkDiv>
          <strong>How Rangoon Discount Work ? </strong>
          <HowWork />
        </HowWorkDiv>

        <WhyChooseDiv>
          <strong>Why Choose Us? </strong>
          <WhyChoose />
        </WhyChooseDiv>
        </div>
      </FAQ>
      <strong>Our Happy Customers and Clients' loyalty</strong>
      <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Testimonial />
      </div>
    </Container>
  );
};

export default HomeScreen;
