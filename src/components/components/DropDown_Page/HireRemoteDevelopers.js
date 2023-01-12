import React from "react";
import Main_Section_DropDown from "../components/DropDown_components.js/Main_Section_DropDown";
import Industries_We_Serve from "../components/DropDown_components.js/Industries_We_Serve";
import ContactForm_DropDown from "../components/DropDown_components.js/ContactForm_DropDown";
import styled from "styled-components";
import Contact_Small from "../components/DropDown_components.js/Contact_Small";
import { Questions_hireremote } from "../components/DropDown_components.js/Questions";
import Tool_Tech from "../Tool_Tech";
import Testimonial from "../Testimonial";
import ContactPage_Small from "../components/DropDown_components.js/ContactPage_Small";
import Top_Notch_technology from "../components/DropDown_components.js/Top_Notch_technology";
import Why_Hire_Remote_dev from "../components/DropDown_components.js/Why_Hire_Remote_dev";
import Hire_Top_Software_In_Steps from "../components/DropDown_components.js/Hire_Top_Software_In_Steps";
import Quality_Services from "../components/DropDown_components.js/Quality_Services";
import { Hire_SpringBoot_Dev_remote } from "../components/DropDown_components.js/Hire_SpringBoot_Dev";


const HireRemoteDevelopers = () => {
  const data = {
    nameData: "Hire Remote Developers",
  };
  const para = {
    paraData:
      "Hire Dedicated Software Developers or Offshore Development Team and get 360-degree development solutions. Easy and Simple process to hire skilled developers",
    para2: "Save Your Money & Time on Development/Maintenance/Support Cost",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/11/HireRemoteDevelopers.jpg",
  };
  const btn = {
    btnData: "REQUEST A QUOTE ",
  };
  //industries we serve//
  const industries_para = {
    paraData_serve:
      "Throughout these years, we have delivered thousands of projects and gathered experience from almost every industry around the globe, and we are capable enough of providing to hire dedicated java developers on a large scale as per your need.",
  };

  //tool_tech para and heading

  const tool_tech_heading = {
    headingData: "Our Technology Stack",
  };
  const tool_tech_para = {
    paraData:
      "We sculpt your potent idea using our innovative techniques & technologies and represent it in the real world.",
  };

 
  return (
    <>
      <Main_Section_DropDown
        myData={data}
        para={para}
        image={image}
        btn={btn}
      />
      {/* Top_Notch_technology */}
      <Top_Notch_technology />
      
      {/* Top_Notch_technology */}
      <Industries_We_Serve industries_para={industries_para} />

      <Hire_SpringBoot_Dev_remote/>

      <ContactForm_DropDown />


      {/* card vertical */}
      <Quality_Services/>

      {/* our technology */}
      <Tool_Tech
        tool_tech_heading={tool_tech_heading}
        tool_tech_para={tool_tech_para}
      />
      {/* our technology */}

      {/* Why Hire Remote Developers from Ftechiz? */}
      <Why_Hire_Remote_dev />
      {/* Why Hire Remote Developers from Ftechiz? */}

      {/* Hire_Top_Software_In_Steps */}
      <Hire_Top_Software_In_Steps/>
      {/* Hire_Top_Software_In_Steps */}

      {/* Take our Risk-Free 7 Days Free Trial */}
      <ContactPage_Small/>
      {/* Take our Risk-Free 7 Days Free Trial */}


      {/* testimonials */}
      <Testimonial />
      {/* testimonials */}

      {/* frequently asked question */}
      <Questions_hireremote />
      {/* frequently asked question */}

      <Wrapper>
        <div className="content">
          <h1 className="heading">Need a Consultation?</h1>
          <Contact_Small />
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  .content {
    h1 {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
    }
  }
`;
export default HireRemoteDevelopers;
