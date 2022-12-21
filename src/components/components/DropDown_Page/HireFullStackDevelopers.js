import React from 'react'
import DropDown_MainSection from "../components/DropDown_MainSection";
import Industries_We_Serve from '../components/DropDown_components.js/Industries_We_Serve';
import ContactForm_DropDown from '../components/DropDown_components.js/ContactForm_DropDown';
import styled from 'styled-components';
import Contact_Small from '../components/DropDown_components.js/Contact_Small';
import {Questions_hirefullstack} from "../components/DropDown_components.js/Questions";

const HireFullStackDevelopers = () => {
     //main section 
     const data = {
      nameData : "Hire Full Stack Developers",
    };
    const para = {
      paraData : "Multiple Hiring Models (Part time, Full time, Hourly etc.)",
      paraData1 : "Signed NDA to ensure privacy",
      paraData2 : "Experienced Developers to understand your business requirement",
      paraData3 : " Hands On Experience in Latest Technologies",
      paraData4 : "Hire Full Stack Developers and Dedicate Consultant for your project",
      paraData5 : "360-degree full stack development services",
      paraData6 : "Cost Effective Solutions",
      paraData7 : " Daily/Weekly/Monthly Reporting",
   
    };
    const image = {
      imageData : "./images/full_stack.jpg",
    }
    const btn = {
      btnData : "Let's talk",
    }
    //industries we serve//
    const industries_para={
      paraData_serve:"Throughout these years, we have delivered thousands of projects and gathered experience from almost every industry around the globe, and we are capable enough of providing to hire dedicated java developers on a large scale as per your need.",
    }
  return (
   <>
   <DropDown_MainSection myData={data} para={para} image={image} btn={btn}/>
   <Industries_We_Serve industries_para={industries_para}/>
   <ContactForm_DropDown/>
     {/* frequently asked question */}
     <Questions_hirefullstack/>
   {/* frequently asked question */}

   <Wrapper>
   <div className='content'>
    <h1 >Need a Consultation?</h1>
    <Contact_Small/>
   </div>
   </Wrapper>
   </>
  )
}
const Wrapper = styled.section`
padding: 5rem 0;
  .content {
    h1{
   
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
    
    }
  }
`;
export default HireFullStackDevelopers