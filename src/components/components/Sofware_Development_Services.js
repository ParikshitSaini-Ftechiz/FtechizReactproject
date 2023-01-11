import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { NavLink } from "react-router-dom";
import { Card_detail } from "./Card_detail";

const Sofware_Development_Services = () => {
  const [state, setState] = useState(Card_detail);
  console.log(state);
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="content">
            <h1 className="heading">Our Software Development Services</h1>
            <p>
              Our strength lies in the comprehensive suite of services we offer
              to our clients. From full-stack development to just consultancy-
              you demand, we deliver.
            </p>
          </div>
          <div className="grid grid-three-column">
            {state.map((currentData) => {
              const { icon, title, para ,btn_text} = currentData;
              return (
                <>
                  <div className="card">
                    <div className="card_icon">
                      <div className="icon"> {icon}</div>
                    </div>
                    <div className="card_title">
                      <h3>{title}</h3>
                      <p className="card_para">{para}</p>
                    </div>
                    <div className="card_btn">
                     
                        <Button className="btn"> {btn_text} </Button>
                      
                    </div>
                  </div>
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
  background: ${({theme}) => theme.colors.color_grey};
  padding: 9rem 0;
  text-align: center;
  .content {
    h1,
    p {
      text-align: center;
      margin: 2rem 16rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  .grid {
    display: grid;
    gap: 6rem;
    margin: 8rem 2rem;
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
        color: ${({ theme }) => theme.colors.color_white};
        margin-bottom: 2.6rem;
        text-align:center;
        margin-top:2rem;
      }
    }

  .card {
    width: auto;
    height: auto;
    padding: 2rem 2rem;
    border: none;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    background: ${({ theme }) => theme.colors.services_card_bg};
    .card_icon {
      width: 10rem;
      height: 10rem;
      background: ${({ theme }) => theme.colors.color_white};
      border-radius: 50%;
      display: inline-block;
      padding: 2rem 0rem;
      margin-bottom: 2rem;
      margin-top: 2rem;
      margin-left:10rem; 
      margin:auto;
      .icon {
        margin-left:2.3rem; 
        font-size: 5rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
    .card_btn {
      .btn {
        color: ${({ theme }) => theme.colors.color_white};
        background: ${({ theme }) => theme.colors.card_bg};
        border-radius: 1rem;
        padding: 1rem 2.5rem;
        margin-bottom:1rem;
      }
    }
  }

     
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      max-width: 130rem;
      padding: 0 3.2rem;
    }
    .grid {
    display: grid;
    gap: 2rem;
    margin: 8rem 1.5rem;
  }
    .grid-three-column {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .content {
    h1{
      text-align: center;
      margin: 1rem 6rem;
      color: ${({ theme }) => theme.colors.heading};
    }
    p {
      text-align: center;
      margin: 2rem 6rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 60%;
    }
    .grid-three-column {
      grid-template-columns: 1fr;
    }
    
     .content {
    h1,
    p {
      text-align: center;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  }

  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }
    .grid-three-column {
      grid-template-columns: 1fr;
    }
    
     .content {
    h1,
    p {
      text-align: center;
      margin: 2rem 2rem;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
 
  }
  
`;
export default Sofware_Development_Services;
