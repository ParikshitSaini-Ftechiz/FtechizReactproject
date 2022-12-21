import React from "react";
import styled from "styled-components";
import Contact_Small from "./Contact_Small";

const ContactPage_Small = ({contactPara, contactHeading}) => {
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
          <div><Contact_Small /></div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 6rem 0 0 0 ;
  .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 3rem;
    }
  }
`;
export default ContactPage_Small;

