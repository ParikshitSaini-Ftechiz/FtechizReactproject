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
  @media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }
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
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
      html{
        font-size: 50%;
      }
      .grid{
        gap: 3.2rem;
      }
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
}
@media (max-width:${({ theme }) => theme.media.small_phone}) {
      html{
        font-size: 50%;
      }
      .grid{
        display: grid;
      gap: 3rem;
      margin: 18rem 0rem 0rem 1rem;
      }
      .grid-two-rows {
    grid-template-columns: 1fr ;
  }

  .icons_content {

    .content {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icons {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.heading};
        background: ${({ theme }) => theme.colors.helper};
        padding: 1rem;
        border-radius: 1rem;
      }
      h3 {
        color: ${({ theme }) => theme.colors.heading};
        font-weight: 600;
        font-size: 1.8rem;
      }
    }
  }
}

`;
export default Why_Hire_developers_card;
