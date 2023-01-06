import { Button } from "../Button";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Main_Section_DropDown = ({ myData, para, image, btn }) => {
  const { nameData } = myData;
  const { paraData, para2 } = para;
  const { imageData } = image;
  const { btnData } = btn;
  return (
    <>
      <Wrapper>
        <div className="container main-section">
          <div className="grid grid_two_column">
            <div className="main_section">
              <h1 className="heading animX">{nameData}</h1>
              <p className="main_para para anim">{paraData}<br/><br/>{para2}</p>
           
           
              <NavLink>
                <Button className="anim">{btnData}</Button>
              </NavLink>
            </div>
            <div classname="main_section_image">
              <img src={imageData} alt="main_section_image" className="image" />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background: ${({ theme }) => theme.colors.component_bg};
  .main-section {
    width: 100%;
  }
  .main_section {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    p {
      text-align: justify;
    }
    h1{

      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    
      Button {
        background: ${({ theme }) => theme.colors.helper};
        font-weight:300;
        font-size:1.5rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
    
  }


  .grid {
    display: grid;
    gap: 12rem;
    margin: 8rem 2rem 0rem 2rem;
  }

  .image {
    width: 55rem;
    height: 40rem;
  }
  .heading.anim {
    animation-delay: 0.5s;
  }
  .main_para.anim {
    animation-delay: 1s;
  }
  Button.anim {
    animation-delay: 1.5s;
  }
  .animX {
    opacity: 0;
    transform: translateX(-80px);
    animation: moveup 0.5s linear forwards;
  }
  .anim {
    opacity: 0;
    transform: translateY(30px);
    animation: moveup 0.5s linear forwards;
  }
  @keyframes moveup {
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

 
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    padding: 15rem 0rem;
    .grid {
      display: grid;
      gap: 2rem;
      align-items: center;
      justify-content: center;
      margin: 0rem 2rem ;
    }
    .grid_two_column {
      grid-template-columns: repeat(2, 1fr);
    }
    h1{
      font-size:3rem;
    }
    .image {
    width: 40rem;
    height: 37rem;
  }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 15rem 0;
    html {
      font-size: 60%;
    }
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0rem 2rem;
    }
    .grid_two_column {
      grid-template-columns: 1fr;
    }
    img {
      min-width: 70rem;
      height: 22rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    padding: 15rem 0;
    html {
      font-size: 60%;
    }
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0rem 2rem;
    }
    .grid_two_column {
      grid-template-columns: 1fr;
    }
    img {
      min-width: 50rem;
      height: 22rem;
    }
  }
`; // 1fr=25% of the available space.
export default Main_Section_DropDown;
