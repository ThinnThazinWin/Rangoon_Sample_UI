import React from 'react'
import styled from 'styled-components'

const TestimonialDiv = styled.div`
display: flex;
gap: 10px;
width: 80%;
`;
const Card = styled.div`
width: 300px;
padding: 10px;
border: 2px solid #66bfbf;
border-radius: 4px;
background: #eaf6f6;
`;
const Desc = styled.div`

`;
const Rating = styled.div``;
const Testimonial = () => {
  const rate = [1, 2, 3, 4, 5];
  const card = [1, 2, 3, 4];

  return (
    <TestimonialDiv>
      {card.map(id => (
        <Card>
  <Desc>
       <p>Dee Dee</p>

        <Rating>
          {rate.map((id) => (
            <i key={id} class="fa-solid fa-star"></i>
          ))}
        </Rating>
        <strong>the best ecommerce website in myanmar</strong>
        <p>Loresum blah blahblah Loresum blah blahblah ........ Loresum blah blahblah ................</p>
      </Desc>
</Card>
      ))}

    </TestimonialDiv>
  )
}

export default Testimonial