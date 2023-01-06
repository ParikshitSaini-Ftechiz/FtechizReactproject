import React from "react";
import styled from "styled-components";
import Contact_Small from "./Contact_Small";

const ContactForm_DropDown = () => {

  return (
    <>
      <Wrapper>
        <div class="container">
          <div className="content">
            <h1>Schedule an Interview with Developer and Get One Week Risk-Free Trial</h1>
            <p>We ensure you are matched with the right resource based on your requirements</p>
          </div>
          <div><Contact_Small /></div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 12rem 0 5rem 0;
  .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 10rem;
    }
  }
  @media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }
      .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 10rem;
    }
  }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
      html{
        font-size: 50%;
      }
     
      .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem;
    }
  }
}
@media (max-width:${({ theme }) => theme.media.small_phone}) {
      html{
        font-size: 50%;
      }
     
      .content {
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem;
    }
  }
}
   
`;
export default ContactForm_DropDown;

