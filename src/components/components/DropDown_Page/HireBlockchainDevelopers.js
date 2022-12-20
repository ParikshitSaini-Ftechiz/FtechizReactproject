import React from 'react';
import Industries_We_Serve from '../components/DropDown_components.js/Industries_We_Serve';
import DropDown_MainSection from "../components/DropDown_MainSection";

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
   </>
  )
}

export default HireBlockchainDevelopers;