import React from "react";
import styled from "styled-components";

const CategoryDiv = styled.div`
  width: 30%;
  border: 2px solid  #66bfbf;
  border-radius: 4px;
  height: 270px;
  // padding: 10px 0px;
`;
const List = styled.ul`
  list-style-type: none;
  padding: inherit;
`;
const ListItem = styled.li`
  text-decoration: none;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    border-width: 0px 0px 0.1px 0px;
    border-style: solid;
  }
`;
const Category = () => {
  return (
    <CategoryDiv>
      <List>
        <ListItem>
          <span>Laptop</span> <i class="fa-solid fa-chevron-right"></i>
        </ListItem>

        <ListItem>
          <span>desktop</span> <i class="fa-solid fa-chevron-right"></i>
        </ListItem>

        <ListItem>
          <span>Gadget</span> <i class="fa-solid fa-chevron-right"></i>
        </ListItem>

        <ListItem>
          <span>UPS</span> <i class="fa-solid fa-chevron-right"></i>
        </ListItem>

        <ListItem>
          <span>Computer Accessories</span>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </ListItem>

        <ListItem>
          <span>Network Accessories</span>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </ListItem>
      </List>

      {/* <p>Power Generator</p>
        <p>AVR</p>
        <p>Router</p>
        <p>Switch</p>
        <p>Wifi</p> */}
    </CategoryDiv>
  );
};

export default Category;
