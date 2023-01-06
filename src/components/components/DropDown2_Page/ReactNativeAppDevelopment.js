import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import { ReactNative_Data } from "../components/DropDown_components.js/Card_Data";
import FourCol_card from "../components/DropDown_components.js/FourCol_card";
import styled from "styled-components";
import { ReactNative_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Contact_Page from "../Contact_Page";
import Industries from "../Industries";
import {  Questions_reactnative } from "../components/DropDown_components.js/Questions";
import { Why_To_Choose_reactnative } from "../components/DropDown_components.js/Why_To_Choose_Data";

const ReactNativeAppDevelopment = () => {
  const [state1, setState1] = useState(ReactNative_Data);
  const [paraHeading, setParaHeading] = useState(ReactNative_Para_Data);
  const data = {
    nameData: "React Native App Development Company",
  };
  const para = {
    paraData:
      "As a prominent React Native App Development Company in USA & India, we build native apps for both Android and iOS platforms to optimize your mobile development processes using React Native. Our react native app developer team creates react native apps from scratch or add the framework to your existing application with a single-point plan to advance your app delivery without adding any extra react native app development cost in your project.",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/08/pexels-realtoughcandycom-11035471.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "Why to Choose Ftechiz for React Native App Development?",
  };
  const para1 = {
    paraData:
      "Backed by the strength of Facebook and the easiness of JavaScript, React Native is a most trending and innovative technology (originated in 2015) having over thousands of users already. Numerous mobile app development companies like Wix, Pinterest, Facebook, Myntra have chosen react native because it was quick, efficient, and easy to scale. They were heading to the new technology of this era and making both iOS and android platform friendly code so that it can be used in a flexible way.",
    paraData2:
      "Being one of the leading react native app development company, we uses the React Native framework to help you develop an app that offers an interface like native and is a lot faster to create and operate. Our skilled and experienced React Native Mobile App developers have expertise in creating stunning and functionally rich mobile apps crafted to meet your precise needs.",
    paraData3:
      "We stand out in delivering applications that have quality like native and are created in a low development time, cost and effort. As a leading React Native app development company, Ftechiz has extremely advanced methodologies that help us successfully deploy hundreds of innovative solutions globally. With our React native app development services, we are here to help you with your requirements anytime and at any place. We provide thorough support at each stage, right from the brainstorming of the app to development, from testing to deployment, we cover everything.",
  };

  // contact page heading and para//
  const contactHeading = {
    contactHeadingData: "Have An React Native-Based App Requirement?",
  };
  const contactPara = {
    contactParaData:
      "Feel free to connect with us by filling out this form! Our team will be happy to guide you through our process.",
  };

  return (
    <>
      <Wrapper>
        <Main_Section myData={data} para={para} image={image} btn={btn} />
        <Para_Heading heading={heading} para1={para1} />
        <Why_To_Choose_reactnative/>

        {/* services para or heading through map method */}
        <div>
          {paraHeading.map((currentData) => {
            const { headingData, paraData, paraData2, paraData3 } = currentData;
            return (
              <>
                <Para_Heading_Component
                  headingData={headingData}
                  paraData={paraData}
                  paraData2={paraData2}
                  paraData3={paraData3}
                />
              </>
            );
          })}
        </div>

        {/* services cards */}
        <div className="container">
          <div className="grid grid-four-column">
            {state1.map((currentData) => {
              const { icon1, title1, para1 } = currentData;
              return (
                <>
                  <div>
                    <FourCol_card title={title1} para={para1} icon={icon1} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* services cards */}

        {/* industries we serve */}
        <Industries />
        {/* industries we serve */}

        <Questions_reactnative/>

        {/* contact page */}
        <Contact_Page
          contactPara={contactPara}
          contactHeading={contactHeading}
        />
        {/* contact page */}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 0rem;
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      max-width: 130rem;
      padding: 0 3.2rem;
    }
    .grid {
    display: grid;
    gap: 1rem;
    margin: 8rem 1.5rem;
  }
    .grid-four-column {
      grid-template-columns: 1fr 1fr ;
    }
    .content {
    h1{
      text-align: center;
      margin: 1rem 6rem;
      color: ${({ theme }) => theme.colors.heading};
    }
    p {
      text-align: justify;
      margin: 2rem 6rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 60%;
    }
    .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 2rem;
  }
    .grid-four-column {
      grid-template-columns: 1fr;
    }
    
     .content {
    h1{
      text-align: justify;
    }
    p {
      text-align: center;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  }

  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }
    .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 2rem;
  }
    .grid-four-column {
      grid-template-columns: 1fr;
    }
    
     .content {
    h1{
      {
      text-align: center;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
    }
    p {
      text-align: justify;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
 
  }
`;
export default ReactNativeAppDevelopment;
