import React from "react";
import styled from "styled-components";

const Who_We_Are = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1>Who We Are</h1>
            <p>
              Based out of Dehradun, Uttarakhand, India, Ftechiz Solutions Pvt
              Ltd is a leading Software Development Company, designing and
              delivering tailor-made solutions to enterprises and startups
              worldwide. We have a band of 20+ highly qualified and trained
              full-stack developers, designers and innovators championing the
              global cause of digitization and digitalization. We use latest
              emerging technologies like Blockchain, Cloud, Flutter, React, etc.
              helping organizations to launch next-gen applications and
              solutions that are more open, efficient, secure and scalable. We
              are proud to have delivered 50+ projects in the diverse fields of
              education, health care, entertainment, ecommerce, travel, etc.
            </p>
            <p>
              Ftechiz echoes the mantras of Innovation, creativity, quality and
              promptness and we imbibe these mantras in our work, to the core.
              We are technology pioneers, having deep knowledge of how to
              conceptualize custom software development ideas and deliver the
              best expected end-product. Having worked with best organizations
              across the world and created various on-demand solutions, we have
              an impressive work portfolio demonstrating our expertise.
            </p>
          </div>
        </div>
        
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 2rem 0;
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
export default Who_We_Are;
