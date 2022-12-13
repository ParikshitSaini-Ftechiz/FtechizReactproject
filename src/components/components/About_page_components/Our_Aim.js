import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";
import styled from "styled-components";

const Our_Aim = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid_two_column">
            <div className="image_section">
              <img
                src="https://ftechiz.com/wp-content/uploads/2022/07/about.jpg"
                alt="aim_image"
              />
            </div>
            <div className="content_section">
              <h1>Our Aim</h1>
              <p>
                "To provide extensive quality assurance leading your business to
                the next level.
              </p>
              <p>
                As a leading Software Development Company, we are trusted to
                solve complex problems with innovation and creativity.”
              </p>
              <NavLink>
                <Button> Contact Us</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 3rem 0 2rem 0;
  .grid {
  display: grid;
  gap: 9rem;
  margin:8rem 0rem 0rem 0rem;
 }

  .image_section {
    img {
      border-radius: 1rem;
      width: 57rem;
      height: 33rem;
      box-shadow: ${({ theme }) => theme.colors.dark_shadow};
    }
  }
  .content_section {
    display:flex;
    align-items:flex-start;
    justify-content:center ;
    flex-direction:column; 
    gap:1.3rem;
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: justify;
    }
    Button{
        background: ${({ theme }) => theme.colors.btn_color};
        &:hover{
            background: ${({ theme }) => theme.colors.helper};
        }
    }
  }
`;
export default Our_Aim;
