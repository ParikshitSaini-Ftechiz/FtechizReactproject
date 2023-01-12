import { NavLink } from "react-router-dom";
import ComputerIcon from "@mui/icons-material/Computer";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SmsIcon from '@mui/icons-material/Sms';
import WatchIcon from '@mui/icons-material/Watch';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditOffIcon from '@mui/icons-material/EditOff';
import DevicesIcon from '@mui/icons-material/Devices';
import WebIcon from '@mui/icons-material/Web';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';


// web development data
export const Card_Data = [
  // first
  {
    icon: <ComputerIcon style={{ fontSize: "5rem", marginBottom: "1.7rem" , marginLeft:"-2.3rem" }} />,
    title: "Front-end Development",
    para: "In Today’s digital world, the website is the face of any business. We design your web platform in such a way that it fell attractive and intuitive and gives your users a memorable experience. The combination of design and experience that we use make your website number one in its category",
  },
  // second
  {
    icon: <StorageIcon style={{ fontSize: "5rem", marginBottom: "1.7rem" , marginLeft:"-2.3rem" }}  />,
    title: "Back-end Development",
    para: "We understand the importance of creating a robust, efficient, scalable, and highly secure backend environment for a website. Our highly skilled backend developers make sure that your website is fast and is built for high concurrency, with the assurance of it being ready for multiple technology and features integration.",
  },
  // third
  {
    icon: <SettingsApplicationsIcon style={{ fontSize: "5rem", marginBottom: "1.7rem" , marginLeft:"-2.3rem" }}  />,
    title: "API Development	",
    para: "The user experience of your web platform is mainly depends on how well it is connected with other platforms and applications. We have expertise in creating APIs that establish this connection in real-time and more securely, ensuring that your users get a well-connect experience through your web platform.",
  },
  // fourth
  {
    icon: <i aria-hidden="true" class="fab fa-wordpress-simple" style={{ fontSize: "5rem", marginBottom: "1.7rem" , marginLeft:"-2.3rem" }} ></i>,
    title: "Wordpress Development	",
    para: "WordPress is the renowned and most used CMS platforms of the world. Our team of WordPress developers always make sure that your website is at par with the global standards and your expectations. We use all the latest plug-ins and themes to make your WordPress website dynamic, powerful and fast.",
  },
  // fifth
  {
    icon: <i aria-hidden="true" class="fab fa-html5" style={{ fontSize: "5rem", marginBottom: "1.7rem" , marginLeft:"-2.3rem" }} ></i>,
    title: "Custom Website Development	",
    para: "	Our highly skilled and experienced squad of web developers are specialized in creating custom website or applications that run seamlessly across devices with the promise of high scalability. We build websites that are known for their capabilities to blend the reach of web and native-like experience of mobile.",
  },
  // sixth
  {
    icon: <MiscellaneousServicesIcon style={{ fontSize: "5rem", marginBottom: "1.7rem" , marginLeft:"-2.3rem" }} />,
    title: "Maintenance & Management",
    para: "	We help your website or applications stay relevant by adopting and addressing changing business requirements. We also help business with pro-active safety and performance optimisation strategies.",
  },
];

