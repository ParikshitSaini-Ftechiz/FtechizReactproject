import { android_dev_process, blockChain_dev_process, cloud_dev_process, flutter_dev_process, ios_dev_process, reactnative_dev_process, webApp_dev_process,webDesigning_dev_process, webDevelopment_dev_process  } from "./VerticalCard_Data";
import Vertical_Card from "./Vertical_Card";
import React, { useState } from "react";

import styled from "styled-components";

export const Vertical_Card_App_Dev_Process_Android = () => {
  const [devProcess, setDevProcess] = useState(android_dev_process);

  const dev_process_heading = "Our Development Process";
  const dev_process_para =
    "A reliable Android App Development company, Ftechiz supervises the entire development process to achieve client satisfaction. The method includes Ideation & Planning, Design & Development, Testing & QA and Deployment of the Application. This process is followed by the post-deployment services, which include; bug fixing, updates, and modifications as per demand of the client at the best price.";

  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export const Vertical_Card_App_Dev_Process_BlockChain = () => {
  const [devProcess, setDevProcess] = useState(blockChain_dev_process);

  const dev_process_heading = "Our Blockchain App Development Process";
    const dev_process_para = "We convert your ideas into real world applications that are scalable, efficient and reliable. Our experienced blockchain developers follow a sound process to develop & test quickly and get product maturity at an early stage. We are also a prominent Blockchain development company that has helped many businesses to design high-quality blockchain applications. With the experience of developing 10+ blockchain-powered solutions, we have tailored our process to align with the constant evolution of blockchain technology."
  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export const Vertical_Card_App_Dev_Process_Cloud = () => {
  const [devProcess, setDevProcess] = useState(cloud_dev_process);

   // development process para and heading//
   const dev_process_heading = "Development Process We Follow";
   const dev_process_para =
     "Ftechiz is one of the most trusted partners to help guide your cloud journey. We help you in quickly build, test, launch and deliver your cloud strategy, new services and products. We fit in the best of all the major cloud providers into a flawless experience for your customers, employees and other stakeholders. While modernizing your business we focus on reducing complexity, costs and operational challenges.";
 
  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export const Vertical_Card_App_Dev_Process_Flutter = () => {
  const [devProcess, setDevProcess] = useState(flutter_dev_process);

  const dev_process_heading = "Our Flutter App Development Process";
  const dev_process_para =
    "Our Flutter App development process carries innovation & user experience at the heart of it. Irrespective of which platform your app is being used on, our development process guarantees zero platform differences. We are also a leading flutter app development company that has helped businesses to design high-quality native application on cross-platform.";

  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export const Vertical_Card_App_Dev_Process_IOS = () => {
  const [devProcess, setDevProcess] = useState(ios_dev_process);

  const dev_process_heading = "Our Development Process";
  const dev_process_para =
    "From the stage of having an idea to its development and then deploying it in the Apple App Store, we take charge of complete iOS app development services process irrespective of the type of your app. The process includes Brainstorming and Strategy, Interactive UI/UX Design, App Development, Testing, Deployment, and App Store Optimization of the Application. Here’s the explanation of the entire iOS app development process.";

  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export const Vertical_Card_App_Dev_Process_ReactNative = () => {
  const [devProcess, setDevProcess] = useState(reactnative_dev_process);

  const dev_process_heading = "Our React Native App Development Process";
  const dev_process_para =
    "Our React Native App development process carries modernization & user satisfaction at the heart of it. Our development process guarantees zero platform differences, irrespective of which platform your app is being used on. We are also a prominent React Native app development company that has helped many businesses to design high-quality native application. Here’s the explanation of our entire React Native App development process";

  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export const Vertical_Card_App_Dev_Process_WebApp = () => {
  const [devProcess, setDevProcess] = useState(webApp_dev_process);

  const dev_process_heading = "Our Development Process";
  const dev_process_para =
    "Our development process is developed by our Industry Experts developers. The entire development process covers every aspect that ensures quality during and after the development. Our web app development process has enabled us to deliver great results and make start-ups the brands. We follow a custom web app development process to make sure that the end product meets your expectations with excellence.";

  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export const Vertical_Card_App_Dev_Process_WebDesigning = () => {
  const [devProcess, setDevProcess] = useState(webDesigning_dev_process);

  const dev_process_heading = "Our Design Methodology";
  const dev_process_para =
    "Our unique process of designing a website for your business makes us different from our competitors. At Ftechiz, you can unlock your true potential, leverage the best of technology, and create interactive websites based on a modern algorithm with our experts.  We follow a custom web designing process to make sure that the end product meets your expectations with perfection.";

  return (
    <>
      <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
    </>
  );
};
export const Vertical_Card_App_Dev_Process_WebDevelopment = () => {
    const [devProcess, setDevProcess] = useState(webDevelopment_dev_process);

    const dev_process_heading = "Our Development Process";
    const dev_process_para =
      "Our unique process of developing a website or application for your business makes us different from our competitors. At Ftechiz, we follow a custom web development process to make sure that the end product meets your expectations with perfection. We consider your website is more than just a platform for the users to check your products or services. It’s a way to gain the trust of your valuable customers.";
  

    return(
        <>
                  <Section>
        <div class="container">
          <div className="content">
            <h1>{dev_process_heading}</h1>
            <p>{dev_process_para}</p>
          </div>

          {devProcess.map((currentData) => {
            const { icon, title, para } = currentData;
            return (
              <>
                <div>
                  <Vertical_Card icon={icon} title={title} para={para} />
                </div>
              </>
            );
          })}
        </div>
      </Section>
        </>
    )
}

const Section = styled.section`
  padding: 12rem 0 5rem 0;
  .content {
    h1 {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
    }
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: justify;
      margin: 0 0 4rem 0;
    }
  }
`;
