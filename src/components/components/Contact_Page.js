import React from "react";
import styled from "styled-components";
import Contact from "./components/Contact";
const Contact_Page = ({contactPara, contactHeading}) => {
  const {contactParaData} = contactPara;
  const {contactHeadingData} = contactHeading;
  return (
    <>
      <Wrapper>
        <div class="container">
          <div className="content">
            <h1>{contactHeadingData}</h1>
            <p>
             {contactParaData}
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

