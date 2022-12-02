import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Icons = () => {
  return (
    <>
      <Wrapper>
        <div className="icons">
          <NavLink className="icon" to="#">
            <i class="fa-brands fa-square-google-plus"></i>
          </NavLink>
          <NavLink className="icon" to="#">
            <i class="fa-brands fa-square-facebook"></i>
          </NavLink>
          <NavLink className="icon" to="#">
            <i class="fa-brands fa-square-twitter"></i>
          </NavLink>
          <NavLink className="icon" to="#">
            <i class="fa-brands fa-linkedin"></i>
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .icons {
    ${'' /* margin-top: 2.4rem;
    margin-bottom: 2.4rem; */}
    padding: 0.1rem;
    cursor: pointer;
    display: flex;
    gap: 2rem;

    .icon {
      color:${({theme}) => theme.colors.bg};
      font-size: ${({ theme }) => theme.colors.fontSize};
      cursor: pointer;
    }
  }
`;
export default Icons;
