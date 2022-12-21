import React from 'react';
import styled from 'styled-components';
import Contact_Small from '../components/DropDown_components.js/Contact_Small';
import ContactForm_DropDown from '../components/DropDown_components.js/ContactForm_DropDown';
import Industries_We_Serve from '../components/DropDown_components.js/Industries_We_Serve';
import DropDown_MainSection from "../components/DropDown_MainSection";
import {Questions_hireblockchain} from "../components/DropDown_components.js/Questions";

const HireBlockchainDevelopers = () => {
    //main section 
    const data = {
      nameData : "Hire Blockchain Developers",
    };
    const para = {
      paraData : "Multiple Hiring Models (Part time, Full time, Hourly etc.)",
      paraData1 : "Signed NDA to ensure privacy",
      paraData2 : "Dedicated Blockchain Developers to understand your business requirement",
      paraData3 : "Experience of developing Blockchain Apps",
      paraData4 : "Hire Blockchain Developers and Dedicate Blockchain Consultant",
      paraData5 : "Agile and Lean Project Execution Process",
      paraData6 : "Cost Effective Solutions",
      paraData7 : " Daily/Weekly/Monthly Reporting",
   
    };
    const image = {
      imageData : "./images/blockchain.jpg",
    }
    const btn = {
      btnData : "Start One Week Risk Free Trial",
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
   <Questions_hireblockchain/>
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
export default HireBlockchainDevelopers;