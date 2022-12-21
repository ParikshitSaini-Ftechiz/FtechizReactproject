import React from "react";
import styled from "styled-components";
import Extra_div from "./Extra_div";
import Para_heading_Why_Hire_Remote_dev from "./Para_heading_Why_Hire_Remote_dev";

const Why_Hire_Remote_dev = () => {
  const heading = {
    headingData: "Why Hire Remote Developers from Ftechiz?",
  };
  const Why_Hire_Remote_dev_para1 = {
    paragraph: "Being a prominent Software Development Company, we provide top-class remote developers that are skilled and having years of industry experience in developing complex applications. You can Hire Remote Developers from us and they can help you to streamline all your business needs in the right way.  Our knowledgeable development team uses the latest technologies. We put our clients at the heart of what we do, so you get the best software development services around.",
  };

  const para1 = {
    paraData: "  Get One Week FREE Trial before you start hiring",
    paraData1: " Multiple Hiring Models (Part time, Full time, Hourly etc.)",
    paraData2: " Signed NDA to ensure privacy",
    paraData3: "  No Set up Cost is charged to you",
    paraData4: " Track your Remote Developer's work.",
    paraData5: " Your intellectual Property Information is Safe with us.",
    paraData6:
      " All of our in-house Staffs have signed Intellectual Property Contract.",
    paraData7: "   No Hidden Cost",
    paraData8: "   Get Replacement of a Developer with 15 Days prior Notice.",
    paraData9: "   Hire any number of Developers based on your Requirement.",
    paraData10:
      " Have Voice/ Video Call anytime with your time during our working hours.",
    paraData11:
      "  Experienced Developers to understand your business requirement",
  };
  return (
    <>
      <Wrapper>
        <div className="content">
          <Para_heading_Why_Hire_Remote_dev heading={heading} para1={para1} para={Why_Hire_Remote_dev_para1}/>
          <Extra_div/>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .content {
    text-align: center;
  }
`;
export default Why_Hire_Remote_dev;
