import React from "react";
import styled from "styled-components";

const Para_Heading = ({ heading, para1 }) => {
  const { headingData } = heading;
  const {
    paraData,
    paraData2,
    paraData3,
    paraData4,
    paraData5,
    paraData6,
    paraData7,
    paraData8,
  } = para1;

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{headingData} </h1>
            <p>{paraData} </p> 
            <p>{paraData2} </p> 
            <p>{paraData3} </p> 
            <p>{paraData4} </p> 
            <p>{paraData5} </p> 
            <p>{paraData6} </p> 
            <p>{paraData7} </p> 
            <p>{paraData8} </p> 
           
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0 0rem 0;
   {
    h1{
      color: ${({ theme }) => theme.colors.heading};
      text-align:center;
      margin-bottom:4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: justify;
      margin-bottom:2rem;
    }
  
  }
  
`;
export default Para_Heading;
