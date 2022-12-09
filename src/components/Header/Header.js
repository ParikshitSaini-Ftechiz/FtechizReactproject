import Navbar from "./Navbar";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <img class="logo" style ={{width:"20rem", height:"auto"}}src="https://ftechiz.com/wp-content/uploads/2022/11/FtechizLogo.png" alt="logo"/>
      </NavLink>
      <Navbar/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width:100%;
  height: auto;
  background-color:${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding:2rem 7rem;
  z-index:999999;

  .logo{
    width:13rem;
    height: 5rem;
  }
`;

export default Header;
