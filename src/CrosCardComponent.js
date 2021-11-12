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
      data: MyJson,
      buttons_condition: [],
      items: [],
    };
    this.lookItem = this.lookItem.bind(this);
    this.button_text_render = this.button_text_render.bind(this);
    // this.push_in_state = this.push_in_state.bind(this);
  }

  lookItem(itemIndex) {
    console.log(itemIndex);
  }

  button_text_render(key) {
    if(this.state.data[key].condition==="false"){
      this.state.data[key].condition="true"
      console.log("PIZDA");
      return ("Посмотреть");
    }
    else  {
      console.log("PIZDA");
      return ("В корзине");
    }
  }
  // push_in_state() {
  //   this.setState({
  //     buttons_condition: [...this.state.buttons_condition, false],
  //   });
  //   console.log("PIZDA");
  //   console.log(this.state.buttons_condition.lenght);
  // }

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
                  <Card.Img
                    variant="top"
                    src={item.src}
                    className="CardImage"
                  />
                  <Card.Body>
                    <Card.Title>{item.title} </Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => this.props.func()}
                    >
                      {this.button_text_render(item.key)}
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
