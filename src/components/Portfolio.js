import React from 'react'
import Main_Section from './components/components/Main_Section'
import Portfolio_Page from './components/Portfolio_components/Portfolio_Page';

const Portfolio = () => {
  const data = {
    nameData : "Portfolio",
  };
  const para = {
    paraData : "We worked hard to make it up to here. Displaying some of the best of our work below. ",
  };
  const image = {
    imageData : "./images/portfolio.jpg",
  }
  const btn = {
    btnData : "Let's talk",
  }
  return (
    <>
      {/* {myName} */}
      <Main_Section myData={data} para={para} image={image} btn={btn}/>
      <Portfolio_Page/>
    </>
  );
}

export default Portfolio