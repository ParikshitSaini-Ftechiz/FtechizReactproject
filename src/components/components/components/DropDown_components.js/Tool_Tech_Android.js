import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import {
  Tool_Tech_Map_Programming_Languages,
  Tool_Tech_Map_Toolkit,
  Tool_Tech_Map_Databases,
  Tool_Tech_Map_Frameworks,
  Tool_Tech_Map_SDK,
} from "../../Tool_Tech_Map";

const Tool_Tech_Android = () => {
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };
  return (
    <React.Fragment>
      <Wrapper>
        <Container>
          <div className="container">
            <h1>Technology We Use for Android App Development</h1>
            <div className="grid grid-four-column">
              <div className="first_column">
                <button
                  className="first_column_text"
                  onClick={() => handletab(1)}
                >
                  Programming Languages
                </button>

                <button
                  className="first_column_text"
                  onClick={() => handletab(2)}
                >
                  Toolkit
                </button>

                <button
                  className="first_column_text"
                  onClick={() => handletab(4)}
                >
                  databases
                </button>

                <button
                  className="first_column_text"
                  onClick={() => handletab(5)}
                >
                  Frameworks
                </button>
                <button
                  className="first_column_text"
                  onClick={() => handletab(6)}
                >
                  SDK
                </button>
              </div>

              <div className="tab-content " id="pills-tabContent">
                {/* start tab 1*/}
                <div
                  className={
                    showtab === 1
                      ? "tab-pane fade show active"
                      : "tab-pane fade show"
                  }
                >
                  <Tool_Tech_Map_Programming_Languages />
                </div>
                {/* close tab 1*/}

                {/* start tab 2*/}
                <div
                  className={
                    showtab === 2
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <Tool_Tech_Map_Toolkit/>
                </div>
                {/* close tab 2*/}

                {/* start tab 4*/}
                <div
                  className={
                    showtab === 4
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <Tool_Tech_Map_Databases />
                </div>
                {/* close tab 4*/}

                {/* start tab 5*/}
                <div
                  className={
                    showtab === 5
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <Tool_Tech_Map_Frameworks />
                </div>
                {/* close tab 5*/}
                 {/* start tab 6*/}
                 <div
                  className={
                    showtab === 6
                      ? "tab-pane fade show active"
                      : "tab-pane fade"
                  }
                >
                  <Tool_Tech_Map_SDK />
                </div>
                {/* close tab 6*/}
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0rem;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .grid {
    display: grid;
    gap: 7rem;
    margin: 6rem 0rem 0rem 3rem;
  }
  .grid-four-column {
    grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr ;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rem;
  }
  h1{
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    margin: 0rem 6rem;
  }
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
    .grid {
      display: grid;
      gap: 3rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3rem;
    }
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 6rem;
    }
    .first_column {
      width: 25rem;
      height: auto;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        padding: 1rem;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      display: grid;
      gap: 7rem;
      margin: 0;
    }
    .grid-five-column {
      grid-template-columns: 1fr;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 4rem;
    }
    h1 h1 {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem 0rem 2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem 3rem 2rem;
    }
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
    .grid {
      display: grid;
      gap: 7rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 4rem;
    }
    h1 {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem 0rem 2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem 3rem 2rem;
    }
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
export default Tool_Tech_Android;
