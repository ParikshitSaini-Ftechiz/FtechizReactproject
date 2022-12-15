import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import { IOS_Data } from "../components/DropDown_components.js/Card_Data";
import Card from "../components/DropDown_components.js/Card";
import styled from "styled-components";
import { IOS_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";

const IOSAppDevelopment = () => {
  const [state1, setState1] = useState(IOS_Data);
     const [paraHeading, setParaHeading] = useState(IOS_Para_Data);

  const data = {
    nameData: "iOS App Development Company",
  };
  const para = {
    paraData:
      "Want to go for an extremely functional and exclusive iOS app development to meet your business requirements? Ftechiz is the right destination for you to create and launch your next-gen iPhone/iOS app built with state-of-the-art technologies.",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/11/HireRemoteDevelopers.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "Why to Choose Ftechiz for iOS App Development Services?",
  };
  const para1 = {
    paraData:
      "As a full-stack iOS App Development Company we have developed hundreds of native iOS apps that witnessed skyrocketing success rates and having millions of download on the App Store. We have a battalion of highly skilled experienced iPhone mobile app developers and our primary tech stack for developing iOS solutions is Objective-C and Swift.",
    paraData2:
      "We are an iOS app development company with an enthusiastic team of iPhone app developers that provide custom iOS app development services keeping in regard the specific design, device and iOS app Development Company guidelines related to all individual platforms – iPad, iPhone, Apple TV, and Apple Watch. Our iOS app developers have built apps for diverse use cases ranging from real-time analytics to route matching, geo-tagging, video streaming, and more across multiple categories like Healthcare, Education, Entertainment, Blockchain, and many more.",
    paraData3:
      "Ftechiz has earned its reputation as being one of the top iOS app development companies around the globe. This is because we believe in our set of principles and offer robust mobile applications to our valuable clients. We provide thorough support, right from planning and research of app to development, from testing to launch, we cover everything. ",
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
              const { icon1, title1, para1 } = currentData;
              return (
                <>
                  <div>
                    <Card title={title1} para={para1} icon={icon1} />
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
export default IOSAppDevelopment;