import React, { useState } from "react";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import Main_Section from "../components/Main_Section";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import { Android_Data } from "../components/DropDown_components.js/Card_Data";
import { Android_Para_Data } from "../components/DropDown_components.js/Para_Data";
import { android_dev_process } from "../components/DropDown_components.js/VerticalCard_Data";
import Card from "../components/DropDown_components.js/Card";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PaidIcon from "@mui/icons-material/Paid";
import ShopIcon from "@mui/icons-material/Shop";
import Contact_Page from "../Contact_Page";
import Industries_We_Serve from "../components/DropDown_components.js/Industries_We_Serve";
import Vertical_Card from "../components/DropDown_components.js/Vertical_Card";

// import Card from './Card';
const AndroidAppDevelopment = () => {
  const [state1, setState1] = useState(Android_Data);
  const [paraHeading, setParaHeading] = useState(Android_Para_Data);
  const [devProcess, setDevProcess] = useState(android_dev_process);

  // main section //
  const data = {
    nameData: "Android App Development Company",
  };
  const para = {
    paraData:
      "Within a short span, Ftechiz has emerged as one of the leading Android App Development Companies in the world delivering solid groundbreaking solutions & services to start-ups, mid and high-level organizations. Our highly skilled and talented Android App developers have years of experience in developing android apps that are custom, stable, fully functional, secure and futuristic for the entire range of Android devices.",
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
    headingData: "Why to Choose Ftechiz for Android App Development Services?",
  };
  const para1 = {
    paraData:
      "It has been over 6 years since we started developing Android Applications for our valuable clients. Over the years, we have designed and developed 50+ applications in different categories ranging from e-Commerce, On-Demand Delivery, Taxi & Travel, Healthcare, Education, and several other industries. As a leading Android App Development Company, Ftechiz have a squad of app developers to create well-researched, user-friendly and robust mobile apps for client businesses to boom.",
    paraData2:
      "You do not need to search now like Android App Development Company near me, as top Mobile App Development Company, we make sure to excel in the provision of our services like Android Consulting, Native/ Custom/ Hybrid Android App Development, and Android UI/UX Design. With high customer trust and satisfaction, Ftechiz have been able to transform various start-ups and organizations around the world. We help businesses to find solutions using latest technology, and to be more specific that is using Android apps that will help them to run their business smoothly and much more efficiently.",
    paraData3:
      "Our highly skilled android app developers know all the ins and outs of the Android Platform. Our developers have all the working experience of the major Android device, types, and brands. We assure our client of a reliable product that connects to the platform’s users.",
  };

  // contact page heading and para//
  const contactHeading = {
    contactHeadingData: "Have An Android-Based App Requirement?",
  };
  const contactPara = {
    contactParaData:
      "Feel free to connect with us by filling out this form! Our team will be happy to guide you through our process.",
  };
  // development process para and heading//
  const dev_process_heading = "Our Development Process";
  const dev_process_para =
    "A reliable Android App Development company, Ftechiz supervises the entire development process to achieve client satisfaction. The method includes Ideation & Planning, Design & Development, Testing & QA and Deployment of the Application. This process is followed by the post-deployment services, which include; bug fixing, updates, and modifications as per demand of the client at the best price.";
  //why to choose us  icons //
  const icon = {
    icon1: (
      <i aria-hidden="true" class="elementkit-infobox-icon fas fa-user-cog"></i>
    ),
    icon2: (
      <ShopIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon3: (
      <PaidIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon4: (
      <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>
    ),
    icon5: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fab fa-rocketchat"
      ></i>
    ),
    icon6: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fas fa-pencil-alt"
      ></i>
    ),
    icon7: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fas fa-users-cog"
      ></i>
    ),
    icon8: (
      <SearchIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
  };
  const title = {
    title1: " Skilled Android Developers  ",
    title2: " Play Store Submission    ",
    title3: "  Cost-effective solutions   ",
    title4: "IP Rights Protection   ",
    title5: " Smooth Communication   ",
    title6: " Robust Architecture  ",
    title7: "   Post Launch Maintenance ",
    title8: "   Complete Transparency   ",
  };

  return (
    <>
      <Main_Section myData={data} para={para} image={image} btn={btn} />

      <Para_Heading heading={heading} para1={para1} />
      <Why_To_Choose icon={icon} title={title} />

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

      {/* services card */}
      <Wrapper>
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
        {/* services card end*/}
      </Wrapper>
      {/* industies we serve */}
      <Industries_We_Serve />
      {/* industies we serve */}

      {/* development process we follow */}
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>

      {/* development process we follow */}

      {/* contact page */}
      <Contact_Page contactPara={contactPara} contactHeading={contactHeading} />
      {/* contact page */}
    </>
  );
};
const Wrapper = styled.section`
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 0rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Section = styled.section`
  padding: 12rem 0 5rem 0;
  .content {
    h1 {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: justify;
      margin: 0 0 4rem 0;
    }
  }
`;
export default AndroidAppDevelopment;
