import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Nav from "./components/Nav";
import styled from "styled-components";
import ImageSlider from "./components/ImageSlider";
import Category from "./components/Category";

const Container = styled.div`
  margin: 20px 0px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: ${(props) => (props.className === "slider" ? "auto" : "40px")};
  background: ${(props) => (props.className === "slider" ? "#fff" : "#eaf6f6")};
  padding: 10px 0px;
  margin-top: ${props => props.className === 'slider' ? '10px' : ''}
`;
function App() {
  return (
    <Container>
      <Wrapper>
        <Div>
          <Header />
        </Div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontStyle: "italic", marginRight: "10px" }}>
            Price will change according to time.
          </p>
          <p style={{ fontStyle: "italic", marginRight: "5px" }}>
            If you need something else, call us.
          </p>
          <i class="fa-solid fa-phone-flip"></i>
        </div>

        <Div>
          <Nav />
        </Div>
        <Div className="slider">
          <div style={{width: '80%', display:'flex'}}>
          <Category />
          <ImageSlider />
          </div>
        </Div>
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', }}>

        <HomeScreen />
        </div>
        <div style={{width:'100%',display:'flex', alignItems:'center', justifyContent:'center', background:'#eaf6f6', marginTop:'20px'}}>
        <Footer />
        </div>
      </Wrapper>
    </Container>
  );
}

export default App;
