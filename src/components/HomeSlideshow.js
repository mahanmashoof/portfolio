import React from 'react';
import './HomeSlideshow.css';
import Carousel from 'react-bootstrap/Carousel';

function HomeSlideshow() {

  return (
    <Carousel fade="true" interval="3000">
      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/Fqx3zDh/web-dev.png" alt="First slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/ZBMjgzD/web-sw.png" alt="Second slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/bFvBvv5/3d-proto.png" alt="Third slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/mXhbBBw/cad-sw.png" alt="Third slide"/>
      </Carousel.Item>
    </Carousel>);
}

export default HomeSlideshow;
