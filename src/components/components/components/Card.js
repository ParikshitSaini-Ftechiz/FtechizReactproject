import React from "react";
import styled from "styled-components";
const Card = ({ description, title }) => {
  return (
    <>
      <Wrapper>
        <div className="card">
          <div className="card_body">
            <div className="star_icon">
              <img className="icon" src="./images/star.png" alt="star_img" />
            </div>
            <div className="card_description">{description}</div>
            <div className="grid_two_rows">
              <div>
                <h3 className="card_title">{title}</h3>
              </div>
              <div className="quotes_icon">
                <img src="./images/quotes_icon.png" alt="quotes_icon" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.heading};
  .card {
    width: 35rem;
    height: auto;
    border: none;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius:.5rem;
    padding: 2rem 4rem;
    .card_body {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      gap: 2rem;
      .star_icon {
        margin-top:-2rem;
        margin-left:-1.5rem;
        img {
          width: 15rem;
        }
      }
      .card_description {
        font-size: 1.5rem;
        text-align: justify;
        opacity: 0.6;
        margin-top:-3rem;
      }
      .grid_two_rows {
        display: flex;
        align-items: center;
        h3 {
          color: ${({ theme }) => theme.colors.heading};
          font-size: 1.6rem;
          font-weight: 600;
        }
      }
      .quotes_icon {
       margin-left:17rem;
        img {
          width: 4.5rem;
          opacity: 0.6;
        }
      }
    }
  }
`;
export default Card;
