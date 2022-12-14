import React from 'react'
import Why_To_Choose from '../components/DropDown_components.js/Why_To_Choose';
import Main_Section from "../components/Main_Section";
import Para_Heading from '../components/DropDown_components.js/Para_Heading';

const AndroidAppDevelopment = () => {

  // main section //
  const data = {
    nameData: "Android App Development Company",
  };
  const para = {
    paraData:
      "Within a short span, Ftechiz has emerged as one of the leading Android App Development Companies in the world delivering solid groundbreaking solutions & services to start-ups, mid and high-level organizations. Our highly skilled and talented Android App developers have years of experience in developing android apps that are custom, stable, fully functional, secure and futuristic for the entire range of Android devices.",
  };
  const image = {
    imageData:
      "https://ftechiz.com/wp-content/uploads/2022/11/HireRemoteDevelopers.jpg",
  };
  const btn = {
    btnData: "Lets talk",
  };

  // heading and para of why choose us //
  const heading = {
    headingData:"Why to Choose Ftechiz for Android App Development Services?",
  };
  const para1 = {
    paraData:"It has been over 6 years since we started developing Android Applications for our valuable clients. Over the years, we have designed and developed 50+ applications in different categories ranging from e-Commerce, On-Demand Delivery, Taxi & Travel, Healthcare, Education, and several other industries. As a leading Android App Development Company, Ftechiz have a squad of app developers to create well-researched, user-friendly and robust mobile apps for client businesses to boom.",
    paraData2:"You do not need to search now like Android App Development Company near me, as top Mobile App Development Company, we make sure to excel in the provision of our services like Android Consulting, Native/ Custom/ Hybrid Android App Development, and Android UI/UX Design. With high customer trust and satisfaction, Ftechiz have been able to transform various start-ups and organizations around the world. We help businesses to find solutions using latest technology, and to be more specific that is using Android apps that will help them to run their business smoothly and much more efficiently.",
    paraData3:"Our highly skilled android app developers know all the ins and outs of the Android Platform. Our developers have all the working experience of the major Android device, types, and brands. We assure our client of a reliable product that connects to the platform’s users.",
    
 };
// icons //
const icon={
icon1:"",
icon2:"",
icon3:"",
icon4:"",
icon5:"",
icon6:"",
icon7:"",
icon8:"",
};
const title={
title1:"",
title2:"",
title3:"",
title4:"",
title5:"",
title6:"",
title7:"",
title8:"",
};

  return (
    <>
      <Main_Section myData={data} para={para} image={image} btn={btn} />
      <Para_Heading heading={heading} para1={para1 }/>
      <Why_To_Choose icon={icon} title={title}/>
    </>
  );
};

export default AndroidAppDevelopment