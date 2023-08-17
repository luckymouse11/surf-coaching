import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'

const Home = () => {

  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <div className="carousel-container mt-5 d-flex justify-content-center">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CarouselItem>
          <img
            className="d-block carousel-img"
            src="https://res.cloudinary.com/yl/image/upload/v1692281996/Badminton/2022_UK_LDN_PADDOCKSMEN_VS_WHITEHART_PH0064_owf08n.jpg"
            alt="First slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block carousel-img"
            src="https://res.cloudinary.com/yl/image/upload/v1692280242/Badminton/IMG-20220515-WA0015_pabfss.jpg"
            alt="Second slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            className="d-block carousel-img"
            src="https://res.cloudinary.com/yl/image/upload/v1692280276/Badminton/2022_UK_LDN_PADDOCKSMEN_VS_WHITEHART_PH0009_gmxgmq.jpg"
            alt="Third slide"
          />
        </CarouselItem>
      </Carousel>
    </div>
  )

}

export default Home