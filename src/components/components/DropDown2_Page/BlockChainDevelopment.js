import React from "react";
import Main_Section from "../components/Main_Section";
import Para_Heading from "../components/DropDown_components.js/Para_Heading";
import Why_To_Choose from "../components/DropDown_components.js/Why_To_Choose";
const BlockChainDevelopment = () => {
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


  // icons //
  const icon = {
    icon1: "",
    icon2: "",
    icon3: "",
    icon4: "",
    icon5: "",
    icon6: "",
    icon7: "",
    icon8: "",
  };
  const title = {
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    title8: "",
  };
  return (
    <>
      <Main_Section myData={data} para={para} image={image} btn={btn} />
      <Para_Heading heading={heading} para1={para1} />
      <Why_To_Choose icon={icon} title={title} />
    </>
  );
};
export default BlockChainDevelopment;
