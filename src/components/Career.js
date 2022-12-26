import React,{useState} from "react";
import Main_Section from "./components/components/Main_Section";
import Para_Heading from "./components/components/DropDown_components.js/Para_Heading";
import styled from "styled-components";
import Career_Contact from "./components/Career_component.js/Career_Contact";
import Accordion from "./components/Career_component.js/Accordian";
import {Accordian_Data} from "./components/Career_component.js/Accordian_Data";
const Career = () => {
  const [state , setState] = useState(Accordian_Data);
  const data = {
    nameData: "We Seek Innovators, Disrupters and Dreamers",
  };
  const para = {
    paraData:
      "Are You Smart, Creative and Driven? We're hiring... Explore a World of Big Opportunities",
  };
  const image = {
    imageData: "./images/career.jpg",
  };
  const btn = {
    btnData: "Let's talk",
  };

  const careerHeading = {
    headingData: "Why Work with Ftechiz?",
  };
  const careerPara = {
    paraData:
      "Ftechiz promotes a culture of impacting users’ lives with our innovations. We aspire to build a diverse and inclusive culture, where everyone feels respected and our people are empowered to expand their thinking, creativity and experience to realize their long-term career goals. We are looking for talents who share, understand our vision and ready to contribute to it. Our company provides an environment with open communication, togetherness and equal opportunities.",
    paraData2:
      "We’re passionate about constantly increasing and forever keen to find dynamic talent in our team. Join us to level up not just the company’s strength but your own as well.",
  };
  return (
    <>
      {/* {myName} */}
      <Main_Section myData={data} para={para} image={image} btn={btn} />
      <Para_Heading para1={careerPara} heading={careerHeading} />
      <Wrapper>
        <div className="container">
          <div className="main_div">
            <h1>Join the Ftechiz Team!</h1>
            <p>
              We always keep an eye out for talented people to join our team.
              Even if we don’t have any opening positions at the moment, just
              Drop Your Resume and Details.
            </p>
          </div>
        </div>
      </Wrapper>

      <Section>
        <div className="container">
          <div className="grid grid-two-column">
            <div>
              <h2>Just Drop Your Resume And Details</h2>
              <Career_Contact />
            </div>
            <div className="current_div">
              <h3>CURRENT OPENINGS</h3>
              {
                state.map((currentData) => {
                  const{id} = currentData;
                  return  <Accordion key={id} {...currentData}/>
                })
              }
             
          
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .main_div {
    background: ${({ theme }) => theme.colors.component_bg};
    padding: 7rem;
    border-radius: 2rem;
    h1 {
      color: ${({ theme }) => theme.colors.color_white};
      text-align: center;
      margin-bottom: 2rem;
    fon-size:2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.color_white};
    }
  }
`;
// contact page//

const Section = styled.section`
  .grid {
    display: grid;
    gap: 9rem;
    margin: 8rem 0rem ;
  }

  .grid-two-column {
    grid-template-columns: 1fr 1fr;
    
    h2 {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      fon-size:1.6rem;
      font-weight:500;
      margin-bottom: 1rem;
    }
  }
   
  h3 {
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    fon-size:1s.8rem;
    font-weight:600;
    margin-bottom: 6rem;
  }
`;

export default Career;
