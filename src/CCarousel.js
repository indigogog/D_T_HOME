import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CCarousel.css";

import 'bootstrap/dist/css/bootstrap.css';

export default function CCarousel() {
  return (
    <div style={{ display: 'inline-block', width: 700, padding: 30, margin: 26}}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            height="300" 
            src="https://s3.wi-fi.ru/cp3o/6kNViT78U6gJraAAbW11ZmZp?response-content-type=image/jpeg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Братья.</h3>
            <p>Ты всегда будешь со мной, ты всегда будешь моим братом.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            height="300"
            src="https://sm.ign.com/t/ign_latam/screenshot/default/toretto-espacio_twu9.1280.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Улица.</h3>
            <p>В уличных драках всегда побеждает улица.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            height="300"
            src="https://www.film.ru/sites/default/files/filefield_paths/dnh_fastfuriousspace_110717_1120.jpg"
            alt=""
          />
          <Carousel.Caption>
            <h3>Семья.</h3>
            <p>Нельзя отворачиваться от семьи, даже если она отвернулась от тебя.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    // <div>
    //   <Carousel variant="dark" className="CCC">
    //     <Carousel.Item>
    //       <img
    //         className="d-block_w-100"
    //         src="https://sm.ign.com/t/ign_latam/screenshot/default/toretto-espacio_twu9.1280.jpg"
    //         alt="First slide"
    //       />
    //       <Carousel.Caption>
    //         <p className="quote">Ты всегда будешь со мной, ты всегда будешь моим братом.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block_w-100"
    //         src="https://s3.wi-fi.ru/cp3o/6kNViT78U6gJraAAbW11ZmZp?response-content-type=image/jpeg"
    //         alt="Second slide"
    //       />
    //       <Carousel.Caption>
    //       <p className="quote">В уличных драках всегда побеждает улица.</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //     <Carousel.Item>
    //       <img
    //         className="d-block_w-100"
    //         src="https://www.film.ru/sites/default/files/filefield_paths/dnh_fastfuriousspace_110717_1120.jpg"
    //         alt="Third slide"
    //       />
    //       <Carousel.Caption>
    //       <p className="quote">
    //           Нельзя отворачиваться от семьи, даже если она отвернулась от тебя.
    //         </p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   </Carousel>
    // </div>
  );
}
