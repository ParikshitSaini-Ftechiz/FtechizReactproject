import React from 'react';
import Main_Section from './components/Main_Section';

function About() {
  const data = {
    nameData : "Leading Software Development Company",
  };
  const para = {
    paraData : "Helping Start-ups, mid and High-Level Enterprises In Embracing Technologies That Bring The Highest Value.",
  };
  const image = {
    imageData : "./images/main_section_image.jpg",
  }
  const btn = {
    btnData : "Let's talk",
  }
  return (
    <>
      {/* {myName} */}
      <Main_Section myData={data} para={para} image={image} btn={btn}/>
    </>
  );
}

export default About;