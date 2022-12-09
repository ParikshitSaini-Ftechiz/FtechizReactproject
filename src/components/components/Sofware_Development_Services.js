import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { NavLink } from "react-router-dom";
import { Card_detail } from "./Card_detail";

const Sofware_Development_Services = () => {
  const [state, setState] = useState(Card_detail);
  console.log(state);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1 className="heading">Our Software Development Services</h1>
            <p>
              Our strength lies in the comprehensive suite of services we offer
              to our clients. From full-stack development to just consultancy-
              you demand, we deliver.
            </p>
          </div>
          <div className="grid grid-three-column">
            {state.map((currentData) => {
              const { icon, title, para } = currentData;
              return (
                <>
                  <div className="card">
                    <div className="card_icon">
                      <div className="icon"> {icon}</div>
                    </div>
                    <div className="card_title">
                      <h3>{title}</h3>
                      <p className="card_para">{para}</p>
                    </div>
                    <div className="card_btn">
                      <NavLink to="">
                        <Button className="btn"> Read Me </Button>
                      </NavLink>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  background: ${({theme}) => theme.colors.color_grey};
  padding: 1rem;
  text-align: center;
  .content {
    h1,
    p {
      text-align: center;
      margin: 2rem 16rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  .grid {
    display: grid;
    gap: 6rem;
    margin: 8rem 2rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .card_title {
    p {
      text-align: justify;
      font-weight: 300;
      font-size: 1.6rem;
    }
    p,
    h3 {
      color: ${({ theme }) => theme.colors.heading};
      margin-bottom: 2.6rem;
    }
  }

  .card {
    width: auto;
    height: auto;
    padding:1rem 2rem;
    border:none;
    .card_icon {
      width: 10rem;
      height: 10rem;
      background: ${({ theme }) => theme.colors.hover_color};
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
    .card_btn {
      .btn {
        color: ${({ theme }) => theme.colors.color_white};
        background: ${({ theme }) => theme.colors.card_bg};
        border-radius: 1rem;
        padding: 1rem 2.5rem;
      }
    }
  }
`;
export default Sofware_Development_Services;
