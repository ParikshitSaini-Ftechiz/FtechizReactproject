import { Button } from "./Button";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const DropDown_MainSection = ({ myData, para, image, btn }) => {
  const { nameData } = myData;
  const {
    paraData,
    paraData1,
    paraData2,
    paraData3,
    paraData4,
    paraData5,
    paraData6,
    paraData7,
  } = para;
  const { imageData } = image;
  const { btnData } = btn;
  return (
    <>
      <Wrapper>
        <div className="container main-section">
          <div className="grid grid_two_column">
            <div className="main_section">
              <h1 className="heading animX">{nameData}</h1>
              <p className="main_para para anim">
                <i class="fa fa-check" aria-hidden="true"></i>
                {paraData}
                <br />
                <i class="fa fa-check" aria-hidden="true"></i>
                {paraData1}
                <br />
                <i class="fa fa-check" aria-hidden="true"></i>
                {paraData2}
                <br />
                <i class="fa fa-check" aria-hidden="true"></i>
                {paraData2}
                <br /> <i class="fa fa-check" aria-hidden="true"></i>
                {paraData3}
                <br /> <i class="fa fa-check" aria-hidden="true"></i>
                {paraData4}
                <br /> <i class="fa fa-check" aria-hidden="true"></i>
                {paraData5}
                <br /> <i class="fa fa-check" aria-hidden="true"></i>
                {paraData6}
                <br />
                <i class="fa fa-check" aria-hidden="true"></i>
                {paraData7}
              </p>
              <NavLink to="/hire">
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
  padding: 7rem 0;
  background: ${({ theme }) => theme.colors.component_bg};
  .main_section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    i {
      font-size: 1.3rem;
      margin-right: 1rem;
    }
    Button {
      background: ${({ theme }) => theme.colors.helper};
      font-weight: 300;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.color_white};
      margin-top: -4rem;
    }
  }

  .grid {
    display: grid;
    gap: 5rem;
    margin: 8rem 2rem 0rem 2rem;
  }

  .image {
    width: 100%;
    height: 45rem;
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
    padding: 15rem 0;
    html {
      font-size: 60%;
    }
    .grid {
      display: grid;
      gap: 3rem;
      display: flex;
      align-items: center;
    justify-content: center;
      margin: 0rem 2rem;
    }
    .grid_two_column {
      grid-template-columns: repeat(2, 1fr);
    }
    h1 {
      font-size: 4rem;
    }
    .image {
      width: 100%;
      height: 35rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 60%;
    }
    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0rem 0rem;
    }
    .grid_two_column {
      grid-template-columns: 1fr;
    }
    .image {
      width: 100%;
      height: 35rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
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
    .image {
      width: 100%;
      height: auto;
    }
  }
`; // 1fr=25% of the available space.
export default DropDown_MainSection;
