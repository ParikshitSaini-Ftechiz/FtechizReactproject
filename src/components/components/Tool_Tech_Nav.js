import React, { useState } from "react";
import styled from "styled-components";

const Tool_Tech = ({ menuList, filterData }) => {
  // const [active, setActive] = useState("");

  return (
    <>
      <Wrapper>
        <div className="first_column">
          <button
            className="first_column_text"
            onClick={() => filterData("frontend")}
          >
            frontend
          </button>
          <button
            className="first_column_text"
            onClick={() => filterData("backend")}
          >
            backend
          </button>
          <button
            className="first_column_text"
            onClick={() => filterData("mobile")}
          >
            mobile
          </button>

          <button
            className="first_column_text"
            onClick={() => filterData("blockchain")}
          >
            blockchain
          </button>
          <button
            className="first_column_text"
            onClick={() => filterData("database")}
          >
            database
          </button>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`

  .first_column {
    width: 25rem;
    height: auto;
    display: flex;
    flex-direction: column;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    .first_column_text {
      display: flex;
      font-size: 2rem;
      border: none;
      background: transparent;
      text-transform: capitalize;
      padding: 1rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.heading};

      &:hover {
        background: ${({ theme }) => theme.colors.component_bg};
        color: white;
        padding: 1rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .first_column {
      width: 25rem;
      height: 30rem;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        padding: 1rem;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }

  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .first_column {
      width: 40rem;
      height: auto;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        padding: 1rem;
        font-size: 2.3rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    .first_column {
      width: 35rem;
      height: auto;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        padding: 1rem;
        font-size: 2.2rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
  }
`;
export default Tool_Tech;