export const Android_Data = [
  {
    icon1: <img src="./images/android.png" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/>,
    title1: "Android App Development",
    para1:
      "Ftechiz has acquired a reputation as one of the most reliable Android app development company on the market for more than 6 years. If you need an Android app for your mobile, watch, or TV we can help you create a strong solution that works on any device, regardless of the brand and your operating industry. We have successfully delivered android apps in various domains like on demand apps, Retail, Entertainment, ecommerce, Education, Blockchain, Healthcare, and many categories. 	y",
  },
  {
    icon1: <WatchIcon style={{ fontSize: "5rem", marginBottom: "1.5rem" }}/>,
    title1: "Android Wearable App Development",
    para1:
      "Nowadays businesses are looking for the wearable apps to keep them ahead as per future demands. Being the best mobile app development company we know the difference in user intent and expectation when they move from smart phones to wrist wear, and head-mounted displays.  Our team has developed various wearable app for devices like: Wearable fitness trackers, Wearable blood pressure monitors, Wearable smart health watches, Biosensors and more.",
  },
  {
    icon1: (
      <WidgetsIcon style={{ fontSize: "5rem", marginBottom: "1.5rem" }} />
    ),
    title1: "Custom Android App Development Services",
    para1:
      "	Our Android developers are very proficient to meet the different requirements of the organization. For a mix of industry domains in the least possible time, they have wonderfully created multiple custom Android applications as the business requirements with the latest cutting edge technologies. The art of designing mobile applications that excel and stand apart from others is well known to them.",
  },
  {
    icon1: (
      <SmsIcon style={{ fontSize: "5rem", marginBottom: "1.5rem" }} />
    ),
    title1: "Android App consultation	",
    para1:
      "Being a part of the mobile application development company, our expert consultant help you understand your business goals and suggests you cost-effective, secure, and user-friendly ways to get the job done on time. We provide consultation services for all stages of the development process like R&amp;D, Design &amp; Development, Testing, etc. We have experience with projects of any size; domain and we make sure that deadlines are met.",
  },
  {
    icon1: (
      <DesignServicesIcon style={{ fontSize: "5rem", marginBottom: "1.5rem" }} />
    ),
    title1: "Android UI/UX Design	",
    para1:
      "	With a well-versed knowledge of the user’s behaviour, our team of Android App designers know what exactly should be the user’s experience while using your app idea. For that, we sit with you and have an in-depth understanding of what your business demands and what is your main goal. Our team of professional designers holds expertise in creating memorable experiences across all Android devices and versions. ",
  },
  {
    icon1:  <i aria-hidden="true" class="fas fa-code-branch"  style={{fontSize:"4.4rem" , paddingLeft:"1rem"}}/>,
    title1: "Multi-Platform Deployment		",
    para1:
      "	We are an android app development company that specializes in flawless integration and deployment of any android app. Irrespective of which platform you want to be on, our expert android development team can help you get there.",
  },
];
export const BlockChain_Data = [
  // first
  {
    title1: "Smart Contract Development",
    para1: "Our development have all the expertise in developing Smart Contract for Private and Public Blockchain Networks.  With expertise in smart contract development tools and programming languages like Solidity, Remix, Go, JavaScript, our blockchain developers build secure and tamper proof smart contracts.",
  },
  // second
  {
    title1: "NFT Marketplace Development",
    para1: "We help businesses create their protocol-specific decentralized NFT marketplaces to organize NFT minting, buying and selling digital assets. We also build cross-chain marketplaces that facilitate the minting of multi-chain compatible NFTs. 	",
  },
  // third
  {
    title1: "Crypto wallet development	",
    para1: "Being one of the Best Blockchain development company, we also create crypto wallet Dapps for businesses that hold hundreds of crypto currencies, while carrying information related to your wallet balance and purchase history.",
  },
  // fourth
  {
    icon1:"",
    title1: "Blockchain Application Development		",
    para1: "With profound knowledge and expertise in developing and managing decentralized solutions, we build blockchain applications that are highly secure, transparent and globally accessible. We have already developed apps for Games, Exchanges, Wallets, Finance, real estate, and healthcare industries and for Education Start-ups.",
  },
  // fifth
  {
    title1: "Blockchain Technology Consultation	",
    para1: "Before starting any project our main approach to blockchain consulting begins with what, why, and how blockchain technology can benefit your business and bring trust and transparency to your product. A one-on-one consulting session will help you design an operational blockchain business network that is secure, transparent, efficient and ahead of the curve.	",
  },
  // sixth
  {
    title1: "Custom blockchain App solutions	",
    para1: "With years of experience in various blockchain platforms like Tezos, Hyperledger, Polkadot, Tron, Stellar, and EOS, we build scalable and efficient custom blockchain software solutions for organizations and start-ups. We also offer customized Blockchain solutions to integrate with your existing mobile apps, making them Dapps. ",
  },
];

