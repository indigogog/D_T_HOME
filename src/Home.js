import "./App.css";
import React from "react";
import CCarousel from "./CCarousel";
import CrosCardComponent from "./CrosCardComponent";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Basket from "./Basket";
import Button from 'react-bootstrap/Button'


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      is_open_basket: false,
    };
    this.page_render = this.page_render.bind(this);
    this.openBasket = this.openBasket.bind(this);
  }

  page_render() {
      console.log(this.state.is_open_basket);
    if (this.state.is_open_basket === true) {
      return <Basket arr = {this.state.arr}/>;
    } else {
      return (
        <div>
          <CCarousel />
          <div className="TextLabel">
            Наша выставка представляет к вашему вниманию кресты Доминика Торрето
            экей бензиныч экей коленвалыч экей солярыч и так далее.
          </div>
          <CrosCardComponent
            func={(key) => {
              let garr = this.state.arr.slice();
              garr.push(key);
              this.setState({ arr: garr });

            }}
          />
        </div>
      );
    }
  }
  openBasket(){
    if (this.state.is_open_basket === false) {
        this.setState({
            is_open_basket: true
        })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="NavPan">
          <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            fixed="top"
          >
            <Container>
                <Navbar.Brand href="/">
                  <img
                    alt=""
                    src="https://avatars.mds.yandex.net/get-pdb/1942510/6e4cc5b6-94d1-4a60-a95a-483529b46327/s1200"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  Онлайн выставка "Кресты бензиныча"
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto"></Nav>
                  <Nav>
                    <Nav.Link href="#basket">
                    <Button onClick={() => this.openBasket()}  variant="dark">
                      Корзина {this.state.arr.length}
                      </Button>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>{this.page_render()}</div>
      </div>
    );
  }
}