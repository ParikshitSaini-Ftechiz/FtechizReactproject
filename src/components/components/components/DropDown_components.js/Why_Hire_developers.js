import React, { useState } from "react";
import Para_Heading from "./Para_Heading";
import styled from "styled-components";
import { Why_Hire_developers_mobile,  Why_Hire_developers_Data} from "./Why_Hire_developers_Data"
import Why_Hire_developers_card from "./Why_Hire_developers_card";

export const Why_Hire_developers_javaDev = () => {
  const [state, setState] = useState(Why_Hire_developers_Data);
  const heading = {
    headingData: "Why Hire Java Developers From Ftechiz?",
  };
  const para1 = {
    paraData:
      " Being a prominent Java Software Development Company, we provide top-class java developers that are skilled and having years of industry experience in developing complex applications. You can Hire Java Developers from us and they can help you to streamline all your business needs in the right way.  Our knowledgeable development team uses the latest technologies. We put our clients at the heart of what we do, so you get the best java development services around.",
  };
  return (
    <>
      <Para_Heading heading={heading} para1={para1} />
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column ">
            {state.map((currentData) => {
              const { icon, title } = currentData;
              return (
                <>
              <div className="main_div">
              <Why_Hire_developers_card icon={icon} title={title}/>
              </div>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export const Why_Hire_developers_blockchainDev = () => {
  const [state, setState] = useState(Why_Hire_developers_Data);
  const heading = {
    headingData: "Why Hire Blockchain Developers From Ftechiz?",
  };
  const para1 = {
    paraData:
      "Whether you look for agile development of a single app or an entire suite of Blockchain development project delivery, we, as one of the top Blockchain development companies, help you hire blockchain developers, which ensure exceptional business results.",
  };
  return (
    <>
      <Para_Heading heading={heading} para1={para1} />
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column ">
            {state.map((currentData) => {
              const { icon, title } = currentData;
              return (
                <>
              <div className="main_div">
              <Why_Hire_developers_card icon={icon} title={title}/>
              </div>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export const Why_Hire_developers_mobileDev = () => {
  const [state, setState] = useState(Why_Hire_developers_mobile);
  const heading = {
    headingData: "Why Hire Mobile App Developers From Ftechiz?",
  };
  const para1 = {
    paraData:
      "Ftechiz provides skilled remote mobile app developers to hire for all your mobile app development requirements. Hire mobile app developers from Ftechiz is a 100% transparent process and helps our clients to just focus on their core business. You can hire mobile app developers from our strong team of qualified & experienced developers which are capable enough to transform your app idea into reality.",
  };
  return (
    <>
      <Para_Heading heading={heading} para1={para1} />
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column ">
            {state.map((currentData) => {
              const { icon, title } = currentData;
              return (
                <>
              <div className="main_div">
              <Why_Hire_developers_card icon={icon} title={title}/>
              </div>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export const Why_Hire_developers_fullstackDev = () => {
  const [state, setState] = useState(Why_Hire_developers_Data);
  const heading = {
    headingData: "Why Hire Full Stack Developers From Ftechiz?",
  };
  const para1 = {
    paraData:
      " Being a well-known Full Stack developer’s provider, we offer top-class developers that are entirely tailored and help you to make all your business functions more efficient in the right way. Our experienced development team uses the latest technologies. We put all our clients at the heart of what we do, so you will get the best service around.",
  };
  return (
    <>
      <Para_Heading heading={heading} para1={para1} />
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column ">
            {state.map((currentData) => {
              const { icon, title } = currentData;
              return (
                <>
              <div className="main_div">
              <Why_Hire_developers_card icon={icon} title={title}/>
              </div>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 0rem 0rem 6rem 0;
  .grid {
    display: grid;
    gap: 5rem;
    margin: 8rem 3rem 0rem 3rem;
  }

  .grid-two-column {
    grid-template-columns: 1fr 1fr;
  }
 
  .grid-two-rows {
    grid-template-columns: 1fr 1fr;
  }

  .main_div {
    display: flex;
   margin-right:auto;
   marign-left:auto;
   position:relative;
  }
`;