export const Cloud_Data = [
  // first
  {
    icon1:  <img src="./images/cloud_service.png"  style={{ width: "6.5rem", color: "white", marginBottom: "2.8rem"  , marginLeft:"-.5rem"}}/> ,
    title1: "Cloud App development	",
    para1: "	Our team of highly skilled cloud developers builds solutions that are extremely scalable, highly secure, and efficiently designed to optimize the user experience and maximize your ROI.	",
  },
  // second
  {
    icon1:<img src="./images/cloud_consulting.png"  style={{ width: "6.5rem", color: "white", marginBottom: "2.8rem" , marginLeft:"-.5rem"}}/> ,
    title1: "	Cloud Consulting Services		",
    para1: "Before starting any project our main approach to cloud consulting begins with what, why, and how Cloud Services can benefit your business. Our Expert Cloud Consultants assist businesses for strategic cloud consultation related to planning, architecture, infrastructure, deployment, integration, optimization, delivery and support.",
  },
  // third
  {
    icon1:<img src="./images/cloud_migration.png"  style={{ width: "5.5rem", color: "white", marginBottom: "2.8rem" }}/> ,
    title1: "Cloud Migration		",
    para1: "	We provide cloud migration services for start-ups, mid and high level organizations. Our cloud development team closely works with you to migrate applications, workflows and the whole infrastructure to the cloud. We always make sure to limit the system downtime and ensure data integrity throughout the migration process. ",
  },
  // fourth
  {
    icon1:<img src="./images/cloud.png"  style={{ width: "5rem", color: "white", marginBottom: "2.8rem"}}/>,
    title1: "Cloud Integration		",
    para1: "	We accelerate your business productivity by Integrating processes, databases, and network resources to increase your entire IT infrastructure, promoting additional robustness, reliability, and cost-efficiency.",
  },
  // fifth
  {
    icon1:<img src="./images/images.png"  style={{ width: "5.8rem", color: "white", marginBottom: "2.8rem"}}/> ,
    title1: "Cloud Monitoring & Support		",
    para1: "	We also provide efficient cloud performance monitoring and optimization services to all our clients. Our cloud monitoring and support service gives you complete visibility into the health and availability of the entire cloud infrastructure of your business.",
  },
  // sixth
  {
    icon1:<img src="./images/cloud_backup.png"  style={{ width: "5.5rem", color: "white", marginBottom: "2.8rem"}}/> ,
    title1: "	Cloud Backup Services		",
    para1: "Our distributed, community-based, inter-cloud, and multi-cloud solutions will protect your entire system against disastrous breakdown or data losses. We have years of experience in building cloud storage solutions over popular platforms like AWS, Microsoft Azure, Google Cloud platform, and many more.",
  },
];

export const Flutter_Data = [
  // first
  {
    icon1:<img src="https://ftechiz.com/wp-content/uploads/2022/10/Flutter-App-Development.svg"  style={{ width: "3.8rem",}}/> ,
    para1: "Our Flutter app development services are devised to help your business to create a multi-platform existence. We help you right from finding the best product-market fit to seamlessly developing and deploying your application across a number of platforms. Our flutter app developer can help you design, develop, test, and deploy full-fledged Flutter apps.",
    title1: "Flutter App Development",
  },
  // second
  {
    icon1:<img src= "https://ftechiz.com/wp-content/uploads/2022/10/Flutter-App-Consulting-Services.svg"  style={{ width: "3.8rem",}}/> ,
    para1: "Flutter app development has come a long way since its origin both in terms of framework maturity and use cases. We are a flutter app development company that can help you authenticate your Flutter app idea and help you ensure that the framework is the best technical solution for your product idea.",
    title1: "Flutter Mobile App Consultation Services",
  },
  // third
  {
    icon1:<img src= "https://ftechiz.com/wp-content/uploads/2022/10/Flutter-App-UI-UX-Design.svg"   style={{ width: "3.8rem",}}/> ,
    para1: "Flutter Application is always known for their simple user-friendly interface and immersive design. Our expert Flutter UI/UX designers creates visually beautiful and easy to access applications with flexible user interface. As per your business model and domain we design the UI/UX of your app accordingly to give uniqueness to the social presence of your services.",
    title1: "Flutter App UI/UX Design ",
  },
  // fourth
  {
    icon1:<img src= "https://ftechiz.com/wp-content/uploads/2022/10/Flutter-App-Maintenance-Service.svg"  style={{ width: "3.8rem",}}/>,
    para1: "Looking for a company to maintain your Flutter app? We offer both Flutter app development and maintenance service to make your app up to date with the latest trends, improvise for user engagement, keep up with market demands, etc. Our squad refreshes your app content, analyzes your app performance, monitors user engagement, reviews user retention and takes other corrective actions, to maintain your app.",
    title1: "Flutter App Support & Maintenance",
  },

];

