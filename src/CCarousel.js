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
                    src="http://g02.a.alicdn.com/kf/HTB1DET7GXXXXXbMapXXq6xXFXXXa/The-Fast-and-The-Furious-Dominic-Toretto-Vin-Diesel-Rhinestone-CROSS-Pendants-Necklaces-for-Men-Jewelry.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block_w-100"
                    src="holder.js/800x400?text=Second slide&bg=eee"
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
                    src="holder.js/800x400?text=Third slide&bg=e5e5e5"
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
