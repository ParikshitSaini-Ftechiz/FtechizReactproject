import React from "react";
import { useState } from "react";
import {Portfolio_Data} from "./Portfolio_Data";
// import Image from "./Image";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const Header = ({filterItem,menuList})=>{
    return(
        <>
        <nav className="navbar">
        <div className="btn-group">
       {menuList.map((currentData)=>{
        return(
            <button className="btn-group_item" onClick={() => filterItem(currentData)}>
          {currentData}
          </button>
        );
    })}
          
          {/* <button className="btn-group_item"  onClick={() => filterItem("lunch")}>lunch</button>
          <button className="btn-group_item"  onClick={() => filterItem("dinner")}>dinner</button>
          <button className="btn-group_item"  onClick={() => setMenu(MenuObject)}>All</button> */}
        </div>
      </nav>  
        </>
    )
}
const Wrapper = styled.section``;
export default Header;
