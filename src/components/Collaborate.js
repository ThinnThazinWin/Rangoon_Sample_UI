import React from "react";
import styled from "styled-components";
import asus from "../assets/Partners/Asus.png";
import equip from "../assets/Partners/Equip.png";
import level from "../assets/Partners/Levelone.png";
import ignite from "../assets/Partners/Ignitenet.jpg";
import digitus from "../assets/Partners/Digitus.jpg";
import lenovo from "../assets/Partners/Lenovo.png";
import msi from "../assets/Partners/MSI.jpg";
import mikrotik from "../assets/Partners/Mikrotik.svg";
import ubiquiti from "../assets/Partners/Ubiquiti.jpg";
import linksys from "../assets/Partners/Linksys.png";
import nikomax from "../assets/Partners/Nikomax.jpg";
import bdcom from "../assets/Partners/BDCOM.jpg";
import teltonika from "../assets/Partners/Teltonika.jpg";
import dell from "../assets/Partners/Dell.jpg";

const CollaborateDiv = styled.div`
width: 70%;
 display:flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 10px;
margin-left: 65px;
margin-right: 65px;
`;
const Img = styled.img`
  width: 120px;
`;

const Collaborate = () => {
  const collaborate = [
    asus,
    equip,
    level,
    ignite,
    digitus,
    lenovo,
    msi,
    mikrotik,
    ubiquiti,
    linksys,
    nikomax,
    bdcom,
    teltonika,
    dell,
  ];

  return (
    <div style={{ width:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <CollaborateDiv>
        {collaborate.slice(0, 5).map((brand, id) => (
          <Img key={id} src={brand} alt="/" />
        ))}
      </CollaborateDiv>
    <div style={{display:'inline-block', alignSelf:'center', padding:'10px 15px', border:'1px solid lightblue', borderRadius:'8px', background:' #66bfbf', color:'#fff', fontWeight:'bold'}}>Show More</div>
    </div>
  );
};

export default Collaborate;
