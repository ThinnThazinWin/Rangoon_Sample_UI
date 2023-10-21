import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const Col = styled.div`
  width: 50%;
  
`;
const Footer = () => {
  return (
    <footer style={{ width:'80%'}}>
      <FooterDiv>
        <Col>
          <strong> Explore Us</strong>
          <div><p>Home</p>  <p>Login</p><p>Store</p>  <p>Accessories</p> <p>Switch</p> <p>Wifi</p><p>Customer Care</p></div>
        </Col>
        <Col>
          <strong>Contact Us</strong>
          <div>
            11-A, Mya Wut Yee Lane, A One Street, Ward 5, Mayangone
            Township, Yangon.
          </div>
        </Col>
      </FooterDiv>
      <div style={{display: 'flex', alignItems:'center', justifyContent:'center', width: '100%',margin:'20px 0px' }}>@ All rights reserved by Rangoon Discount @ 2022</div>
    </footer>
  );
};

export default Footer;
