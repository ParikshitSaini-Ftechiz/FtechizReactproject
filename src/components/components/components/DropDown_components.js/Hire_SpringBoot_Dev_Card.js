import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Hire_SpringBoot_Dev_Card = ({ para, price, time }) => {
  return (
    <>
      <Wrapper>
        <div className="card">
          <div className="card_body">
            <div className="card_header">
              <div className="price_div">
                <h4>
                  $ <span>{price}</span> {time} (USD)
                </h4>
              </div>
            </div>
            <div className="card_description">
              <p className="card_title">{para}</p>
            </div>
            <div className="card_bottom">
              <p>
                <NavLink to="" className="bottom_div">
                  Schedule an Inrterview
                </NavLink>
              </p>
            </div>
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
    border: none;
    box-shadow: ${({ theme }) => theme.colors.shadow};

    .card_body {
      .card_header {
        .price_div {
          padding: 1rem;
          border-top-left-radius: 3rem;
          border-bottom-left-radius: 3rem;
          margin-left: 2rem;
          height: 6rem;
          background: ${({ theme }) => theme.colors.helper};
          h4 {
            color: ${({ theme }) => theme.colors.heading};
            font-size: 2rem;
            font-weight: 550;
            span {
              font-size: 4rem;
              font-weight: bold;
            }
          }
        }
      }
      .card_description {
        p {
          margin: 8rem 2rem 8rem 3rem;
          color: ${({ theme }) => theme.colors.heading};
        }
      }
      .card_bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: -1rem;
        p {
          weight: 5rem;
          height: 6rem;
          background: ${({ theme }) => theme.colors.helper};
          display: flex;
          align-items: center;
          padding: 0 2.5rem;
          border-top-left-radius: 3rem;
          border-top-right-radius: 3rem;

          .bottom_div {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.colors.heading};
            text-decoration: underline;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              text-decoration: none;
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
`;

export default Hire_SpringBoot_Dev_Card;
