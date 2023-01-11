import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
const DropDown = () => {
  return (
    <>
      <Wrapper>
        <Dropdown>
          <Dropdown.Toggle className="dropdown">
            Hire Remote Developers
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="drop_down_hover"
              href="/hireremotedevelopers"
            >
              Hire Remote Developers
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/hirejavadevelopers"
            >
              Hire Java Developers
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/hiremobileappdevelopers"
            >
              Hire Mobile App Developers
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/hirefullstackdevelopers"
            >
              Hire Full Stack Developers
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/hireblockchaindevelopers"
            >
              Hire Blockchain Developers
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .dropdown {
    border: none;
    font-size: 1.6rem;
    font-weight: 420;
    background: transparent;
    font-family: "Outfit", sans-serif;
   padding:0 0rem;
    .drop_down_hover {
      color: ${({ theme }) => theme.colors.heading};
      font-size: 1.6rem;

      &:hover {
       opacity:.6;
       background:transparent;
      }
    }
  }

  @media (max-width: 998px) {
    .dropdown {
      border: none;
      font-size: 2rem;
      ${"" /* font-weight: 420; */}
      background: transparent;
      font-family: "Outfit", sans-serif;
  
      .drop_down_hover {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 1.6rem;
        width: auto;
        height: auto;
        padding: 0rem 6rem;
        line-height: 2.5rem;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 796px) {
    .dropdown {
      border: none;
      font-size: 2rem;
      ${"" /* font-weight: 420; */}
      background: transparent;
      font-family: "Outfit", sans-serif;

      .drop_down_hover {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 1.6rem;
        width: auto;
        height: auto;
        padding: 0rem 6rem;
        line-height: 2.5rem;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  @media (max-width: 520px) {
    .dropdown {
      border: none;
      font-size: 2rem;
      ${"" /* font-weight: 420; */}
      background: transparent;
      font-family: "Outfit", sans-serif;

      .drop_down_hover {
        color: ${({ theme }) => theme.colors.heading};
        font-size: 1.6rem;
        width: auto;
        height: auto;
        padding: 0rem 6rem;
        line-height: 2.5rem;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
export default DropDown;
