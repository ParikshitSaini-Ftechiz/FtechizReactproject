import React, { useState } from "react";
import Para_Heading from "./Para_Heading";
import {Why_Hire_developers_java} from "./Why_Hire_developers_Data"
import styled from "styled-components";
import Why_Hire_developers_card from "./Why_Hire_developers_card";

const Why_Hire_developers = () => {
  const [state, setState] = useState(Why_Hire_developers_java);
  const heading = {
    headingData: "Why Hire Java Developers From Ftechiz?",
  };
  const para1 = {
    paraData:
      " Being a prominent Java Software Development Company, we provide top-class java developers that are skilled and having years of industry experience in developing complex applications. You can Hire Java Developers from us and they can help you to streamline all your business needs in the right way.  Our knowledgeable development team uses the latest technologies. We put our clients at the heart of what we do, so you get the best java development services around.",
  };
  return (
    <>
      <Para_Heading heading={heading} para1={para1} />
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column ">
            {state.map((currentData) => {
              const { icon, title } = currentData;
              return (
                <>
                <Why_Hire_developers_card/>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 0rem 0rem 6rem 0;
  .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 3rem 0rem 3rem;
  }

  .grid-two-column {
    grid-template-columns: 1fr 1fr;
  }
 
  .grid-two-rows {
    grid-template-columns: 1fr 1fr;
  }

  .icons_content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 8rem;
    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: rows;
      gap: 2rem;

      .icons {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.heading};
        background: ${({ theme }) => theme.colors.helper};
        padding: 1rem;
        border-radius: 1rem;
      }
      h3 {
        color: ${({ theme }) => theme.colors.heading};
        font-weight: 600;
        font-size: 2.3rem;
      }
    }
  }
`;

export default Why_Hire_developers;
