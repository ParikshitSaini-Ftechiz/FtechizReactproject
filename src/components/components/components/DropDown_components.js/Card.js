import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

const Card = ({ icon, title, para }) => {
  return (
    <>
      <Wrapper>
        <div className="card">
          <div className="card_icon">
            <div className="icon"> {icon}</div>
          </div>
          <div className="card_title">
            <h3><NavLink>{title}</NavLink></h3>
            <p className="card_para">{para}</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .card_title {
    p {
      text-align: justify;
      font-weight: 300;
      font-size: 1.6rem;
    }
    p,
    h3 {;
      margin-bottom: 2.6rem;
      a{
        color: ${({ theme }) => theme.colors.color_white};
        text-decoration:underline;
        font-size:2.5rem;
        font-weight:500;
      }
    }
  }

  .card {
    width: auto;
    height: 60rem;
    padding: 1rem 2rem;
    border: none;
    border-radius:1rem;
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
        color: ${({ theme }) => theme.colors.color_white};
      }
    }
  }
`;
export default Card;
