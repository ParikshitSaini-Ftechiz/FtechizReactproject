import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Right_Technology = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content_section">
            <h1>
              Why Ftechiz is the right Technology Partner for your Business?
            </h1>
            <p>
              Our clients come to us with very complex challenges that need a
              strong problem solving approach. We take the time to fully
              understand their business requirements, their industry, their
              goals, and their competition to design a pioneering solution to
              their challenges. Solutions made by us have made our clients more
              productive and more successful. Some products of our clients were
              technically so potential that it even helped to raise Venture
              Capital funding.
            </p>
          </div>
          <div className="grid grid-three-column">
            <div className="colums">
              <div className="grid-two-rows icons_content">
                <div className="content">
                  <NavLink to="">
                    <i aria-hidden="true" class="icons fas fa-eye"></i>
                  </NavLink>
                  <h3>COMPLETE TRANSPARENCY</h3>
                </div>
                <div className="content">
                  <NavLink to="">
                    <i
                      aria-hidden="true"
                      class="icons fas fa-medal"
                      style={{ fontSize: "4rem" }}
                    ></i>
                  </NavLink>
                  <h3>UNCOMPROMISED QUALITY</h3>
                </div>
              </div>
            </div>
            <div className="colums">
              <div className="grid_two_rows  icons_content">
                <div className="content">
                  <NavLink to="">
                    <i
                      aria-hidden="true"
                      class="icons fas fa-search"
                      style={{ fontSize: "3.8rem" , marginLeft:"-4rem" }}
                    ></i>
                  </NavLink>
                  <h3>PROFOUND R&D</h3>
                </div>

                <div className="content">
                  <NavLink to="">
                    <i aria-hidden="true" class="icons fas fa-laptop-code"></i>
                  </NavLink>
                  <h3>WORK WITH LATEST TECHNOLOGY</h3>
                </div>
              </div>
            </div>
            <div className="colums">
              <div className="grid_two_rows  icons_content">
                <div className="content">
                  <NavLink to="">
                    <i aria-hidden="true" class="icons fas fa-users"></i>
                  </NavLink>
                  <h3>HIGHLY SKILLED TEAM</h3>
                </div>
                <div className="content">
                  <NavLink to="">
                    <i aria-hidden="true" class="icons fas fa-users-cog"></i>
                  </NavLink>
                  <h3>AFTER DEVELOPMENT SERVICE</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 6rem 0;
  .grid {
    display: grid;
    gap: 9rem;
    margin: 8rem 3rem 0rem 4rem;
  }
  .content_section {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
    }
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
    .grid-two-rows {
      grid-template-columns: 1fr 1fr;
    }
 
    .icons_content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 6rem;
      .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: rows;
        gap: 1rem;

        .icons {
          font-size: 3.5rem;
          color: ${({ theme }) => theme.colors.heading};
          background: ${({ theme }) => theme.colors.helper};
          padding: 2rem;
          border-radius: 1rem;
        }
        h3 {
          color: ${({ theme }) => theme.colors.heading};
          font-weight: 600;
          font-size: 2.3rem;
        }
      }
    }
  }
`;
export default Right_Technology;