import React, { useState } from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
import { BlockChain_Data } from "../components/DropDown_components.js/Card_Data";
import styled from "styled-components";
import { BlockChain_Para_Data } from "../components/DropDown_components.js/Para_Data";
import Para_Heading_Component from "../components/DropDown_components.js/Para_Heading_component";
import MessageIcon from "@mui/icons-material/Message";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SyncIcon from "@mui/icons-material/Sync";
import Contact_Page from "../Contact_Page";
import Industries_We_Serve from "../components/DropDown_components.js/Industries_We_Serve";

const BlockChainDevelopment = () => {
  const [state1, setState1] = useState(BlockChain_Data);
  const [paraHeading, setParaHeading] = useState(BlockChain_Para_Data);
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

  // icons //
  const icon = {
    icon1: (
      <SyncIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon2: (
      <ViewInArIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon3: (
      <MessageIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon4: (
      <i aria-hidden="true" class="elementkit-infobox-icon fas fa-users"></i>
    ),
    icon5: (
      <QuestionAnswerIcon
        style={{ fontSize: "5rem", color: "white", marginBottom: "-.8rem" }}
      />
    ),
    icon6: (
      <i
        aria-hidden="true"
        class="elementkit-infobox-icon fas fa-project-diagram"
      ></i>
    ),
    icon7: <i class="fa-solid fa-gears"></i>,
    icon8: <i class="fa-solid fa-hand-holding-dollar"></i>,
  };
  const title = {
    title1: "   360° Holistic Approach ",
    title2: "    Use of Latest Technologies   ",
    title3: "  Dynamic Engagement ",
    title4: "  Center of Excellence Team   ",
    title5: "  Client Association at Each Stage  ",
    title6: "   Agile Execution Approach  ",
    title7: "    Support &amp; Maintenance    ",
    title8: "   Cost-effective Solutions   ",
  };
  return (
    <>
      <Wrapper>
        <Main_Section myData={data} para={para} image={image} btn={btn} />
        <Para_Heading heading={heading} para1={para1} />
        <Why_To_Choose icon={icon} title={title} />
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
                  <div className="card">
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

        {/* Industries_We_Serve */}
        <Industries_We_Serve />
        {/* Industries_We_Serve */}

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

  .card {
    width: auto;
    height: auto;
    padding: 4rem;
    border: none;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.services_card_bg};
  }
`;
export default BlockChainDevelopment;
