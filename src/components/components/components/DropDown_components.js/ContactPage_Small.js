import React from "react";
import styled from "styled-components";
import Contact_Small from "./Contact_Small";
import Extra_div from "./Extra_div"

const ContactPage_Small = ({contactPara, contactHeading}) => {
  const contactParaData = "Partner with Ftechiz and get excellent digital services for your business. We have a qualified and trained team of Remote Java Developers for hire that strive to deliver the best solution for your business at an honest price.  ";
  const contactHeadingData = "Still Wondering if we are the Right Fit? Take our Risk-Free 7 Days Free Trial";
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
        <Extra_div/>
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

