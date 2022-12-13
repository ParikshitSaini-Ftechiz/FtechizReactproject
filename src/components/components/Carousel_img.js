import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";


const Carousel_img = () => {
const style = {height :"70rem"}
  return (
    <>
      <Wrapper>
        <Carousel interval={1000}  indicators={false}>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="https://ftechiz.com/wp-content/uploads/2022/08/Website-min.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="https://ftechiz.com/wp-content/uploads/2022/08/Software-min.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="https://ftechiz.com/wp-content/uploads/2022/08/mobile-app-min.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img 
            style={style}
              className="d-block w-100"
              src="https://ftechiz.com/wp-content/uploads/2022/08/Blockchain-min-e1668078952601.jpg"
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
