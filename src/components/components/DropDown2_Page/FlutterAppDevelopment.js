import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import { Flutter_Data } from "../components/DropDown_components.js/Card_Data";
import FourCol_card from "../components/DropDown_components.js/FourCol_card";
import styled from "styled-components";
import { Flutter_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Contact_Page from "../Contact_Page";
import Industries from "../Industries";
import { Questions_flutter } from "../components/DropDown_components.js/Questions";
import { Why_To_Choose_flutter } from "../components/DropDown_components.js/Why_To_Choose_Data";

const FlutterAppDevelopment = () => {
  const [state1, setState1] = useState(Flutter_Data);
  const [paraHeading, setParaHeading] = useState(Flutter_Para_Data);
  const data = {
    nameData: "Flutter App Development Company",
  };
  const para = {
    paraData:
      "As one of the leading flutter app development company, Ftechiz works on Google’s revolutionary framework, Flutter to develop flexible, high performance, and expressive mobile apps for iOS, Android, Web, and Desktop. Our team of Flutter developers write single codebases and compiles it into a cross-platform app for native devices.",
  };
  const image = {
    imageData: "	https://ftechiz.com/wp-content/uploads/2022/08/flutter.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "Why to Choose Ftechiz for Flutter App Development Services?",
  };
  const para1 = {
    paraData:
      "Being creative is our quality! Ftechiz Solutions believe in the things that give us an edge over our competitors. We are the leading mobile app development company serving customers with end-to-end support. Our Idealization, feasibility assessment of the entire mobile app development process stands us one level up the competitors.",
    paraData2:
      "We work on Google’s open-source framework flutter to develop flexible, high performance, and expressive mobile apps for iOS, Android, Web, and Desktop. Our high skilled and qualified Flutter developers write single codebases and compile it into a cross-platform app for native devices.",
    paraData3:
      "We deliver high-quality Flutter app development services to build user-friendly and functional applications with native performance and flexible UI designs. As a top flutter app development company, we know how to turn your idea into reality and make a profitable and full-fledged application using Flutter. Our developers codes in Dart and use Flutter’s widgets to ensure cross-platform compatibility of applications on both iOS and Android platforms.",
    paraData4:
      "We know how to turn your app idea into a profitable application. Our dedicated consultants help you with the product and Flutter app developers code your application on the open-source development framework, ensuring a quick loading speed.",
    paraData5:
      "Being a prominent Flutter Application Development Company, there is a dedicated team of experienced flutter developers having expertise in developing beautiful and functionally rich apps crafted to meet your specific needs. Ftechiz has gained its status as being one of the top Flutter app development companies around the globe. We provide thorough support, right from brainstorming of app to development, from testing to deployment, we cover everything",
  };

  // contact page heading and para//
  const contactHeading = {
    contactHeadingData: "Have An Flutter-Based App Requirement?",
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
      <Why_To_Choose_flutter/>

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

        <Questions_flutter/>

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
`;
export default FlutterAppDevelopment;
