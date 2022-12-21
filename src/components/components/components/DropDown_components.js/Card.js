import React from "react";
import styled from "styled-components";

const Card = ({ icon, title, para, icon1, para1, title1 }) => {
  return (
    <>
      <Wrapper>
        <div className="card">
          <div className="card_icon">
            <div className="icon">
              {icon}
              {icon1}
            </div>
          </div>
          <div className="card_title">
            <h3>
              {title}
              {title1}
            </h3>
            <p className="card_para">
              {para}
              {para1}
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .card {
    width: 40rem;
    height: 55rem;
    padding: 2rem 2rem;
    border: none;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.services_card_bg};
    .card_icon {
      width: 10rem;
      height: 10rem;
      background: ${({ theme }) => theme.colors.color_white};
      border-radius: 50%;
      display: inline-block;
      padding: 2rem 0rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
      margin-left:12rem; 
      .icon {
        margin-left:2.3rem; 
        font-size: 5rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
    .card_title {
      p {
        text-align: justify;
        font-weight: 300;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.color_white};
        margin-bottom: 2.6rem;
      }
    
      h3 {
        color: ${({ theme }) => theme.colors.color_white};
        margin-bottom: 2.6rem;
        text-align:center;
      }
    }
  }
`;
export default Card;
