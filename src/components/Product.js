import React from 'react'
import Card2 from './Card2'
import styled from 'styled-components'

const ProductDiv = styled.div`
// display: flex;
// width: calc(20%-10px);
// width: 100%;
// flex-wrap:wrap;
display: grid;
grid-template-columns: repeat(4, 1fr); /* 5 items per row */
grid-gap: 16px 0px;
width: 80%;

`;
const Product = () => {
  const product = [1, 2, 3, 4,5, 6, 7, 8,9,10,11,12,13,14,15,16];
  return (
    <ProductDiv>
{product.map(id => (

<Card2 key={id}/>
)
  
  )}
   
    
    </ProductDiv>
  )
}

export default Product