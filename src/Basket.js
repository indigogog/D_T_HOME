import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import MyJson from "./Crosses.json";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./Basket.css";
import Col from "react-bootstrap/Col";

export default class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MyJson,
      arr: this.props.arr,
    };

    this.lookItem = this.lookItem.bind(this);
  }

  lookItem() {
    console.log(this.state.arr);
  }

  render() {
    return (
      <div className="basketDiv">
        <CardGroup>
          <Row xs={1} md={1} lg={1} xl={1} xxl={1}>
            {this.state.arr.map((item) => (
              <Col>
                <Card
                  bg="dark"
                  key={this.state.data[item].key}
                  text="white"
                  style={{ width: "100vw", height: "50vw" }}
                  className="mb-2"
                  border="primary"
                >
                  <Card.Body>
                  <Card.Title>{item.Title}</Card.Title>
                    <Card.Text>
                    <Card.Img variant="top" src={this.state.data[item].src}  style={{ width: "40vw" }} className="crosImage"/>
                      Продолжение "Доктора Стрэнджа" отправлено на масштабные
                      пересъемки Как сообщает издание The Hollywood Reporter,
                      фильм "Доктор Стрэндж: В мультивселенной безумия" с
                      Бенедиктом Камбербэтчем отправлен на пересъемки. По данным
                      издания, они пройдут в Лос-Анджелесе и будут включать в
                      себя абсолютно новые сцены и пересъемки уже существующих.
                      Инсайдеры говорят, что Камбербэтч и съемочная команда
                      сейчас работают шесть дней в неделю, если не больше. Сэм
                      Рэйми остается на месте режиссера, а главный сценарист
                      Майкл Уолдрон, также ответственный за сериал "Локи",
                      параллельно пишет сценарий для сцен. Инсайдеры по-разному
                      описывают масштабность пересъемок, одни говорит, что в
                      этом нет ничего необычного, а другие, что предстоит еще
                      очень много работы. Главными причинами называют переносы
                      из-за коронавируса и недоступность актеров ранее. По
                      изначальным планам еще до эпохи пандемии, фильм должен был
                      выйти перед новым "Человеком-пауком", но его перенесли и
                      сценарии обоих фильмов переписали. Пока нового "Доктора
                      Стрэнджа" планируют выпустить в срок даже с учетом
                      пересъемок — 6 мая 2022 года.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </CardGroup>
      </div>
    );
  }
}
