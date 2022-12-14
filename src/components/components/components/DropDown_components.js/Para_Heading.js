import React from "react";
import styled from "styled-components";

const Para_Heading = ({heading, para1 , heading1 , services_para}) => {
  const {headingData} = heading;
  const {paraData, paraData2, paraData3, paraData4 ,paraData5 ,paraData6} = para1;
 
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
padding:9rem 0 0 0;
{
  h1,
  p{
    color:${({theme}) => theme.colors.heading};
    text-align:justify;
    margin:2rem 0 0 0;
  }
}
`;
export default Para_Heading;
