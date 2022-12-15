import React,{useState} from 'react'
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import {ReactNative_Data} from "../components/DropDown_components.js/Card_Data";
import Card from '../components/DropDown_components.js/Card';
import styled from "styled-components"
import { ReactNative_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";

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
          <div className="grid grid-four-column">
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
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  `;
export default ReactNativeAppDevelopment;