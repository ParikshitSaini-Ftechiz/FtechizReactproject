import React from "react";
import styled from "styled-components";
const Technology_Stack_Card = ({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
}) => {
  return (
    <>
      <Wrapper>
        <div className="card">
          <div className="card_body">
            <img src={img1} alt="image"/>
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
            <img src={img7} />
            <img src={img8} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .card {
    width: auto;
    height: auto;
    .card_body {
        display:flex;
        align-items:center;
        justify-center:center;
      img {
        width: 10rem;
      }
    }
  }
`;

export default Technology_Stack_Card;
