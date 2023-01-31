import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import {
  Tool_Tech_Map_BackEnd,
  Tool_Tech_Map_Blockchain,
  Tool_Tech_Map_Cloud,
  Tool_Tech_Map_Database,
  Tool_Tech_Map_FrontEnd,
  Tool_Tech_Map_Mobile,
} from "./Tool_Tech_Map";

const Tool_Tech = ({ tool_tech_para, tool_tech_heading }) => {
  const [showtab, setShowtab] = useState(1);

  const { paraData } = tool_tech_para;
  const { headingData } = tool_tech_heading;
  const handletab = (e) => {
    setShowtab(e);
  };
  return (
    <React.Fragment>
      <Container>
        <div className="container">
          <h1>{headingData}</h1>
          <p>{paraData}</p>
          <div className="grid grid-five-column">
            <div className="first_column">
              <ul class="nav" id="pills-tab" role="tablist">
                <li class="nav-item " role="presentation">
                  <button
                    className={
                      showtab === 1
                        ? "first_column_text active"
                        : "first_column_text"
                    }
                    onClick={() => handletab(1)}
                  >
                    frontend
                  </button>
                </li>
                <li class="nav-item " role="presentation">
                  <button
                    className={
                      showtab === 2
                        ? "first_column_text active"
                        : "first_column_text"
                    }
                    onClick={() => handletab(2)}
                  >
                    backend
                  </button>
                </li>

                <li class="nav-item " role="presentation">
                  <button
                    className={
                      showtab === 3
                        ? "first_column_text active"
                        : "first_column_text"
                    }
                    onClick={() => handletab(3)}
                  >
                    Mobile App Development
                  </button>
                </li>
                <li class="nav-item " role="presentation">
                  <button
                    className={
                      showtab === 4
                        ? "first_column_text active"
                        : "first_column_text"
                    }
                    onClick={() => handletab(4)}
                  >
                    databases
                  </button>
                </li>
                <li class="nav-item " role="presentation">
                  <button
                    className={
                      showtab === 5
                        ? "first_column_text active"
                        : "first_column_text"
                    }
                    onClick={() => handletab(5)}
                  >
                    Blockchain Technology
                  </button>
                </li>

                <li class="nav-item " role="presentation">
                  <button
                    className={
                      showtab === 6
                        ? "first_column_text active"
                        : "first_column_text"
                    }
                    onClick={() => handletab(6)}
                  >
                    Cloud Services
                  </button>
                </li>
              </ul>
            </div>
            <div class="tab-content text-dark" id="pills-tabContent">
              {/* start tab 1*/}
              <div
                className={
                  showtab === 1
                    ? "tab-pane fade show active"
                    : "tab-pane fade show"
                }
              >
                <Tool_Tech_Map_FrontEnd />
              </div>
              {/* close tab 1*/}

              {/* start tab 2*/}
              <div
                className={
                  showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
                }
              >
                <Tool_Tech_Map_BackEnd />
              </div>
              {/* close tab 2*/}

              {/* start tab 3*/}
              <div
                className={
                  showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
                }
              >
                <Tool_Tech_Map_Mobile />
              </div>
              {/* close tab 3*/}
              {/* start tab 4*/}
              <div
                className={
                  showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"
                }
              >
                <Tool_Tech_Map_Database />
              </div>
              {/* close tab 4*/}
              {/* start tab 5*/}
              <div
                className={
                  showtab === 5 ? "tab-pane fade show active" : "tab-pane fade"
                }
              >
                <Tool_Tech_Map_Blockchain />
              </div>
              {/* close tab 5*/}

              {/* start tab 6*/}
              <div
                className={
                  showtab === 6 ? "tab-pane fade show active" : "tab-pane fade"
                }
              >
                <Tool_Tech_Map_Cloud />
              </div>
              {/* close tab 6*/}
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  .grid {
    display: grid;
    gap: 5rem;
    margin: 6rem 0rem 0rem 3rem;
  }
  h1,
  p {
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    margin: 0rem 16rem;
  }
  .grid-five-column {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .first_column {
    width: 25rem;
    height: auto;
    display: flex;
    flex-direction: column;
 background:red;
color:red;

    ul{
color:red;

      li{
color:red;

        button{
color:red;
    font-size:5rem;
        }

      }
    }
    .first_column_text {
      display: flex;
      font-size: 2rem;
      border: none;
      background: transparent;
      text-transform: capitalize;
      padding: 1rem;
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.heading};
      font-size:5rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 6rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
      display: flex;
      align-items: center;
      gap: 4rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 5rem;

      h1,
      p {
        color: ${({ theme }) => theme.colors.heading};
        text-align: center;
        margin: 0rem 2rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;

      h1,
      p {
        color: ${({ theme }) => theme.colors.heading};
        text-align: center;
        margin: 0rem 2rem;
      }
    }
  }
`;
export default Tool_Tech;
