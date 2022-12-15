import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import { Cloud_Data } from "../components/DropDown_components.js/Card_Data";
import Card from "../components/DropDown_components.js/Card";
import styled from "styled-components";
import { Cloud_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PaidIcon from '@mui/icons-material/Paid';

const CloudAppDevelopment = () => {
  const [state1, setState1] = useState(Cloud_Data);
  const [paraHeading, setParaHeading] = useState(Cloud_Para_Data);
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

  // icons //
  const icon = {
    icon1:"",
    icon2: <i aria-hidden="true" class="elementkit-infobox-icon fas fa-server"></i>,
    icon3:  <CloudIcon style={{fontSize:"5rem", color:"white", marginBottom:"-.8rem"}}/>,
    icon4:  <PaidIcon style={{fontSize:"5rem", color:"white", marginBottom:"-.8rem"}}/>,
    icon5: <CloudSyncIcon style={{fontSize:"5rem", color:"white", marginBottom:"-.8rem"}}/>,
    icon6:<SettingsSystemDaydreamIcon style={{fontSize:"5rem", color:"white", marginBottom:"-.8rem"}}/> ,
    icon7: "",
    icon8: "",
  };
 

  const title = {
    title1: " Agile Approach model",
    title2: " Multiple Service Models ",
    title3: " Strong knowledge of Cloud Services ",
    title4: "  Cost Effective Solutions ",
    title5: " A pool of expert Cloud Developers   ",
    title6: " Cloud Platforms of Your Choice ",
    title7: "   Secure Development ",
    title8: " Post Development Services ",
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
export default CloudAppDevelopment;
