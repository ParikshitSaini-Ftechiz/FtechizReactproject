import React from "react";
import styled from "styled-components";
export const Technology_Stack_javaCard = ({
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
            <img src={img1} alt="image"/><hr/>
            <img src={img2} /><hr/>
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
export const Technology_Stack_mobileCard = ({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
}) => {
  return (
    <>
      <Wrapper>
        <div className="card">
          <div className="card_body_mobile">
            <img src={img1} alt="image"/><hr/>
            <img src={img2} /><hr/>
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export const Technology_Stack_blockchainCard = ({
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
          <div className="card_body_mobile">
            <img src={img1} alt="image"/><hr/>
            <img src={img2} /><hr/>
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
    margin-top:2rem;
    border:none;
    box-shadow:${({theme})=> theme.colors.dark_shadow};
    background:  rgba(237,235,235,.5);
    .card_body {
        display:flex;
        align-items:center;
        justify-center:center;
        gap:3rem;
        padding:2rem 4rem;
      img {
        width: 10rem;
      }
    }
    .card_body_mobile{
      display:flex;
      align-items:center;
      justify-center:center;
      gap:6rem;
      padding:3rem 10rem;
      img {
        width: 8rem;
            }
    }
  }
`;