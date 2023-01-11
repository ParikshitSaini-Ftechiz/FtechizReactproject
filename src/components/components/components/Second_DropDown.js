import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
const Second_DropDown = () => {
  return (
    <>
      <Wrapper>
        <Dropdown>
          <Dropdown.Toggle className="dropdown">Services</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              className="drop_down_hover"
              href="/mobileappdevelopment"
            >
              Mobile App Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/iosappdevelopment"
            >
              iOS App Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/flutterappdevelopment"
            >
              Flutter App Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/reactnativeappdevelopment"
            >
              React Native App Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/websitedevelopment"
            >
              Website Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/androidappdevelopment"
            >
              Android App Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item className="drop_down_hover" href="/websitedesigning">
              Website Designing
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/webapplicationdevelopment"
            >
              Web Application Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/blockchaindevelopment"
            >
              Block Chain Development
            </Dropdown.Item>
            <hr />
            <Dropdown.Item
              className="drop_down_hover"
              href="/cloudappdevelopment"
            >
              Cloud App Development
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
    padding: 0 0rem;
    background: transparent;
    font-family: "Outfit", sans-serif;

    .drop_down_hover {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.heading};
     
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

        line-height: 2rem;

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
export default Second_DropDown;
