import Navbar from "./Navbar";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <h2 style={{color:"#fff"}}>logo</h2>
        {/* <img className="logo" src="" alt="logo_image" /> */}
      </NavLink>
      <Navbar/>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width:100%;
  height: 7rem;
  background-color:${({theme}) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding:0 3rem;
  z-index:999999;

  .logo{
    width:13rem;
    height: 5rem;
  }
`;

export default Header;
