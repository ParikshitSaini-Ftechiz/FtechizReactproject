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
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 35rem;
    height: 65rem;
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
      padding: 2rem 0rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
      margin-left: 10rem;
      .icon {
        margin-left: 2.3rem;
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
        text-align: center;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    html {
      font-size: 60%;
    }

    .card {
      width: auto;
      height: auto;
      .card_icon {
        margin: auto;
        margin-top: -0.4rem;
        margin-bottom: 1rem;
        display: inline-block;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 60%;
    }

    .card {
      width: auto;
      height: auto;
      .card_icon {
        margin: auto;
        margin-top: -0.4rem;
        margin-bottom: -0.1rem;
        display: inline-block;
      }
    }
    .card_title {
      h3 {
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }

    .card {
      width: auto;
      height: auto;
      .card_icon {
        margin: auto;
        margin-top: -0.4rem;
        margin-bottom: -0.1rem;
        display: inline-block;
      }
    }
  }
`;
export default Card;
