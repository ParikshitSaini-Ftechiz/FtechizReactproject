import React from "react";
import styled from "styled-components";
export const Technology_Stack_Card = ({
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
          <div className="card_body grid-three-column">
            <img src={img1} alt="image" />
            <hr />
            <img src={img2} />
            <hr />
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
            <img src={img1} alt="image" />
            <hr />
            <img src={img2} />
            <hr />
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

const Wrapper = styled.section`
  .card {
    width: auto;
    height: auto;
    margin-top: 2rem;
    border: none;
    box-shadow: ${({ theme }) => theme.colors.dark_shadow};
    background: rgba(237, 235, 235, 0.5);
    .card_body {
      display: flex;
      align-items: center;
      justify-center: center;
      gap: 3rem;
      padding: 2rem 2rem;
      img {
        width: 9rem;
      }
    }
    .card_body_mobile {
      display: flex;
      align-items: center;
      justify-center: center;
      gap: 5.3rem;
      padding: 2rem 4rem;
      img {
        width: 9rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
    .card {
      width: auto;
      height: auto;
      margin-top: 2rem;
      border: none;
      box-shadow: ${({ theme }) => theme.colors.dark_shadow};
      background: rgba(237, 235, 235, 0.5);
      .card_body {
        display: flex;
        align-items: center;
        justify-center: center;
        gap: 1.5rem;
        padding: 2rem 2rem;
        img {
          width: 7rem;
        }
      }
      .card_body_mobile {
        display: flex;
        align-items: center;
        justify-center: center;
        gap: 4rem;
        padding: 2rem 2rem;
        img {
          width: 8rem;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 50%;
    }
    .card {
      width: auto;
      height: auto;
      margin-top: 2rem;
      border: none;
      box-shadow: ${({ theme }) => theme.colors.dark_shadow};
      background: rgba(237, 235, 235, 0.5);
      .card_body {
        display: flex;
        align-items: center;
        justify-center: center;
        gap: 2rem;
        padding: 2rem 4rem;
        img {
          width: 6rem;
        }
      }
      .card_body_mobile {
        display: flex;
        align-items: center;
        justify-center: center;
        gap: 4rem;
        padding: 2rem 2rem;
        img {
          width: 8rem;
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 50%;
    }
    .card {
      width: auto;
      height: auto;
      margin-top: 2rem;
      border: none;
      box-shadow: ${({ theme }) => theme.colors.dark_shadow};
      background: rgba(237, 235, 235, 0.5);

      .card_body {
        display: flex;
        align-items: center;
        justify-center: center;
        gap: 2rem;
        padding: 3rem 1rem;
        flex-wrap: wrap;
        margin-left: 2rem;

        img {
          width: 10rem;
        }
      }
      .card_body_mobile {
        display: flex;
        align-items: center;
        justify-center: center;
        gap: 2rem;
        margin-left: 2rem;
        padding: 2rem 1rem;
        flex-wrap: wrap;

        img {
          width: 9rem;
        }
      }
    }
  }
`;