export const IOS_Data = [
 // first
 {
  icon1:<img src="./images/android.png" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
  title1: "iOS Mobile App Development",
  para1: "Ftechiz has known as one of the most trusted iOS App Development Company having expertise in developing universally targeted iOS apps for iPhone, iPad, and other Apple devices. We can extend the reach of your business by indulging in globally accepted mobile app development to further increase your revenue. If you want an iOS app for your mobile, tablet, watch or TV, we can help you develop a strong solution that works on any device, regardless of the business category.",
},
// second
{
  icon1:<img src="./images/ios.svg" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/>  ,
  title1: "	Apple Wearable App Development	",
  para1: "We create innovative, feature-rich, and user-friendly responsive apps for Apple Watch that brings the best wearable experiences for your customers. Whether it is an app for fitness, travel, weather or mobile payments, we can develop them all. Our skilled developers have developed various wearable app like: fitness trackers, blood pressure monitors, weather apps and more.",
},
// third
{
  icon1:<img src="./images/flutter.svg" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
  title1: "Custom iOS App Development Services	",
  para1: "	We develop advanced custom iOS apps with specialized features that match the needs and expectations of users. Our iOS developers are very experienced to meet the different requirements of the businesses. Team up with us to hire iOS developers who are capable of understanding your needs and contextual app solutions.	",
},
// fourth
{
  icon1:<i class="fa-brands fa-apple" style={{fontSize:"5rem", marginLeft:".5rem"}}></i>,
  title1: "iOS App consultation	",
  para1: "	Our expert iOS consultants helps you understand your business objectives and suggest you whether iOS is a good fit for them and which tech stack best suits their needs.  We provide consultation services for all stages of the development process like R&amp;D, Design &amp; Development, Testing, and Deployment. We have experience with projects of any size; domain and we make sure that the project will be completed on time.",
},
// fifth
{
  icon1:<i class="fa-solid fa-pen-ruler" style={{marginLeft:".3rem"}}></i> ,
  title1: "iOS UI/UX Design	",
  para1: "	iOS applications are always known for their tremendous and immersive designs. Our expert UI/UX designer has in depth knowledge about what exactly should be the user’s experience while using your app idea. Our pool of professional designers holds expertise in creating memorable experiences across all iOS devices and versions. ",
},
// sixth
{
  icon1:<i class="fa-solid fa-headset"  style={{marginLeft:".3rem"}}></i> ,
  title1: "Multi-Platform Deployment",
  para1: "We are a custom iOS app development company that specializes in a seamless integration and deployment of applications across multiple Apple devices. We make sure that your brand is on every device your users are active on. ",
},
];

export const Mobile_Data = [
    // first
    {
      icon1:<img src="./images/android.png" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
      title1: <NavLink to="/androidappdevelopment" target="_blank" style={{textDecoration:"underline" ,fontSize:"2.6rem",color:"white",}}>Android App Development</NavLink>,
      para1: "At Ftechiz, you get a separate team of experienced and qualified Android app developers who have successfully delivered android apps in food delivery, ecommerce, Education, Blockchain, Healthcare, and many categories. The team is focused and does constant R&D that keeps us a step ahead from our competitors in the market.",
    },
    // second
    {
      icon1:<img src="./images/ios.svg" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
      title1: <NavLink to="/iosappdevelopment" target="_blank"  style={{textDecoration:"underline" ,fontSize:"2.6rem",color:"white"}}>iOS App Development	</NavLink>,
      para1: "For companies whose target consumers are iPhone users, we have dedicated iOS development team to build platform-specific solutions as per their business requirements. We have build more than 50 apps of our clients in different categories like lifestyle, blockchain, healthcare, education, ecommerce and many more regardless of complexity and size. It's the right time to leverage our rich expertise in iOS app development to build an interactive, user-friedly, engaging, and consistent app for your business.",
    },
    // third
    {
      icon1:<img src="./images/flutter.svg" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
      title1: <NavLink to="/flutterappdevelopment" target="_blank"  style={{textDecoration:"underline" ,fontSize:"2.6rem",color:"white"}}>Flutter App Development</NavLink>,
      para1: "As one of the prominent mobile app Development Company, Ftechiz provides next-gen app development services using Google’s innovative framework, Flutter. Flutter is an open-source mobile app SDK, which supports both Android and iOS platforms powered by Google. We have a separate seasoned team of flutter app developers having years of experience in creating user-friendly and functionally rich apps. We have created several smooth performing app for iOS, Android, and web platforms using flutter’s single code base.",
    },
    // fourth
    {
      icon1:<img src="./images/react_native.svg" style={{width:"4.8rem" ,marginLeft:".4rem", marginBottom:"1.7rem"}}/>,
      title1: <NavLink to="/reactnativeappdevelopment" target="_blank"  style={{textDecoration:"underline" ,fontSize:"2.6rem",color:"white"}}>React Native App Development</NavLink>,
      para1: "With a pool of skilled professionals in react native framework, we deliver top quality mobile apps that are futuristic, secure and flexible. Our react native development team have successfully delivered many cross-platform apps in food delivery, ecommerce, Education, Blockchain, Healthcare, and many categories and they are passionate about building intuitive user interfaces, enabling data security and integrating key enterprise systems.",
    },
    // fifth
    {
      icon1:<i class="fa-solid fa-pen-ruler" style={{marginLeft:".3rem"}}></i> ,
      title1: "UI/UX Designing		",
      para1: "	Our mobile app designers always try to add something unique to give your product that added feel which in turns becomes the differentiating factor from others. We design, sketch and develop wireframes to create a unique user interface by envisioning a smooth end-user experience. You may check our portfolio for the different range of mobile applications designed & developed by the Ftechiz team.",
    },
    // sixth
    {
      icon1:<i class="fa-solid fa-headset"  style={{marginLeft:".3rem"}}></i> ,
      title1: "Mobile App consultation	",
      para1: "With 6 years in mobile app development, Ftechiz advises on various aspects like device compatibility, performs app audits, plans modernization and from-scratch development of new competitive apps. If you want to improve your existing mobile app or develop a completely new one, our mobile app consulting specialists offer a wide range of services: from feasibility study to code reuse analysis for your mobile and web apps.",
    },
];

