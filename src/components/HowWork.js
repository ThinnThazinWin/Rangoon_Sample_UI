import React, { useState } from "react";
import styled from "styled-components";

const WorkDiv = styled.div`
  margin-top: 10px;
  border: 2px solid #66bfbf;
  padding: 10px;
  border-radius: 8px;
  background: #fff;
`;
const Ans = styled.div`

  overflow: hidden;
  max-height: 0;
`;
const AnsClick = styled.div`
  height: auto;
  max-height: 9999px;
`;

const AccordionContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px;
`;

const AccordionHeader = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AccordionContent = styled.div`
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const HowWork = () => {
  const data = [
    { q: "login", ans: "Login is blah blah......" },
    { q: "add to cart", ans: "Login is blah blah......" },
    { q: "checkout", ans: "Login is blah blah......" },
    { q: "shipping", ans: "Login is blah blah......" },
    { q: "payment", ans: "Login is blah blah......" },
    { q: "rating", ans: "Login is blah blah......" },
  ];
  // const [Desc, setDesc] = useState();
  // const [Minus, setMinus] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  // const toggle = (i) => {
  //   if (Desc === i) {
  //     setDesc(null);
  //   }
  //   setDesc(i);
  // };
  // const toggleMinus  = (i) => {
  //   if (Minus === i) {
  //     setMinus(null);
  //   }
  //   setMinus(i);
  // };
  return (
    <WorkDiv>
      {data.map((item, i) => (
        <>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>{item.q}</span>
            {Desc === i ? (
              <i class="fa-solid fa-circle-minus" onClick={() => toggleMinus(i)}></i>
            ) : (
              <i class="fa-solid fa-circle-plus" onClick={() => toggle(i)}></i>
            )}
          </div>
          {Desc === i ? (
            <>
            <AnsClick> {item.ans}</AnsClick>
            
            </>
          ):''} */}
  


        </>
      ))}
        <AccordionContainer>
      <AccordionHeader onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>Login</span> 
        {isOpen ? <span>-</span>  : <span>+</span>}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}><div>
        <p>
        llllllllllllllllllllllllllllllll</p>llllllllllllllllllllllllllllllllllllllllllllllllllpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        </div></AccordionContent>
    </AccordionContainer>
    <AccordionContainer>
      <AccordionHeader onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>Checkout</span> 
        {isOpen ? <span>-</span>  : <span>+</span>}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}><div>
        <p>
        llllllllllllllllllllllllllllllll</p>llllllllllllllllllllllllllllllllllllllllllllllllllpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        </div></AccordionContent>
    </AccordionContainer>
    <AccordionContainer>
      <AccordionHeader onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>Payment</span> 
        {isOpen ? <span>-</span>  : <span>+</span>}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}><div>
        <p>
        llllllllllllllllllllllllllllllll</p>llllllllllllllllllllllllllllllllllllllllllllllllllpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        </div></AccordionContent>
    </AccordionContainer>

      {/* <p>Add to Cart</p>
      <p>Checkout Process</p>
      <p>Shipping Address</p>
      <p>Shipping Delivery Method</p>
      <p>Shipping Payment Type</p>
      <p>Subscribe for Deals</p>
      <p>Rating</p> */}
    </WorkDiv>
  );
};

export default HowWork;
