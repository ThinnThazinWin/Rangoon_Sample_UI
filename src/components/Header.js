import React from "react";
import styled from "styled-components";
import myImage from "../assets/RDlogo.png";

const HeaderDiv = styled.div`
padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 40px;
  background: #eaf6f6;
`;
const Logo = styled.div``;
const Social = styled.div`
display: flex;
gap: 10px;
margin-right: 20px;
`;
const SearchDiv = styled.div`
display: flex;
align-items: center;
border: 2px solid #66bfbf;
padding: 10px 20px;
border-radius: 8px;
background: #fff;
`;
const Search = styled.input`
width: 300px;
text-decoration: none;
margin-right: 10px;
padding-right: 10px;
border: none;
outline: none;
background: none;
`;

const Header = () => {
  return (
    <>
    
      <HeaderDiv>
        <Logo>
          <img src={myImage} alt="" width={70} height={70} />
        </Logo>
        <SearchDiv>
          <Search placeholder="Search and enjoy your shopping.."/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </SearchDiv>
        <Social>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </Social>
      
      </HeaderDiv>
    </>
  );
};

export default Header;
