import React from "react";
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () => {
  return(
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://mocah.org/mocahbig/80787-ubuntu-linux-computer-hd-4k.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://mocah.org/mocahbig/80787-ubuntu-linux-computer-hd-4k.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mocah.org/mocahbig/80787-ubuntu-linux-computer-hd-4k.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
};

export default CarouselContainer;
