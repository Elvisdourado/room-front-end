import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'

function Main() {
  return (
    <Carousel className='container'>
    <Carousel.Item >
      <img
        className="d-block w-100"
        src="./quarto.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First Room</h3>
        <p>Info about the room!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./quarto.jpg"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second Room</h3>
        <p>Info about the room!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./quarto.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third Room</h3>
        <p>Info about the room!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}
export default Main