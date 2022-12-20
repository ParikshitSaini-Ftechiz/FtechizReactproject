import React from 'react'
import DropDown_MainSection from "../components/DropDown_MainSection";
import Industries_We_Serve from '../components/DropDown_components.js/Industries_We_Serve';

const HireMobileAppDevelopers = () => {
    //main section 
    const data = {
      nameData : "Hire Mobile App Developers",
    };
    const para = {
      paraData :"Multiple Hiring Models (Part time, Full time, Hourly etc.)",
      paraData1 : "Signed NDA to ensure privacy",
      paraData2 : "Experienced Developers to understand your business requirement",
      paraData3 : "Hands On Experience in Latest Technologies",
      paraData4 : "Hire Mobile App Developers and Dedicate Consultant for your project",
      paraData5 : "On Time Project Delivery",
      paraData6 : "Cost Effective Solutions",
      paraData7:"Daily/Weekly/Monthly Reportin",

    };
    const image = {
      imageData : "./images/mobile.jpg",
    }
    const btn = {
      btnData : "Request A Quote",
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
export default HireMobileAppDevelopers