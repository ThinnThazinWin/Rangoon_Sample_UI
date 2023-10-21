import React from 'react'
import styled from 'styled-components'


const Card = styled.span`
display: flex;
justify-content: center;
width: 100%;
gap: 10px;
border: 2px solid #66bfbf;
border-radius: 20px;
padding: 5px;
background: #fff;
`;
const Col = styled.div`
margin-left: 10px;
margin-top: 5px;
`;
const Span = styled.span`
border-radius: 5px;
background: linear-gradient(to bottom, #66bfbf, #eaf6f6);
padding: 5px 20px;
`;
const Service = () => {
  return (
    
      <Card>
        <div>
      <i class="fa-solid fa-truck" style={{paddingTop: '5px'}}></i>
      </div>
        <Col>
        <Span>Delivery</Span>
        <br></br>
        <div style={{marginTop:'10px', fontStyle:'italic'}}>Just Now</div>
       
        </Col>
      </Card>
    
  )
}

export default Service