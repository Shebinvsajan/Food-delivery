import React, { useState } from 'react';
import {  Carousel } from 'react-bootstrap';
import './Banner.css'
import CardMain from '../Cardmain/CardMain';

function Banner() {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
 <div>

          <div className='carousel-container nav-margin '>
               <Carousel className='custom-carousel' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='Carousel-item'>
              <img
                className="d-block w-100 "
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Tasty food </h3>
                <p>Tasty food that will tantalize your taste buds.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/plate-food-with-different-dishes-including-chicken-rice-other-food_1340-24267.jpg?size=626&ext=jpg&ga=GA1.1.1903246887.1675145740&semt=sph"
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3> Feast for the Senses</h3>
                <p>A culinary journey that will leave you wanting more.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://img.freepik.com/free-photo/plate-food-with-plate-food-with-green-apple-side_1340-23470.jpg?size=626&ext=jpg&ga=GA1.2.1903246887.1675145740&semt=sph"
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Food that is Made with Love</h3>
                <p>
                Food that is made with fresh, high-quality ingredients.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      
          
          </div>
        <CardMain/>

        <div className='foot'>

        </div>
 </div>
  )
}

export default Banner