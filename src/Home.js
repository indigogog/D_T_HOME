import "./App.css";
import React from "react";
import CCarousel from "./CCarousel";
import CrosCardComponent from "./CrosCardComponent";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Basket from "./Basket";
import Button from "react-bootstrap/Button";
import MyJson from "./Crosses.json";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MyJson,
      count: 0,
      is_open_basket: false,
    };
    this.page_render = this.page_render.bind(this);
    this.open_or_close_Basket = this.open_or_close_Basket.bind(this);
  }
  ChangeData(key, bopl) {
    let garr = this.state.data.slice();
    if (bopl) {
      garr[key].condition = "true";
    } else {
      garr[key].condition = "false";
    }
    garr[key].condition = bopl.toString();
    this.setState({ data: garr });
  }

  page_render() {
    console.log(this.state.is_open_basket);
    if (this.state.is_open_basket === true) {
      return (
        <Basket
          data={this.state.data}
          func={() => {
            let garr = this.state.count - 1;
            this.setState({ count: garr });
          }}
          ChangeData={(key, bopl) => {
            this.ChangeData(key,bopl)
          }}
        />
      );
    } else {
      return (
        <div>
          <CCarousel />
          <div className="TextLabel">
            Наша выставка представляет к вашему вниманию кресты Доминика Торрето
            экей бензиныч экей коленвалыч экей солярыч и так далее.
          </div>
          <CrosCardComponent
            data={this.state.data}
            arr={this.state.count}
            func={() => {
              let garr = this.state.count + 1;
              this.setState({ count: garr });
            }}
            ChangeData={(key, bopl) => {
              this.ChangeData(key,bopl)
            }}
          />
        </div>
      );
    }
  }
  open_or_close_Basket(i) {
    if (i == 0) {
      if (this.state.is_open_basket === false) {
        this.setState({
          is_open_basket: true,
        });
      }
    } else {
      this.setState({
        is_open_basket: false,
      });
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
              <Button
                onClick={() => this.open_or_close_Basket(1)}
                variant="dark"
              >
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="https://avatars.mds.yandex.net/get-pdb/1942510/6e4cc5b6-94d1-4a60-a95a-483529b46327/s1200"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  Онлайн выставка "Кресты бензиныча"
                </Navbar.Brand>
              </Button>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#basket">
                    <Button
                      onClick={() => this.open_or_close_Basket(0)}
                      variant="dark"
                    >
                      Корзина {this.state.count}
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
