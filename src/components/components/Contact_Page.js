import React from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
const Contact_Page = () => {
  return (
    <>
      <Wrapper>
        <div class="container">
          <div className="content">
            <h1>Tell Us About Your Project</h1>
            <p>
              Here are the reasons you can depend on Ftechiz Solutions to keep
              you and your business up and running:
            </p>
          </div>
          <div><Contact /></div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 16rem;
    }
  }
`;
export default Contact_Page;

