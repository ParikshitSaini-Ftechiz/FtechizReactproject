import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const Carousel_img = () => {
const style = {height :"75rem"}
  return (
    <>
      <Wrapper>
        <Carousel interval={1000}>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="./images/portfolio.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="./images/portfolio.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="./images/portfolio.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="./images/portfolio.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
       
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;

`;
export default Carousel_img;