export const ReactNative_Data = [
  // first
  {
    icon1: <PhonelinkSetupIcon  style={{marginLeft:"-.7rem", fontSize:"5.1rem",marginTop:"-.6rem"}}/>,
    title1: "React Native App Development",
    para1: "Our custom react native app development process is designed in a way that it takes care of your full-cycle development needs. Our squad works on everything from design, development to testing and deployment, ensuring that your product becomes a validation of high app performance in your sector.		",
  },
  // second
  {
    icon1:<LightbulbIcon style={{marginLeft:"-.7rem", fontSize:"5.1rem",marginTop:"-.6rem"}}/> ,
    title1: "	React Native App Consulting Services",
    para1: "React Native app development comes with various benefits for start-ups and Enterprises alike, but the framework doesn’t fit all development scenarios. Our react native mobile app consultants sits with you to understand your  vision and find the best way in which React Native can be associated with your business goals. ",
  },
  // third
  {
    icon1: <ContentCopyIcon  style={{marginLeft:"-.7rem", fontSize:"5rem",marginTop:"-.6rem"}}/>,
    title1: "React Native App Migration	",
    para1: "We help SMEs and enterprises to migrate their current iOS or Android application into a React Native application with our migration expertise. Our react native app development company deployment experts make sure that your users’ performance remains glitch-free as we take your app to other mobile platforms, web, and smart devices.",
  },
  // fourth
  {
    icon1:<ManageHistoryIcon style={{ fontSize: "5rem", marginLeft:"-.7rem", marginTop:"-.6rem"}} />,
    title1: "Support & Maintenance",
    para1: "Mobile App development using React Native technology is a continuous process. You have to upgrade your application according to every new OS version and design upgrades. Our React Native app developers understand the importance of constant upgrades and offer you extensive maintenance support till much after the deployment of your application.",
  },

];

export const WebApp_Data = [
  // first
  {
    icon1:<PhonelinkIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "Custom application development",
    para1: "If you want to build a custom web app from scratch, migrate your legacy backend, or streamline existing front-end functionality, we can achieve that in an efficient and cost-effective manner. We offer business intelligence solutions, application migration to cloud, collaboration and portal development, document management solutions, offer maintenance, support, and up-gradation.",
  },
  // second
  {
    icon1:<DescriptionIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "Portal development",
    para1: "We can also help create agile and advanced customer, business self-service, and other business web portals. We always make sure that all the boxes are checked for usability parameters such as easy navigation, quick response time, higher credibility, better reliability, and high-quality content for your B2B and B2C portals.",
  },
  // third
  {
    icon1:<AddShoppingCartIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/> ,
    title1: "E-Commerce development",
    para1: "We also provide end-to-end ecommerce solutions with payment gateway integration, plug-in high-end modules, round-the-clock maintenance, and appealing UX for a pleasant experience to the end users.",
  },
  // fourth
  {
    icon1: <BusinessIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "Enterprise Application Development",
    para1: "At Ftechiz, our highly skilled and experienced professionals implement the best practices realizing your vision to create a responsive enterprise web application designed to delight your customers and grow your business.",
  },
  // fifth
  {
    icon1:<i class="fa-brands fa-sass"></i> ,
    title1: "SaaS products",
    para1: "We help Start-ups and enterprises to build better software products and innovate at scale. With several SaaS development services, latest frameworks and components, we also reduce marketing time. Our experienced SaaS developers leverage the cutting-edge technologies to create sophisticated and scalable business solutions that empower your team, streamline operations, and elevate your customer experience.	",
  },
  // sixth
  {
    icon1:<SmsRoundedIcon style={{fontSize:"4.7rem"}}/> ,
    title1: "Web application support and maintenance",
    para1: "We partner up with you in maintaining web applications either developed by us or by third-party agencies. Whether it’s fixing bugs or adding new functionality, our experienced professionals can handle it all with ease.",
  },
];

