import React from "react";
import styled from "styled-components";

const Para_Heading_Component = ({
  headingData,
  paraData,
  paraData2,
  paraData3,
  paraData4,
  paraData5,
  paraData6,
}) => {
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
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 1rem 0 0 0;
   {
    h1 {
      text-align: center;
      color: ${({ theme }) => theme.colors.heading};
      margin: 2rem 0 0 0;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: justify;
      margin: 2rem 0 0 0;
    }
  }
`;
export default Para_Heading_Component;
