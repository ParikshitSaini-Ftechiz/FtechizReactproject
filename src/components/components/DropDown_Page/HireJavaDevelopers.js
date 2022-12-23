import React from "react";
import DropDown_MainSection from "../components/DropDown_MainSection";
import Industries_We_Serve from "../components/DropDown_components.js/Industries_We_Serve";
import ContactForm_DropDown from "../components/DropDown_components.js/ContactForm_DropDown";
import styled from "styled-components";
import Contact_Small from "../components/DropDown_components.js/Contact_Small";
import ContactPage_Small from "../components/DropDown_components.js/ContactPage_Small";
import { Questions_hirejava } from "../components/DropDown_components.js/Questions";
import { Development_Services_java } from "../components/DropDown_components.js/Development_Services";
import { Hire_Best_Team_java } from "../components/DropDown_components.js/Hire_Best_Team";
import Testimonial from "../Testimonial";
import {Why_Hire_developers_javaDev} from "../components/DropDown_components.js/Why_Hire_developers";
import  {Hire_SpringBoot_Dev_java}  from "../components/DropDown_components.js/Hire_SpringBoot_Dev";
import { Technology_Stack_mobile } from "../components/DropDown_components.js/Technology_Stack";


const HireJavaDevelopers = () => {
  //main section
  const data = {
    nameData: "Hire Java Developers",
  };
  const para = {
    paraData: "Multiple Hiring Models (Part time, Full time, Hourly etc.)",
    paraData1:
      "We are ready to sign the Non Disclosure Agreement (NDA) for security purpose.",
    paraData2:
      "Developers with more than 5-years of practical Java experience on average",
    paraData3:
      "Hire Java Developers  and Dedicated Consultants  for your project",
    paraData4: "Agile and Lean Project Execution Process",
    paraData5: "On Time Project Delivery",
    paraData6: "Cost Effective Solutions",
    paraData7: "Daily/Weekly/Monthly Reporting",
  };
  const image = {
    imageData: "./images/java.jpg",
  };
  const btn = {
    btnData: "Start One Week Risk Free Trial",
  };

  //industries we serve//
  const industries_para = {
    paraData_serve:
      "Throughout these years, we have delivered thousands of projects and gathered experience from almost every industry around the globe, and we are capable enough of providing to hire dedicated java developers on a large scale as per your need.",
  };
  return (
    <>
      <DropDown_MainSection myData={data} para={para} image={image} btn={btn} />
      <Industries_We_Serve industries_para={industries_para} />

      {/* Hire_SpringBoot_Dev */}
      <Hire_SpringBoot_Dev_java/>
      {/* Hire_SpringBoot_Dev */}

      <ContactForm_DropDown />

      {/* Hire_Best_Team  contact_page*/}
      <Hire_Best_Team_java />
      {/* Hire_Best_Team */}

      {/* Development_Services */}
      <Development_Services_java />
      {/* Development_Services */}

      {/* Technology_Stack_mobile */}
      <Technology_Stack_mobile/>
      {/* Technology_Stack_mobile */}

      {/* Why_Hire_developers */}
      <Why_Hire_developers_javaDev />
      {/* Why_Hire_developers */}

      {/* Take our Risk-Free 7 Days Free Trial */}
      <ContactPage_Small />
      {/* Take our Risk-Free 7 Days Free Trial */}

      {/* testimonials */}
      <Testimonial />
      {/* testimonials */}

      {/* frequently asked question */}
      <Questions_hirejava />
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
export default HireJavaDevelopers;
