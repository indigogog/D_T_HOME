import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './CCarousel.css'


export default function CCarousel() {
    return (
        <div>
            <Carousel variant="dark" className="CCC">
                <Carousel.Item>
                    <img
                    className="d-block_w-100"
                    src="https://sm.ign.com/t/ign_latam/screenshot/default/toretto-espacio_twu9.1280.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block_w-100"
                    src="https://s3.wi-fi.ru/cp3o/6kNViT78U6gJraAAbW11ZmZp?response-content-type=image/jpeg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block_w-100"
                    src="https://www.film.ru/sites/default/files/filefield_paths/dnh_fastfuriousspace_110717_1120.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}
