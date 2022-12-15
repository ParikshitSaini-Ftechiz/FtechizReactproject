import React,{useState} from 'react'
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import {Android_Data} from "../components/DropDown_components.js/Card_Data";
import Card from '../components/DropDown_components.js/Card';
import styled from "styled-components"
import { Flutter_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
const FlutterAppDevelopment = () => {
  const [state1, setState1] = useState(Android_Data);
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
  // icons //
  const icon = {
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
    icon5: "",
    icon6: "",
    icon7: "",
    icon8: "",
  };
  const title = {
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    title8: "",
  };
  return (
    <>
        <Wrapper>
      <Main_Section myData={data} para={para} image={image} btn={btn} />
      <Para_Heading heading={heading} para1={para1} />
      <Why_To_Choose icon={icon} title={title} />
          {/* why choose us para or heading through map method */}
        <div>
          {paraHeading.map((currentData) => {
            const {
              headingData,
              paraData,
              paraData2,
              paraData3,
            } = currentData;
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

        {/* why choose us cards */}
      <div className="container">
          <div className="grid grid-three-column">
            {state1.map((currentData) => {
              const { icon1, title1, para1} = currentData;
              return (
                <>
                <div>
                <Card title={title1} para={para1} icon={icon1}/>
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
  padding: 1rem;
  text-align: center;
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 0rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  `;
export default FlutterAppDevelopment;
