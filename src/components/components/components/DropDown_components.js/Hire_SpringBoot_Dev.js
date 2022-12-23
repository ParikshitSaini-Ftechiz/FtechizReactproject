import React, { useState } from "react";
import styled from "styled-components";
import Hire_SpringBoot_Dev_Card from "./Hire_SpringBoot_Dev_Card";
import { Hire_SpringBoot_Dev_Data } from "./Hire_SpringBoot_Dev_Data";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";

export const Hire_SpringBoot_Dev_java = () => {
  const [state, setState] = useState(Hire_SpringBoot_Dev_Data);
  const heading = "Hire Spring Boot Developer As Per Your Need";
  const para1 =
    " Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy Exit Policy";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{heading} </h1>
            <p>{para1} </p>
          </div>
          <div className="grid grid-three-column ">
            {state.map((currentData) => {
              const { id } = currentData;
              return <Hire_SpringBoot_Dev_Card key={id} {...currentData} />;
            })}
          </div>
          <div className="button">
            <NavLink>
              <Button>Schedule an interview with developer</Button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export const Hire_SpringBoot_Dev_blockchain = () => {
  const [state, setState] = useState(Hire_SpringBoot_Dev_Data);
  const heading = "Hire Dedicated Blockchain Developers As Per Your Need";
  const para1 =
    " Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy Exit Policy";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{heading} </h1>
            <p>{para1} </p>
          </div>
          <div className="grid grid-three-column ">
            {state.map((currentData) => {
              const { id } = currentData;
              return <Hire_SpringBoot_Dev_Card key={id} {...currentData} />;
            })}
          </div>
          <div className="button">
            <NavLink>
              <Button>Schedule an interview with developer</Button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export const Hire_SpringBoot_Dev_mobile = () => {
  const [state, setState] = useState(Hire_SpringBoot_Dev_Data);
  const heading = "Hire Mobile Developers as Per Your Need in 24 Hours";
  const para1 =
    "Simple & Transparent Pricing | Fully Signed NDA | Code Security | No Hidden Cost";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{heading} </h1>
            <p>{para1} </p>
          </div>
          <div className="grid grid-three-column ">
            {state.map((currentData) => {
              const { id } = currentData;
              return <Hire_SpringBoot_Dev_Card key={id} {...currentData} />;
            })}
          </div>
          <div className="button">
            <NavLink>
              <Button>Schedule an interview with developer</Button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export const Hire_SpringBoot_Dev_fullstack = () => {
  const [state, setState] = useState(Hire_SpringBoot_Dev_Data);
  const heading = "Hire Full Stack Developers As Per Your Need";
  const para1 =
    " Simple & Transparent Pricing | Fully Signed NDA | Code Security | Easy Exit Policy";

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{heading} </h1>
            <p>{para1} </p>
          </div>
          <div className="grid grid-three-column ">
            {state.map((currentData) => {
              const { id } = currentData;
              return <Hire_SpringBoot_Dev_Card key={id} {...currentData} />;
            })}
          </div>
          <div className="button">
            <NavLink>
              <Button>Schedule an interview with developer</Button>
            </NavLink>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 9rem 0rem 3rem 0;
  .content {
    h1{
        
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin-bottom: .5rem;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin-bottom: 2rem;
    }
  }
  .grid {
    display: grid;
    gap: 5rem;
    margin: 8rem 3rem 0rem 3rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .button {
    margin: 7rem 0 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    Button {
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
`;
export default Hire_SpringBoot_Dev_java;
