import React from "react";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink } from "react-router-dom";
import {Button} from "../components/components/Button";
const HireUs = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid_two_column">
            <div className="contact">
              <h1>Contact</h1>
              <p className="para">
                We are eagerly waiting to hear from you. Contact us to make
                something better.
              </p>
              <div className="grid_two_column contact_side">
               <div className="box">
               <PhoneIcon className="icon" />
               </div>
                <div className="grid-two-rows contact_bottom">
                  <h3>
                    Call Us
                  </h3>
                  <h3> <NavLink to="tel:+917534078989">+917534078989</NavLink></h3>
                </div>
                
              </div>
              <div className="grid_two_column contact_side">
                <div className="box">
                  <PhoneIcon className="icon" />
                </div>
                <div className="grid-two-rows contact_bottom">
                  <h3>
                  Let's talk about your project
                  </h3>
                  <h3>  <NavLink to="">sales@ftechiz.com</NavLink></h3>
                </div>
                
              </div>
              <div className="grid_two_column contact_side">
                <div className="box">
                  <PhoneIcon className="icon" />
                </div>
                <div className="grid-two-rows contact_bottom">
                  <h3>
                  Follow Me
                  </h3>
                  <h3>  <NavLink to="">+918755231772</NavLink></h3>
                </div>
              </div>
            </div>
            <div className="form">
              <h1>Let's Talk</h1>
              <div className="contact_form">
              <div className="contact-form">
         <form action="" method="POST" className="contact-inputs">
         <input type="text"
           name="user_name"
           placeholder="Enter your Name"
           autocomplete="off"
           required
          />
          <input type="email"
           name="user_email"
           placeholder="Enter your Email"
           autocomplete="off"
           required
          />
          <textarea name="Message"
          cols="30"
          rows="10"
           placeholder="Enter your Message"
           autocomplete="off"
           required
          />
          <NavLink to="/" >
           <Button className="login_btn">Submit</Button>
            </NavLink>
         </form>
         </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background: ${({ theme }) => theme.colors.component_bg};
  .grid {
    display: grid;
    gap: 15rem;
    margin: 8rem 0rem 0rem 0rem;
  }
  .contact_side {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    gap: 7rem;
    margin-bottom:4rem;
    .box{
      width:7rem;
      height:5rem;
      background: #5A39AB;
      border-radius:1rem;
      .icon {
        font-size: 3rem;
        margin:1rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
     }
      a{
        text-decoration-line: underline;

      }
    .contact_bottom {
      width:100%;
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.colors.color_white};
      padding: 2rem 8rem;
      border-radius:1rem; 
      h3{
        color: ${({ theme }) => theme.colors.heading};
      }
    }
  }
  .form{
    h1{
      margin-top:4rem;
    text-align:center;
    }
    .contact_form{
      width:40rem;
      height:40rem;
      background: ${({ theme }) => theme.colors.bg};
      margin:5rem 4rem 3rem 6rem;
      border-radius:2rem;
      .contact-form{
      width: 100%;
      height:100%;
      text-align:center;
      display: flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      margin:6rem 0 2rem 0;
     
      .contact-inputs{display: flex;
      gap:2rem;
      flex-direction:column;
      align-items:center;
      justify-content:center;}
      
      input ,
      textarea{
        width:38rem;
        height:4rem;
      }
      Button{
        padding:.8rem 1.3rem;
      }
    }
    }
  }
`;
export default HireUs;
