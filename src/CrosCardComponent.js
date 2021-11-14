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
      items: [],
    };
    this.lookItem = this.lookItem.bind(this);
    this.button_text_changer = this.button_text_changer.bind(this);
    this.button_render=this.button_render.bind(this);
  }

  lookItem(itemIndex) {
    console.log(itemIndex);
  }

  button_text_changer(key) {
    if(this.state.data[key].condition==="false"){
      let arr=this.state.data.slice();
      arr[key].condition="true";
      this.setState({
        data : arr
      })
    }
  }
  button_render(item){
    if(this.state.data[item.key].condition==="false"){
      return (
        <Button
        variant="primary"
        onClick={() => {
          if(this.state.data[item.key].condition==="false"){
          this.props.func();
          }
          this.button_text_changer(item.key);                        
        }}
      >
      Посмотреть
      </Button>
      )
    }
    else{
      return(
      <Button
      variant="primary"
      onClick={() => {
        if(this.state.data[item.key].condition==="false"){
        this.props.func();
        }
        this.button_text_changer(item.key);                        
      }}
      disabled
    >
    Уже в корзине
    </Button>
      )
    }
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
              ))}
            </Row>
          </CardGroup>
          {/* <div onLoad={this.DoNothing()}></div> */}
        </ul>
      </div>
    );
  }
}
