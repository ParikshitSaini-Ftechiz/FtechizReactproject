import React, { useState } from "react";
import styled from "styled-components";
import { Hire_Top_Software_In_Steps_Data } from "../CardData";

const Hire_Top_Software_In_Steps = () => {
  const [state, setstate] = useState(Hire_Top_Software_In_Steps_Data);
  const para =
    "Below is the simple process that we follow while offering services to our clients.";
  const heading = "Hire Top Software Developers in 5 easy steps";

  return (
    <>
      <Wrapper>
        <div class="container">
          <div className="content">
            <h1>{heading}</h1>
            <p>{para}</p>
          </div>
          <div className="grid grid-three-column">
            {state.map((currentData, id) => {
              const { icon, description, title } = currentData;
              return (
                <>
                  <div className="card">
                    <div className="card_body">
                      <div className="star_icon">
                        <div className="icon">{icon}</div>
                      </div>
                      <h3 className="card_title">{title}</h3>
                      <div className="grid_two_rows">
                        <div>
                          <div className="card_description">{description}</div>
                        </div>
                      </div>
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
  padding: 9rem 0 0 0;

  .content {
    h1,
    p {
      text-align: center;
      margin: 0rem 3rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  .grid {
    display: grid;
    gap: 3rem;
    margin: 8rem 4rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .card {
    width: auto;
    height: auto;
    border: none;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 0.5rem;
    padding: 2rem 4rem;
    background: ${({ theme }) => theme.colors.component_bg};
    .card_body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2rem;

      .icon {
        width: 15rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
    }
    .card_description {
      font-size: 1.5rem;
      text-align: justify;
      color: ${({ theme }) => theme.colors.color_white};
    }

    h3 {
      font-size: 2.5rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.helper};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
    .grid {
      display: grid;
      gap: 2rem;
      margin: 8rem 2rem;
    }

    .grid-three-column {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 50%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid-three-column{
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 50%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid-three-column{
      grid-template-columns: 1fr;
    }
  }
`;

export default Hire_Top_Software_In_Steps;
