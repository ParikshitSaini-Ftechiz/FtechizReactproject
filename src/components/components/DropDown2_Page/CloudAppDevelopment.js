import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import {Why_To_Choose_cloud} from "../components/DropDown_components.js/Why_To_Choose_Data";
import { Cloud_Data } from "../components/DropDown_components.js/Card_Data";
import Card from "../components/DropDown_components.js/Card";
import styled from "styled-components";
import { Cloud_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Contact_Page from "../Contact_Page";
import Industries from "../Industries";
import { cloud_dev_process } from "../components/DropDown_components.js/VerticalCard_Data";
import Vertical_Card from "../components/DropDown_components.js/Vertical_Card";
import { Questions_cloud } from "../components/DropDown_components.js/Questions";

const CloudAppDevelopment = () => {
  const [state1, setState1] = useState(Cloud_Data);
  const [paraHeading, setParaHeading] = useState(Cloud_Para_Data);
  const [devProcess, setDevProcess] = useState(cloud_dev_process);
  const data = {
    nameData: "Leading Cloud Application Development Company",
  };
  const para = {
    paraData:
      "Control the power of cloud computing: Ftechiz Solutions creates secure, scalable digital solutions that drive your bottom line and support optimized customer experiences as per you budget and business requirements. Contact us to create cloud applications that run in the cloud and may leverage cloud features and services offered by cloud vendors.",
  };
  const image = {
    imageData:
      "	https://ftechiz.com/wp-content/uploads/2022/08/cloud-computing.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "What Sets Us Apart As Cloud Application Development Company?",
  };
  const para1 = {
    paraData:
      "Being unique is our main quality! Ftechiz Solutions believe in the things that give us an edge over our competitors. We are prominent Software and Mobile App Development Company serving customers with end-to-end support across the globe. Our Idealization, feasibility assessment of the entire software development process stands us one level up then our competitors. ",
    paraData2:
      "We start from the scratch and stick with you through the entire process of designing, developing, testing and managing your cloud-based app. Our unique custom cloud application development services include innovative cloud strategies based on the best leading providers for your business — whether you require enterprise cloud adoption, CloudOps or any other cloud application.",
    paraData3:
      "We use latest cutting-edge technologies and the best of all private, public and hybrid cloud services for business-driving results. Our experienced team of cloud-based app developers have all the skills required for the job. Plus, you will get on-demand and self-service IT Support and maintenance for your cloud-based apps, including services such as efficiency audits, SLA management and overview of all critical elements for your cloud-based application.",
    paraData4:
      "We use latest cutting-edge technologies and the best of all private, public and hybrid cloud services for business-driving results. Our experienced team of cloud-based app developers have all the skills required for the job. Plus, you will get on-demand and self-service IT Support and maintenance for your cloud-based apps, including services such as efficiency audits, SLA management and overview of all critical elements for your cloud-based application.",
  };

  // contact page heading and para//
  const contactHeading = {
    contactHeadingData: "Have Any Project Requirement?",
  };
  const contactPara = {
    contactParaData:
      "Feel free to connect with us by filling out this form! Our team will be happy to guide you through our process.",
  };

  // development process para and heading//
  const dev_process_heading = "Development Process We Follow";
  const dev_process_para =
    "Ftechiz is one of the most trusted partners to help guide your cloud journey. We help you in quickly build, test, launch and deliver your cloud strategy, new services and products. We fit in the best of all the major cloud providers into a flawless experience for your customers, employees and other stakeholders. While modernizing your business we focus on reducing complexity, costs and operational challenges.";

  return (
    <>
      <Wrapper>
        <Main_Section myData={data} para={para} image={image} btn={btn} />
        <Para_Heading heading={heading} para1={para1} />
        <Why_To_Choose_cloud/>
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
        {/* services cards */}

        {/* industries we serve */}
        <Industries />
        {/* industries we serve */}

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

        <Questions_cloud/>

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
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
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
    .grid-three-column {
      grid-template-columns: 1fr 1fr 1fr;
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
    .grid-three-column {
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
    .grid-three-column {
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

const Section = styled.section`
  padding: 12rem 0 4rem 0;
  .grid {
    display: grid;
    gap: 2rem;
    margin: 1rem 0rem;
  }
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
export default CloudAppDevelopment;
