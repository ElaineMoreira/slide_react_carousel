import React from "react";
import { Carousel } from 'react-bootstrap';
// test
const CarouselContainer = () => {
  return(
<Carousel>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/src/images/image01.png?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/src/images/image02.png?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/src/images/image03.png?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/src/images/image04.png?raw=true"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/src/images/image05.png?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/src/images/image06.png?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/src/images/image07.png?raw=true"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
  )
};

export default CarouselContainer;
