import React from 'react'
import styled from 'styled-components'

const NavDiv = styled.div`
display: flex;
justify-content: space-between;
width: 80%;
align-items: center;
`;
const Categories = styled.div`
font-weight: bold;
`;
const Message = styled.text`
font-style: italic;
`;
const IconDiv = styled.div`
display: flex;
gap: 10px;
margin-right: 20px;
`;
const Nav = () => {
  return (
    <NavDiv>
    <Categories>
      Categories
    </Categories>
    {/* <Message>
    Price will change according to time.
    </Message> */}
    <p>Laptop</p> 
    <p>Desktop</p>
    <p>Network</p>
   <p> Power solution</p>
    <IconDiv>
      <i class="fa-solid fa-right-to-bracket"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-regular fa-heart"></i>
    </IconDiv>
    </NavDiv>
  )
}

export default Nav