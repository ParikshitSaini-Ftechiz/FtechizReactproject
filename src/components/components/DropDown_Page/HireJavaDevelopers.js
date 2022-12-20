import React from 'react'
import DropDown_MainSection from "../components/DropDown_MainSection";
import Industries_We_Serve from '../components/DropDown_components.js/Industries_We_Serve';

const HireJavaDevelopers = () => {
    //main section 
    const data = {
      nameData : "Hire Java Developers",
    };
    const para = {
      paraData : "Multiple Hiring Models (Part time, Full time, Hourly etc.)",
      paraData1 : "We are ready to sign the Non Disclosure Agreement (NDA) for security purpose.",
      paraData2 : "Developers with more than 5-years of practical Java experience on average",
      paraData3 : "Hire Java Developers  and Dedicated Consultants  for your project",
      paraData4 : "Agile and Lean Project Execution Process",
      paraData5:"On Time Project Delivery",
      paraData6 : "Cost Effective Solutions",
      paraData7 : "Daily/Weekly/Monthly Reporting",
   
    };
    const image = {
      imageData : "./images/java.jpg",
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

export default HireJavaDevelopers