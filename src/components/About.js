import React from 'react';
import Our_Aim from './components/About_page_components/Our_Aim';
import Main_Section from './components/components/Main_Section';
import Who_We_Are from './components/About_page_components/Who_We_Are';
import Our_Proficiency from './components/About_page_components/Our_Proficiency';
import Right_Technology from './components/About_page_components/Right_Technology';
import Contact_Page from './components/Contact_Page';

function About() {
  //main section 
  const data = {
    nameData : "Leading Software Development Company",
  };
  const para = {
    paraData : "Helping Start-ups, mid and High-Level Enterprises In Embracing Technologies That Bring The Highest Value.",
  };
  const image = {
    imageData : "./images/aboutUs.jpg",
  }
  const btn = {
    btnData : "Let's talk",
  }

  //contact page//

  const contactHeading = {
    contactHeadingData: "Tell Us About Your Project",
  };
  const contactPara = {
    contactParaData:
      "Here are the reasons you can depend on Ftechiz Solutions to keep you and your business up and running:",
  };

  return (
    <>
      {/* {myName} */}
      <Main_Section myData={data} para={para} image={image} btn={btn}/>
      <Our_Aim/>
      <Who_We_Are/>
      <Our_Proficiency/>
      <Right_Technology/>
      <Contact_Page contactPara={contactPara} contactHeading={contactHeading} />
    </>
  );
}

export default About;