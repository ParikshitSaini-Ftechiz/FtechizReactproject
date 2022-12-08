import React from 'react'
import styled from 'styled-components';

const Tool_Tech = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>Tools & Tech Stack</h1>
          <p>
            Get what you are looking for to fulfill your software development and outsourcing needs at Ftechiz, with our expertise on all in-demand technologies & platforms.</p>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
padding: 5rem 0;
h1,
p{
  color:${({ theme }) => theme.colors.heading};
  text-align:center;
  margin: 0rem 16rem;
}
`;
export default Tool_Tech;