import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";


const Card = ({ icon, title, para, icon1, para1,title1 }) => {
  return (
    <>
      <Wrapper>
        
        <div className="card">
          <div className="card_icon">
            <div className="icon"> {icon}{icon1}</div>
          </div>
          <div className="card_title">
            <h3>{title}{title1}</h3>
            <p className="card_para">{para}{para1}</p>
          </div>
        </div>
        
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`

  

  .card {
    width: auto;
    height:auto 60rem;
    padding:4rem;
    border:none;
    border-radius:1rem;
    box-shadow:${({theme})=> theme.colors.shadow};
    background:  linear-gradient(0deg, rgba(1,83,156,1) 0%, rgba(2,59,108,1) 49%, rgba(1,43,78,1) 100%);
    .card_icon {
      width: 10rem;
      height: 10rem;
      background: ${({ theme }) => theme.colors.color_white};
      border-radius: 50%;
      display: inline-block;
      padding: 2rem 0rem;
      margin: auto;
      margin-bottom: 2rem;
      .icon {
        font-size: 5rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
    .card_title {
    p {
      text-align: justify;
      font-weight: 300;
      font-size: 1.6rem;
    }
    p,
    h3 {
      color: ${({ theme }) => theme.colors.color_white};
      margin-bottom: 2.6rem;
    }
  }
  }
`;
export default Card;
