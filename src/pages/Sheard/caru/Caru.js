import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../../brandimg/pic1.jpg'
import logo1 from '../../../brandimg/pic2.png'
const Caru = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="First slide"
          />
       
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo1}
            alt="Second slide"
          />
  
        
        </Carousel.Item>
       
      </Carousel>
    );
};

export default Caru;