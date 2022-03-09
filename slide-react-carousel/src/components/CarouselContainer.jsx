import React from "react";
import { Carousel } from 'react-bootstrap';
// test
const CarouselContainer = () => {
  return(
<Carousel>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/images/slide01.png?raw=true"
      alt="slide 01"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/images/slide02.png?raw=true"
      alt="slide 02"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/images/slide03.png?raw=true"
      alt="slide 03"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/images/slide04.png?raw=true"
      alt="slide 04"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/images/slide05.png?raw=true"
      alt="slide 05"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/images/slide06.png?raw=true"
      alt="slide 06"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://github.com/ElaineMoreira/slide_react_carousel/blob/main/slide-react-carousel/images/slide07.png?raw=true"
      alt="slide 07"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
  )
};

export default CarouselContainer;
