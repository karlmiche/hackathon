import React, { Component } from 'react';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



const MyCarousel = (props) => {
  
    return (
      <Carousel
        plugins={[
              'infinite',
              'arrows',
              'centered',
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 2000,
                }
              },
            ]}   
            animationSpeed={1000}
          >
        <img src={props.imageOne} />
        <img src={props.imageTwo} />
        <img src={props.imageThree} />
      </Carousel>
    );
  
}

function Jobs() {
  return (
    <MyCarousel imageOne="./ChefFemale.png" imageTwo="./DoctorFemale.png" imageThree="./Engineer.png" />
    
  )
}

export default Jobs;