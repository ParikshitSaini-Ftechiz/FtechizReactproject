import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Why_Hire_developers_card = ({ icon, title }) => {
  return (
    <>
      <Wrapper>
        <div className="grid-two-rows icons_content">
          <div className="content">
            <NavLink to="">
              <div className="icons"> {icon}</div>
            </NavLink>
            <h3>{title}</h3>
          </div>
        </div>
        
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .grid-two-rows {
    grid-template-columns: 1fr 1fr;
  }

  .icons_content {

    .content {
      display: flex;
      align-items: center;
      gap: 2rem;

      .icons {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.heading};
        background: ${({ theme }) => theme.colors.helper};
        padding: 1rem;
        border-radius: 1rem;
      }
      h3 {
        color: ${({ theme }) => theme.colors.heading};
        font-weight: 600;
        font-size: 2.3rem;
      }
    }
  }
`;
export default Why_Hire_developers_card;
