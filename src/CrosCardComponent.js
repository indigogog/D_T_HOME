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
    this.state = {
      data: MyJson
    }
    this.lookItem = this.lookItem.bind(this);
  }

  lookItem(itemIndex) {
    console.log(itemIndex)
  }

  render() {
    return (
      <div>
        <ul className="try">
          <CardGroup>
            <Row xs={1} md={1} className="g-4">
              {this.state.data.map((item) => (
                <Card
                  bg="dark"
                  key={item.key}
                  text="white"
                  style={{ width: "18rem" }}
                  className="mb-2"
                  border="primary"
                >
                  <Card.Img variant="top" src={item.src} className="CardImage" />
                  <Card.Body>
                    <Card.Title>{item.title} </Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <Button variant="primary" onClick={() => this.lookItem(item.key)}>
                      Посмотреть
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Row>
          </CardGroup>
          {/* <div onLoad={this.DoNothing()}></div> */}
        </ul>
      </div>
    );
  }
}
