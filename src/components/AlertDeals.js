import React from 'react'
import styled from 'styled-components'

const InboxDiv = styled.div`
max-width: 100vw;
border: 2px dashed #66bfbf;
border-radius: 8px;
padding:8px 20px;
display: flex;
justify-content: space-between;
`;
const Desc = styled.div`
margin-right: 20px;
margin-top: 10px;
`;
const Box = styled.div`
display: flex;
align-items: center;
border: 1px solid lightblue;
padding-left: 20px;
border-radius: 8px;
height: 40px;
margin-top: 20px;
margin-right: 10px;
`;
const Input = styled.input`

width: 200px;

text-decoration: none;
margin-right: 10px;
padding-right: 10px;
border: none;
outline: none;
`;
const Span = styled.span`
background: lightblue;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0px 5px 5px 0px;
padding:0px 10px 0px 10px;
`;
const Icon = styled.div`
margin-left: 10px;
`;

const AlertDeals = () => {
  return (
    <InboxDiv>
      <Desc><strong>Never Miss Out Any Exciting Deals!</strong>
      <p>Get Hot Deals Featuring in Midweek Deals</p>
      <p>Delivered Right in Your inbox</p></Desc>
      <div style={{display:'flex'}}>
      <Box>
        <Input placeholder='Enter Your Email Address'/>
        <Span>SUBSCRIBE NOW</Span>
        
      </Box>
      <Icon><i class="fa-regular fa-envelope" style={{fontSize:'40px', transform:'rotate(20deg)',}}></i></Icon>
      </div>
      <img src='https://static.vecteezy.com/system/resources/previews/002/725/809/large_2x/man-avatar-with-shopping-bags-design-free-vector.jpg' width={150} height={150}/>
    </InboxDiv>
  )
}

export default AlertDeals