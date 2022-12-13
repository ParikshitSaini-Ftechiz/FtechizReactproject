import React from "react";
import styled from "styled-components";
const Our_Proficiency = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
          <h1>Our Proficiency</h1>
            <p>
              As a leading Software Development Company, our professional
              expertise lies in Blockchain, Website Design & Development, Mobile
              App Development, Cloud Application and many more. Our dedication
              and commitment to 100% client satisfaction is the main reason for
              our global presence and highly satisfied clients.
            </p>
            <p>With 6+ years of experience, we are here to deliver high-end advanced services to our clients. Our mixed team of developers, testers, marketers, and designers are consistent in the chase of meaningful goals of customer satisfaction and punctuality in the delivery of projects.</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding:0rem 0;
  .content {
    h1 {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      margin: 4rem;
      text-align: justify;
    }
  }
`;
export default Our_Proficiency;
