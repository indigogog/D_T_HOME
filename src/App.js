import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import CCarousel from "./CCarousel";
import CrosCardComponent from "./CrosCardComponent";
import Nav from "react-bootstrap/Nav";
import { useState } from 'react';


function App() {
  const [arr, setarg] = useState([]);
  return (
    <div className="App">
      <div className="NavPan">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="#home"><img
                alt=""
                src="https://avatars.mds.yandex.net/get-pdb/1942510/6e4cc5b6-94d1-4a60-a95a-483529b46327/s1200"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}Онлайн выставка "Кресты бензиныча"</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav>
                <Nav.Link href="#deets">Корзина {arr.length}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <CCarousel />
      <div className="TextLabel">
        Наша выставка представляет к вашему вниманию кресты Доминика Торрето
        экей бензиныч экей коленвалыч экей солярыч и так далее.
      </div>
      <CrosCardComponent func={(key) => {
        let garr=arr.slice();
        garr.push(key)
        setarg(garr);
      }} />

      <div className="App-header"></div>
    </div>
  );
}

export default App;