export const WebsiteDesigning_Data = [
  // first
  {
    icon1:<DevicesIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "Responsive Website Designing",
    para1: "At Ftechiz, we use advanced tools and web technology so that our clients can stand out from the crowd. We use latest responsive web templates so that you get users from the laptops as well as from the mobile gadgets. Our responsive web design services will allow you to have a website with flexible grids, responsive pictures, and cross-platform compatibility that can easily get accessed from mobile phones, tablets & other gadgets.",
  },
  // second
  {
    icon1: <WebIcon  style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "Static Website Designing",
    para1: "We also create static websites for those who don’t want to change their content for a long time. These websites are very easy to load and attract more customers. If you want to design static website your website we are the right technology partner for your business.",
  },
  // third
  {
    icon1:<i class="fa-brands fa-aws" style={{ marginTop:"1.3rem"}}></i>,
    title1: "Dynamic Website Designing",
    para1: "At the present time, the whole world goes for dynamic websites and wants something new every time that can easily change according to the requirement of the client and show different content every time. We have years of industry experience and we are the right choice for Dynamic web designing services.",
  },
  // fourth
  {
    icon1:<AddShoppingCartIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "E-Commerce Website Designing",
    para1: "It’s a big thing for the online store owners because their business totally depends upon it. And at Ftechiz Solutions Pvt. Ltd. we provide safe and responsive e-commerce designing services to our valuable clients. No matter the size, we provide flawless websites that function efficiently for all sized e-commerce business.",
  },
  // fifth
  {
    icon1:<DesignServicesIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "Website Re-designing",
    para1: "If you are considering re-designing your website, we can take on your project for whatever purpose with nice appearance, user interface and as many features as you need.	",
  },
  // sixth
  {
    icon1:<EditOffIcon style={{marginLeft:"-.1rem", fontSize:"5rem",marginTop:"-1.3rem"}}/>,
    title1: "Custom Website Designing",
    para1: "With our custom website designing services you can get innovative and attractive websites for your business. Bring your website ideas into life by getting a custom website designed by Ftechiz. We execute your ideas and transform into reality with perfection to satisfy your needs and expectations.",
  },
];

