import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const Carousel_img = () => {
  const style = {width:"auto", height: "55rem" };
  return (
    <>
      <Wrapper>
        <Carousel interval={1000} indicators={false}>
          <Carousel.Item>
            <img
              style={style}
              className="d-block w-100"
              src="./images/bg1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={style}
              className="d-block w-100"
              src="./images/bg2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={style}
              className="d-block w-100"
              src="./images/bg3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={style}
              className="d-block w-100"
              src="./images/bg4.jpg"
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
