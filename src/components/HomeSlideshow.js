import React from 'react';
import './HomeSlideshow.css';
import Carousel from 'react-bootstrap/Carousel';

function HomeSlideshow() {

  return (
    <Carousel fade="true" interval="3000">
      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/CJgqbKx/web-dev.jpg" alt="First slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/1QpBBbs/web-sw-white-bg.jpg" alt="Second slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/r5VnsM8/3d-proto.jpg" alt="Third slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 slideshow-container" src="https://i.ibb.co/kX1bcwd/cad-sw-white-bg.jpg" alt="Third slide"/>
      </Carousel.Item>
    </Carousel>);
}

export default HomeSlideshow;
