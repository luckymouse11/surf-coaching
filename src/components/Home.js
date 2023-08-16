import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import CarouselCaption from 'react-bootstrap/CarouselCaption'
import CarouselItem from 'react-bootstrap/CarouselItem'

const Home = () => {

  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <div className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CarouselItem>
          <img
            className="d-block"
            src="https://res.cloudinary.com/yl/image/upload/v1692188197/Surfing/surf-pic3.jpg"
            alt="First slide"
          />
          {/* <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption> */}
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block"
            src="https://res.cloudinary.com/yl/image/upload/v1692188197/Surfing/surf-pic2.jpg"
            alt="Second slide"
          />

          {/* <CarouselCaption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CarouselCaption> */}
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block"
            src="https://res.cloudinary.com/yl/image/upload/v1692188198/Surfing/surf-pic1.jpg"
            alt="Third slide"
          />

          {/* <CarouselCaption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </CarouselCaption> */}
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default Home