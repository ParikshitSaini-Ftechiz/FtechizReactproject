import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Tool_Tech_Card from "./Tool_Tech_Card";
import Tool_Tech_Nav from "./Tool_Tech_Nav";
import {Tool_Tech_Data} from "./Tool_Tech_Data"

const categoryList = [
  ...new Set(Tool_Tech_Data.map((currentData) =>{
return currentData.category;
  }),
  ),
]
const Tool_Tech = ({ tool_tech_para, tool_tech_heading }) => {

  const [list, setList] = useState(Tool_Tech_Data);
  const [menulist, setMenulist] = useState(categoryList);

  const { paraData } = tool_tech_para;
  const { headingData } = tool_tech_heading;

  const filterData = (category) => {
const updatedList = Tool_Tech_Data.filter((currentData) =>{
  return currentData.category === category;
})
setList(updatedList);
  }
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>{headingData}</h1>
          <p>{paraData}</p>
          <div className="grid grid-five-column">
            <Tool_Tech_Nav filterData={filterData} menulist={menulist}/>
            <Tool_Tech_Card list={list}/>
            </div>
          </div>
     
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
    display: flex;
   align-items: center;
    justify-content: center;
  padding: 5rem 0;
  .grid {
    display: grid;
    gap: 5rem;
    margin: 6rem 0rem 0rem 3rem;
  }
  h1,
  p {
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    margin: 0rem 16rem;
  }
  .grid-five-column {

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 6rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
      display: flex;
      align-items: center;
      gap: 4rem;
     
      }
    
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 5rem;
     
      h1,
      p {
        color: ${({ theme }) => theme.colors.heading};
        text-align: center;
        margin: 0rem 2rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    .grid {
      gap: 3.2rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column;
     
      h1,
      p {
        color: ${({ theme }) => theme.colors.heading};
        text-align: center;
        margin: 0rem 2rem;
      }

    }
  }
`;
export default Tool_Tech;
