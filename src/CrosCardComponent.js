import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Cards.css";
import MyJson from "./Crosses.json";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col'

export default class CrosCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MyJson,
    };
    this.lookItem = this.lookItem.bind(this);
    this.button_text_changer = this.button_text_changer.bind(this);
    this.button_render = this.button_render.bind(this);
    this.firstChang = this.firstChang.bind(this);
  }

  lookItem(itemIndex) {
    console.log(itemIndex);
  }

  firstChang(){
    let garr = this.state.data.slice();
    this.props.arr.map((item)=>{
      garr[this.props.arr.indexOf(item)].condition = "false";
    })
    this.setState({
      data: garr,
    });
  }

  button_text_changer(key) {
    if (this.state.data[key].condition === "false") {
      let garr = this.state.data.slice();
      garr[key].condition = "true";
      this.setState({
        data: garr,
      });
    }
  }
  button_render(item) {
    if (this.state.data[item.key].condition === "false") {
      return (
        <Button
          variant="primary"
          onClick={() => {
            if (this.state.data[item.key].condition === "false") {
              this.props.func(item.key);
            }
            this.button_text_changer(item.key);
          }}
        >
          Посмотреть
        </Button>
      );
    } else {
      return (
        <Button
          variant="primary"
          onClick={() => {
            if (this.state.data[item.key].condition === "false") {
              this.props.func();
            }
            this.button_text_changer(item.key);
          }}
          disabled
        >
          Уже в корзине
        </Button>
      );
    }
  }

  static componentWillMount(){
    this.firstChang();
  }

//xs={1} md={3} 
  render() { 
    return (
      <div>
        <ul className="try">
          <CardGroup>
          
            <Row  xs={1} md={2} lg={3} xl={4}  xxl={5} >
              {this.state.data.map((item) => (
                <Col>
                <Card
                  bg="dark"
                  key={item.key}
                  text="white"
                  style={{ width: "18rem" }}
                  className="mb-2"
                  border="primary"
                >
                  <Card.Img
                    variant="top"
                    src={item.src}
                    className="CardImage"
                  />
                  <Card.Body>
                    <Card.Title>{item.title} </Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    {this.button_render(item)}
                  </Card.Body>
                </Card>
                </Col>
              ))}
            </Row>
          </CardGroup>

          {/* <div onLoad={this.DoNothing()}></div> */}
        </ul>
      </div>
    );
  }
}
