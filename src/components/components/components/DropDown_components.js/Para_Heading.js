import React from "react";
import styled from "styled-components";

const Para_Heading = ({ heading, para1 ,para}) => {
  const { headingData } = heading;
  const { paragraph } = para;
  const {
    paraData,
    paraData2,
    paraData3,
    paraData4,
    paraData5,
    paraData6,
    paraData7,
    paraData8,
    paraData9,
    paraData10,
    paraData11,
  } = para1;

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>{headingData} </h1>
            <p className="para">{paragraph}</p>
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData2} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData3} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData4} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData5} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData6} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData7} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData8} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData9} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData10} </p> 
            <p><i class="fa fa-check" aria-hidden="true"></i>{paraData11} </p> 
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
   {
    h1{
      color: ${({ theme }) => theme.colors.heading};
      text-align:center;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: justify;
      i {
      font-size: 1.2rem;
      margin-right: 1rem;
    }
    }
    .para {
      color: ${({ theme }) => theme.colors.heading};
      text-align: justify;
      margin: 4rem  0;
    }
  }
`;
export default Para_Heading;
