import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import { BlockChain_Data } from "../components/DropDown_components.js/Card_Data";
import styled from "styled-components";
import { BlockChain_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import Contact_Page from "../Contact_Page";
import Industries from "../Industries";
import Vertical_Card from "../components/DropDown_components.js/Vertical_Card";
import { blockChain_dev_process } from "../components/DropDown_components.js/VerticalCard_Data";
import { Questions_blockchain } from "../components/DropDown_components.js/Questions";
import { Why_To_Choose_blockchain } from "../components/DropDown_components.js/Why_To_Choose_Data";

const BlockChainDevelopment = () => {
  const [state1, setState1] = useState(BlockChain_Data);
  const [paraHeading, setParaHeading] = useState(BlockChain_Para_Data);
  const [devProcess, setDevProcess] = useState(blockChain_dev_process);
  const data = {
    nameData: "Blockchain Development Company",
  };
  const para = {
    paraData:
      "Get the benefits of blockchain technology such as high security, decentralization and transparency with our trustworthy and future-ready blockchain solutions and services. As a prominent blockchain development company, we offers services like dApps, NFT marketplaces, crypto wallets, DEXs, smart contracts, and many more.",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/08/shubham-dhage-v0VjjYYFjOg-unsplash-1.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };
  // heading and para of why choose us //
  const heading = {
    headingData: "Why to Choose Ftechiz for Blockchain Development Services?",
  };
  const para1 = {
    paraData:
      "Blockchain technology has come out as the new way for various businesses to enter a new age of innovative technology where every asset is decentralized. While addressing every demand and needs of our clients, we create efficient Blockchain development services that help businesses to grow and stand out from the crowd.",
    paraData2:
      "From Smart Contract development to Crypto currencies, Crypto Wallet to Blockchain app development, our expertise lies everywhere. Right from auditing the development processes before they go live on the unaltered system and helping start-ups and organizations raise an ICO, we have done it all. We firmly believe that there is no better time to harness the power of Blockchain technology with real-world applications.",
    paraData3:
      "We, at Ftechiz have proven to be the best blockchain development company that serve you with a whole package – a team of Blockchain developers, designers, testers, and managers, who know this tech inside out and use prerequisite tools and technologies to develop a decentralized ecosystem for your brand. Smart Contract Development, blockchain consulting, Crypto Wallet Development, NFT Marketplace Development, custom blockchain development are the services that we deliver very often.",
    paraData4:
      "Ftechiz Solutions Pvt. Ltd. has established itself as a prominent blockchain development company that empowers businesses to even look out for this innovative technology.  Our highly skilled and experienced blockchain developers have excelled their skills at working with multiple platforms, including Ethereum and Solidity, and thus give you a variety of options and solutions while planning to integrate this technology to your business. We believe in providing quality results, no matter how complex your project is. We practice what we commit and we deliver what we promise.",
  };

  // contact page heading and para//
  const contactHeading = {
    contactHeadingData: "Have An Blockchain-Based App Requirement?",
  };
  const contactPara = {
    contactParaData:
      "Feel free to connect with us by filling out this form! Our team will be happy to guide you through our process.",
  };

    // development process para and heading//
    const dev_process_heading = "Our Blockchain App Development Process";
    const dev_process_para = "We convert your ideas into real world applications that are scalable, efficient and reliable. Our experienced blockchain developers follow a sound process to develop & test quickly and get product maturity at an early stage. We are also a prominent Blockchain development company that has helped many businesses to design high-quality blockchain applications. With the experience of developing 10+ blockchain-powered solutions, we have tailored our process to align with the constant evolution of blockchain technology."
    ;

  return (
    <>
      <Wrapper>
        <Main_Section myData={data} para={para} image={image} btn={btn} />
        <Para_Heading heading={heading} para1={para1} />
        <Why_To_Choose_blockchain/>
        {/* services para or heading through map method */}
        <div>
          {paraHeading.map((currentData) => {
            const { headingData, paraData, paraData2, paraData3 } = currentData;
            return (
              <>
                <Para_Heading_Component
                  headingData={headingData}
                  paraData={paraData}
                  paraData2={paraData2}
                  paraData3={paraData3}
                />
              </>
            );
          })}
        </div>

        {/* services cards */}
        <div className="container">
          <div className="grid grid-three-column">
            {state1.map((currentData) => {
              const { title1, para1 } = currentData;
              return (
                <>
                  <div className="service_card">
                    <div className="card_title">
                      <h3>{title1}</h3>
                      <p className="card_para">{para1}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* services cards */}

        {/* Industries */}
        <Industries />
        {/* Industries_We_Serve */}


      {/* development process we follow */}
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

      {/* development process we follow */}

      <Questions_blockchain/>

        {/* contact page */}
        <Contact_Page
          contactPara={contactPara}
          contactHeading={contactHeading}
        />
        {/* contact page */}
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 0rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
  .card_title {
    p {
      text-align: justify;
      font-weight: 300;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.color_white};
      margin-bottom: 2.6rem;
    }
  
    h3 {
      text-align:center;
      color: ${({ theme }) => theme.colors.color_white};
      margin-bottom: 2.6rem;
    }
  }

  .service_card {
    width: auto;
    height: auto;
    padding: 4rem;
    border: none;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.services_card_bg};
  }
`;
const Section = styled.section`
  padding: 12rem 0 4rem 0;
  .grid {
    display: grid;
    gap: 2rem;
    margin: 1rem 0rem;
  }
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
export default BlockChainDevelopment;
