import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



const MyCarousel = (props) => {
  
    return (
      <Carousel>
        <img src={props.children} />
        {/* <img src={ImageTwo} />
        <img src={ImageThree} /> */}
      </Carousel>
    );
  
}

function ChefFemale() {
  return (
    <Carousel children="<img src='./ChefFemale.png' />" />
     
  )
}

export default MyCarousel