import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "../components/Button";

const Header = ({ filterItem, menuList }) => {
  const [state, setState] = useState();
  return (
    <>
      <Wrapper>
        <nav className="navbar">
          <div className="btn-group">
            {menuList.map((currentData) => {
              return (
                <button
                  className="btn-group_item"
                  onClick={() => filterItem(currentData)}
                >
                  {currentData}
                </button>
              );
            })}
          </div>
        </nav>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 4rem 0 0 0;
  background: ${({ theme }) => theme.colors.heading};

  .btn-group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 5rem;
    .btn-group_item {
      color: ${({ theme }) => theme.colors.color_white};
      background: transparent;
      text-transform: uppercase;
      border: none;
      font-size: 2rem;
      &:active,
      &:hover {
        opacity:.6;
      }
    }
  }
`;
export default Header;