// first drop down data
export const hireblockchain = [
  {
    icon1:<i class="fa-brands fa-rocketchat" style={{marginLeft:".3rem"}}></i> ,
    title1: " Blockchain Consulting   ",
    para1: "Our experienced Blockchain consultants will provide you practical advice on the implementing blockchain technology by detailed analysis of your organization’s profile, enabling them to build an optimal solution for your business domain. We help businesses to recognize how blockchain can be a perfect fit to their business model. We have years of hands-on experience in integrating blockchain technology and business processes across the entire blockchain journey."
  },
  {
    icon1:<i class="fa-solid fa-handshake"></i> ,
    title1: " Smart Contract Development    ",
    para1: "We do Smart Contract Development for Private and Public Blockchain Networks. Our team of experienced developers craft secure and accurate smart contracts which make the business ecosystem conflict-free. With years of experience in smart contract development tools and programming languages, our developers have the capabilities to build secure and tamper proof smart contracts. We also offer blockchain-agnostic smart contract development. This will help you to build a decentralized applications (dApp) that can interact with any type of blockchain."
  },
  {
    icon1:<PhoneIphoneIcon style={{fontSize:"5.3rem" , marginBottom:"1.7rem"}}/>  ,
    title1: " Blockchain Application Development    ",
    para1: "With expertise in various blockchain platforms like Hyperledger, Polkadot, Tron, Stellar, and many more, we build scalable, secure and scalable custom blockchain software solutions for enterprises and startups. With profound knowledge and experience in developing the decentralized solutions, we create business processes highly secure, transparent and can be accessed globally. We have already developed many applications for Games, Exchanges, Crypto Wallets, Education, healthcare and for many industries."
  },
  {
    icon1:<i class="fa-brands fa-rocketchat" style={{marginLeft:".3rem"}}></i>  ,
    title1: "Custom Blockchain Development Solutions    ",
    para1: "Ftechiz provides reliable, trusted, secure and sustainable solutions for your business growth. We offer custom Blockchain Development Solutions to implement with your existing business domain. Our blockchain development technology experts are always ready to help our clients in getting top-notch and secure solutions tailored to their specific needs. We also focus in architecting customized Blockchain software development solutions that aligns with your workflow.    "
  },
  {
    icon1:<i class="fa-solid fa-handshake"></i> ,
    title1: "NFT marketplace development  ",
    para1: "We help businesses with our blockchain development services that also include building decentralized NFT marketplaces to manage NFT trading, bidding and selling their digital assets. To solve the interoperability issues, we also launch cross-chain marketplaces that help with multi-chain NFTs in business. Ftechiz provides the best NFT Marketplace development services to help you launch your own NFT Marketplace like Opensea, Rarible, and others.    "
  },
  {
    icon1:<PhoneIphoneIcon style={{fontSize:"5.3rem" , marginBottom:"1.7rem"}}/>  ,
    title1: " Blockchain wallet development ",
    para1: "As part of our Blockchain wallet development services, our blockchain developers creates robust, secure and feature-rich web and mobile wallet applications that hold hundreds of cryptocurrencies, while carrying information related to your wallet balance and purchase history. We create blockchain wallets that support the exchange of various digital assets and currencies and are integrated with features of cross-chain token swapping.    "
  },
]
export const hirefullStack = [
  {
    icon1:<i class="fa-solid fa-laptop"></i> ,
    title1: " Front End Development  ",
    para1: "Our full stack front-end developers are experts in front-end languages such as HTML, CSS/SCSS, Bootstrap, JavaScript, Angular.js, Vue.js, Node.js and React.js. We are more focus on using trending technologies that not only make your solutions attractive, but also enhance its performance and make it more efficient and scalable. We make sure that your websites, applications and products have a user-friendly and response design."
  },
  {
    icon1:<i class="fa-solid fa-laptop-code"></i> ,
    title1: "  Back-end Development  ",
    para1: "Our full stack back-end developers are capable in handling applications that run on servers like applications and APIs. We build websites that function smoothly and fulfill all the expectations of your customers. Our back-end developers are experts in programming languages and frameworks like Ruby on Rails, Python, PHP, SQL, Java, Node.js, ASP.NET and Laravel."
  },
  {
    icon1:<i class="fa-sharp fa-solid fa-server"></i> ,
    title1: "API Integration  ",
    para1: "Our full stack developers have huge experience in providing custom web API and integration services. We offer entire web API development services that help in the smooth and seamless functioning of your business solutions. We also build custom APIs for you to be used by external applications without any hindrances. Our developers execute integrations for your payment systems, social networks, business tools, etc."
  },
  {
    icon1:<i class="fa-solid fa-database"  style={{fontSize:"4.8rem" ,marginLeft:".5rem", marginBottom:".7rem"}}></i> ,
    title1: " Database Configuration ",
    para1: "Our full stack developers collect and regulate all the crucial information from huge amounts of data. Our team of skilled developers has years of experience in XML/JSON. We have experience in almost all type of custom database development services and technologies. This has given us a great understanding of how to link a database with the back-end language of your choice."
  },  {
    icon1:<i class="fa-solid fa-medal" style={{fontSize:"4.8rem" ,marginLeft:".3rem", marginBottom:".5rem"}} ></i> ,
    title1: "Quality Analysis",
    para1: "Our certified full stack developers deliver the highest quality products and services to our valuable clients. We follow strict protocols to ensure on time delivery of the high-quality applications. We offer strong software testing and quality assurance services to ensure accuracy, safety, entirety and quality of software products. Our quality analysis methods are structured to fix any, arising issues efficiently and swiftly. This ensures that your application is free of any bugs, errors, or harmful elements.    "
  },
  {
    icon1:<i class="fa-solid fa-pen-ruler" style={{marginLeft:".3rem"}}></i> ,
    title1: "UI/UX Designing",
    para1: "Our full stack UI/UX designers have all the capabilities to craft all the possible web experiences with pixel-perfect UI/UX designs that you can imagine with. Our UI/UX Designers can build full stack web applications, SaaS solutions, web portals, etc.    "
  },

]
export const hirejava = [
  {
    icon1:<i class="fa-brands fa-rocketchat" style={{marginLeft:".3rem"}}></i> ,
    title1: " Custom Java App Development ",
    para1: "Our team of Java specialists consisting of UI/UX designers, java developers, and QA testers will create an exceptional Java application as per your requirements. They can create complex applications, ERPs, large-scale enterprise applications, and other software solutions that require high-end security. We create customizable applications that are best fit to your business needs. You can hire java developers from us to get your project done on time and within your budget.    "
  },
  {
    icon1:<i class="fa-solid fa-handshake"></i>,
    title1: " Java Web Application Development ",
    para1: "Ftechiz is a client-focused Java software development company. We have a noteworthy record of providing Java web application development services to start-ups as well as big enterprises in different verticals such as healthcare, real estate, e-commerce, education, entertainment, and many more. We use powerful Java frameworks like spring which provides the stability, flexibility, and security that make the language ideal for developing interactive and fascinating web applications."
  },
  {
    icon1:<PhoneIphoneIcon style={{fontSize:"5.3rem" , marginBottom:"1.7rem"}}/> ,
    title1: " Enterprise Portal Development ",
    para1: "Using the latest technology and best-in-class tools, a wide range of Enterprise Portal solutions are offered by our dedicated Java Developers and Content Managers. You can hire Java programmers from us who will add strength and industrial experience to your existing team.    "
  },
  {
    icon1:<i class="fa-brands fa-rocketchat"></i> ,
    title1: "  Java/J2EE Development ",
    para1: "Take advantage of world-class Java Development services in developing powerful and secure J2EE products for managing your day-to-day operations. We've used J2EE to create a number of multilayered web-based applications so far. Other than this we assist our clients in developing custom feature-rich applications for small and large businesses, allowing them to remain competitive in the market.    "
  }, 
   {
    icon1:<i class="fa-solid fa-handshake"></i> ,
    title1: " Java Migration ",
    para1: "Outsource Java development services and migration to professionals like us who have extensive experience migrating projects to a Java framework. With their knowledge of Java Development and Java Migration, you can hire Java developers from us who can assist you in making a smooth transition to Java.    "
  },
  {
    icon1:<PhoneIphoneIcon style={{fontSize:"5.3rem" , marginBottom:"1.7rem"}}/>,
    title1: " Maintenance & Support   ",
    para1: "Our expert Java developers will guide you through the entire process of setting up and running your Java app. We provide Cost-effective application maintenance, up-gradation of obsolete components, and optimization with best-in-class turnaround time. We are a leading Java software development company that provides full app support, application administration, and performance management."
  },

]
export const hiremobile = [
  {
    icon1:<img src="./images/android.png" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
    title1: <NavLink to="" style={{fontSize:"2.55rem", color:"white",textDecoration:"underline"}}>Android App Development</NavLink>  ,
    para1: "At Ftechiz, you get a separate team of dedicated skilled professionals for Android app development. The team is focused and does constant R&D with Android apps that keep us a step ahead of everyone in the industry. You may check our portfolio for the versatile range of android applications to hire android developers from our experienced team.    "
  },
  {
    icon1:<img src="./images/ios.svg" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
    title1: <NavLink to="" style={{fontSize:"2.55rem", color:"white",textDecoration:"underline"}}>iOS App Development</NavLink>  ,
    para1: "For businesses houses whose target consumers are on iPhones, we have dedicated ios App Developers for hire having years of industry experience in building platform-specific solutions. We provide custom solutions to start-ups and enterprises across the globe, making them go mobile. It's time to leverage our rich expertise in iOS app development to build an interactive, engaging, secure and consistent app for your industry, regardless of complexity and business domain.    "
  },
  {
    icon1:<img src="./images/flutter.svg" style={{width:"7.3rem" ,marginLeft:"0rem", marginBottom:"1.7rem"}}/> ,
    title1:"Flutter App Development    "  ,
    para1: "We have a talented team of flutter app developers experienced in creating beautiful, high quality and functionally rich apps. By using flutter’s single code base, we have developed smooth performing apps for iOS, Android, and web platforms. Our team of talented flutter app developers has experience in developing mobile apps across a variety of platforms. We use the trending technologies to create cross-platform that effectively works on multiple devices across different industries. It is also one of the best choices for integrating ML in apps.    "
  },
  {
    icon1:<img src="./images/react_native.svg" style={{width:"4.8rem" ,marginLeft:".8rem", marginBottom:"1.7rem"}}/> ,
    title1: " React-Native App Development   ",
    para1: "We have a team of passionate & experienced React Native App developers who got maestro in building beautiful cross-platform mobile applications for both Android & iOS. For most of our client’s mobile solutions, we use this versatile mobile app cross-platform development tool. You can hire react native app developers from our team to create robust applications for your business as per your desired technology.    "
  },  {
    icon1:<img src="./images/"/> ,
    title1: "  Ionic App Development    ",
    para1: "We at Ftechiz provide ionic app development services including up-to-date integrated technologies with highly functional solutions having some irresistible features which suit your business. We use the trending technology to create an outstanding Ionic mobile app for your business as a mobile app development company. We use the business-ready framework to create a dynamic, secure & complex app.    "
  },
  {
    icon1: <DashboardIcon style={{fontSize:"5.3rem" ,marginLeft:".8rem", marginBottom:"1.7rem"}}/>,
    title1: "Advance App Development    ",
    para1: "We have a team of professionals that transform your current app from good to great. We deliver everything from easy integration, Highly Secure, highly-optimized performance to user-friendly interfaces with responsive design. We use latest cutting-edge technologies, including UI/UX matching operating system standards and custom methodologies for a seamless experience you'll love!    "
  },

]



