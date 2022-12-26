import React, { useState } from "react";
import styled from "styled-components";
import {Technology_Stack_javaCard, Technology_Stack_blockchainCard , Technology_Stack_mobileCard} from "./Technology_Stack_Card";
import {  Technology_Stack_blockchainData, Technology_Stack_JavaData, Technology_Stack_mobileData } from "./Technology_Stack_Data";

export const Technology_Stack_java = () => {
  const [state, setState] = useState(Technology_Stack_JavaData);
  const heading = "Hire Spring Boot Developer As Per Your Need";
  const para1 ="";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{heading} </h1>
            <p>{para1} </p>
          </div>
          <div className=" images ">
            {state.map((currentData) => {
              const { id } = currentData;
              return <Technology_Stack_javaCard key={id} {...currentData} />;
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export const Technology_Stack_blockchain = () => {
  const [state, setState] = useState(Technology_Stack_blockchainData);
  const heading = "Hire Dedicated Blockchain Developers As Per Your Need";
  const para1 =
    "";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{heading} </h1>
            <p>{para1} </p>
          </div>
          <div className=" images ">
            {state.map((currentData) => {
              const { id } = currentData;
              return <Technology_Stack_blockchainCard key={id} {...currentData} />;
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export const Technology_Stack_mobile = () => {
  const [state, setState] = useState(Technology_Stack_mobileData);
  const heading = "Mobile App Technologies We Excel In ";
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{heading} </h1>
          </div>
          <div className=" images ">
            {state.map((currentData) => {
              const { id } = currentData;
              return <Technology_Stack_mobileCard key={id} {...currentData} />;
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0rem;
  .content {
    h1{
        
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  .images{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:5rem;
  }


 
`;