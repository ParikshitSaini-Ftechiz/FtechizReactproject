import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import { WebApp_Data } from "../components/DropDown_components.js/Card_Data";
import Card from "../components/DropDown_components.js/Card";
import styled from "styled-components";
import { WebApp_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Contact_Page from "../Contact_Page";
import Industries from "../Industries";
import { Questions_webapp } from "../components/DropDown_components.js/Questions";
import { Why_To_Choose_webapp } from "../components/DropDown_components.js/Why_To_Choose_Data";

const WebApplicationDevelopment = () => {
  const [state1, setState1] = useState(WebApp_Data);
  const [paraHeading, setParaHeading] = useState(WebApp_Para_Data);
  const data = {
    nameData: "Leading Web Application Development Company",
  };
  const para = {
    paraData:
      "Ftechiz magnifies the digital transformation of growing businesses by leveraging its strong portfolio in developing custom web applications using latest technology and tools. We are the top-rated web application development company building feature-rich web applications that are easy to scale and maintain.",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/08/lee-campbell-DtDlVpy-vvQ-unsplash-1.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData:
      "Why to Choose Ftechiz for Web Application Development Services?",
  };
  const para1 = {
    paraData:
      "We are the leading web application development company that purely focuses on building fully functional, robust, efficient and scalable web applications. We build custom web apps using the right technology and tools that easily integrate with your business objectives and help you achieve maximum growth. Our end goal is to build high-quality quality web applications for you that maximize resource utilization at a low cost.",
    paraData2:
      "We have a pool of most talented developers, designers, testers, project managers, & quality engineers that use the advanced web app development techniques to build customized, high-performing, enterprise-grade, and result-driven web applications for your business. Our development team has successfully delivered over 50 projects of all sizes. At Ftechiz, we have transformed various industries across the globe leveraging powerful and newest technologies.",
    paraData3:
      "We have a technically strong web application development team that has successfully delivered 50+ custom web app development projects ranging from web-based apps, e-commerce portals, CMS, B2B & B2C applications, Blockchain Wallets, Education Portals, and more. We are the experts of all new tools & technologies and provide the best web application development services.",
    paraData4:
      " Below are some of the reasons why you can choose Ftechiz for Web Application Development services",
  };

  // contact page heading and para//
  const contactHeading = {
    contactHeadingData: "Have Any Project Requirement?",
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
        <Why_To_Choose_webapp/>

        {/*services para or heading through map method */}
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

        {/*services cards */}
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
        {/*services cards */}

        {/* industries we serve */}
        <Industries />
        {/* industries we serve */}

        <Questions_webapp/>

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
export default WebApplicationDevelopment;
