import React, { useState } from "react";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import Main_Section from "../components/Main_Section";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import { Android_Data } from "../components/DropDown_components.js/Card_Data";
import { Android_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Card from "../components/DropDown_components.js/Card";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import PaidIcon from '@mui/icons-material/Paid';
import ShopIcon from '@mui/icons-material/Shop';

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
  // icons //
  const icon = {
    icon1:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-user-cog"></i>,
    icon2:<ShopIcon style={{fontSize:"5rem", color:"white", marginBottom:"-.8rem"}}/>,
    icon3: <PaidIcon style={{fontSize:"5rem", color:"white", marginBottom:"-.8rem"}}/>  ,
    icon4:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>,
    icon5: <i aria-hidden="true" class="elementkit-infobox-icon fab fa-rocketchat"></i>,
    icon6: <i aria-hidden="true" class="elementkit-infobox-icon fas fa-pencil-alt"></i>,
    icon7:  <i aria-hidden="true" class="elementkit-infobox-icon fas fa-users-cog"></i>,
    icon8:<SearchIcon style={{fontSize:"5rem", color:"white"}}/>,
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

        {/* why choose us card */}
     
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
export default AndroidAppDevelopment;
