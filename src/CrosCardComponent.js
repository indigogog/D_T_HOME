import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Cards.css";
import MyJson from "./Crosses.json";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default class CrosCardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props.func();
    this.carddata = this.carddata.bind(this);
  }


  carddata() {
    MyJson.map((MyJson) => {
      console.log(MyJson.key);
      return (
        <Card
          bg="dark"
          key={MyJson.key}
          text="white"
          style={{ width: "18rem" }}
          className="mb-2"
          border="primary"
        >
          <Card.Img variant="top" src={MyJson.src} className="CardImage" />
          <Card.Body>
            <Card.Title>{MyJson.title} </Card.Title>
            <Card.Text>{MyJson.text}</Card.Text>
            <Button variant="primary" onClick={this.props.func}>
              Посмотреть
            </Button>
          </Card.Body>
        </Card>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="try">
          <CardGroup>
            <Row xs={1} md={1} className="g-4">
              {this.carddata()}
            </Row>
          </CardGroup>
          {/* <div onLoad={this.DoNothing()}></div> */}
        </ul>
      </div>
    );
  }
}
