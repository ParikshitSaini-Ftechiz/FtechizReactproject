import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import { Android_Data } from "../components/DropDown_components.js/Card_Data";
import { Android_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Card from "../components/DropDown_components.js/Card";
import styled from "styled-components";
import Contact_Page from "../Contact_Page";
import Industries from "../Industries";
import { Questions_android } from "../components/DropDown_components.js/Questions";
import { Why_To_Choose_android } from "../components/DropDown_components.js/Why_To_Choose_Data";
import {
  Vertical_Card_App_Dev_Process_Android,
} from "../components/DropDown_components.js/Vertical_Card_App_Dev_Process";
import Tool_Tech_Android from "./../components/DropDown_components.js/Tool_Tech_Android";

// import Card from './Card';
const AndroidAppDevelopment = () => {
  const [state1, setState1] = useState(Android_Data);
  const [paraHeading, setParaHeading] = useState(Android_Para_Data);

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
      "./images/android_page.jpg",
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
  
  return (
    <>
      <Main_Section myData={data} para={para} image={image} btn={btn} />
      <Para_Heading heading={heading} para1={para1} />
      <Why_To_Choose_android />
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
      <Industries />
      {/* industies we serve */}

      {/* Tool_Tech_Android */}
       <Tool_Tech_Android/>
      {/* Tool_Tech_Android */}

      {/* development process we follow */}
      <Vertical_Card_App_Dev_Process_Android />

      {/* development process we follow */}

      <Questions_android />

      {/* contact page */}
      <Contact_Page contactPara={contactPara} contactHeading={contactHeading} />
      {/* contact page */}
    </>
  );
};
{
  /* services card */
}
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
      grid-template-columns: 1fr;
    }
    .content {
      h1 {
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
      h1 {
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
      h1 {
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
{
  /* services card end*/
}

export default AndroidAppDevelopment;
