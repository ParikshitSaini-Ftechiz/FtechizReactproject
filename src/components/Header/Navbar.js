import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "../components/components/Button";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
  
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      justify-content: center;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          align-items: center;
          text-decoration: none;
          font-size: 1.4rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.text};
          transition: color 0.3s linear;
        }

        &:hover {
          color: ${({ theme }) => theme.colors.text};
          opacity: 0.5;
        }
      }
    .active {
        text-decoration: none;
        list-style: none;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 500;
        border: none;
        padding: 1rem;
        cursor: pointer;
        background: ${({ theme }) => theme.colors.helper};
        box-shadow: ${({ theme }) => theme.colors.shadow};
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .navbar {
        width: 100%;
      }
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.text};
        .mobile-nav-icon {
          font-size: 4rem;
          color: ${({ theme }) => theme.colors.text};
        }
      }
      .active-nav .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active-nav .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active-nav .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 3rem;
        }
      }
     
    }
  `;

  return (
    <>
      <Nav>
        <div className={menuIcon ? "navbar active-nav" : "navbar"}>
          <ul className="navbar-lists">
            <li>
              <NavLink
                to="/"
                className="navbar-link"
                activeClassName="active-link"
                onClick={() => setMenuIcon(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="navbar-link"
                activeClassName="active-link"
                onClick={() => setMenuIcon(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hireremotedevelopers"
                className="navbar-link"
                activeClassName="active-link"
                onClick={() => setMenuIcon(false)}
              >
                Hire Remote Developers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="navbar-link"
                activeClassName="active-link"
                onClick={() => setMenuIcon(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className="navbar-link"
                activeClassName="active-link"
                onClick={() => setMenuIcon(false)}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="navbar-link"
                activeClassName="active-link"
                onClick={() => setMenuIcon(false)}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hire"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                <Button className="Hire_btn">Hire Us</Button>
              </NavLink>
            </li>
          </ul>

          {/* two button for open and close of menu */}
          <div className="mobile-navbar-btn">
            <MenuIcon
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <CloseIcon
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
