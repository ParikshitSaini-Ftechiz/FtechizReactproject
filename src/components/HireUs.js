import React from "react";
import styled from "styled-components";
import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink } from "react-router-dom";
import { Button } from "./components/components/Button";
import Icons from "./components/components/Icons";
const HireUs = () => {
  return (
    <>
      <Wrapper>
        <div className="container hire_page">
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
                  <h3>Call Us</h3>
                  <h3>
                    <NavLink className="link" to="tel:+917534078989">+917534078989</NavLink>
                  </h3>
                </div>
              </div>
              <div className="grid_two_column contact_side">
                <div className="box">
                  <PhoneIcon className="icon" />
                </div>
                <div className="grid-two-rows contact_bottom">
                  <h3>Let's talk about your project</h3>
                  <h3>
                    <NavLink className="link" to="">sales@ftechiz.com</NavLink>
                  </h3>
                </div>
              </div>
              <div className="grid_two_column contact_side">
                <div className="box">
                  <PhoneIcon className="icon" />
                </div>
                <div className="grid-two-rows contact_bottom">
                  <h3>Follow Me</h3>
                  <h3>
                    <NavLink to=""><Icons /></NavLink>
                  </h3>
                </div>
              </div>
            </div>
            {/* contact form  */}
            <div className="form">
              <h1>Let's Talk</h1>
              <div className="contact_form">
                <div className="contact-form">
                  <form action="" method="POST" className="contact-inputs">
                    <label for="fname">your name </label>
                    <br />
                    <input
                      type="text"
                      id="fname"
                      name="user_name"
                      autocomplete="off"
                      required
                    />
                    <br />
                    <label for="lname">your email</label>
                    <br />
                    <input
                      type="text"
                      id="lname"
                      name="user_email"
                      autocomplete="off"
                      required
                    />
                    <br />
                    <br />
                    <label for="lname">Subject</label>
                    <br />
                    <input
                      type="text"
                      id="lname"
                      name="subject"
                      autocomplete="off"
                      required
                    />
                    <br />
                    <br />
                    <NavLink to="/">
                      <Button
                        type="submit"
                        value="submit"
                        className="submit_btn"
                      >
                        Submit
                      </Button>
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

     {/* location */}
      <Section>
        <div className="container">
          <h1 className="heading">Our Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.078763705736!2d78.0581474152188!3d30.291819281792982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c315555515%3A0x25553e3289a692dd!2sFtechiz%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1669802354380!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
    </>
  );
};


const Section = styled.div`
  padding: 9rem 0;
  background: ${({ theme }) => theme.colors.color_white};

  .heading {
    color: ${({ theme }) => theme.colors.heading};
    text-align:center;
    margin-bottom:4rem; 
  }
`;
const Wrapper = styled.section`
  padding: 9rem 0;
  background: ${({ theme }) => theme.colors.component_bg};
  .grid {
    display: grid;
    gap: 9rem;
    margin: 8rem 0rem 0rem 0rem;
  }

  .contact_side {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 4rem;
    .box {
      width: 7rem;
      height: 5rem;
      background: ${({theme}) => theme.colors.btn_color};
      border-radius: 1rem;
      .icon {
        font-size: 3rem;
        margin: 1rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
    }
    a {
      text-decoration-line: underline;
    }
    .contact_bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.colors.color_white};
      padding: 2rem 8rem;
      border-radius: 1rem;
      h3 ,
      .link{
        color: ${({ theme }) => theme.colors.heading};
      }
     
    }
  }
  .form {
    h1 {
      margin-top: 4rem;
      text-align: center;
    }
    .contact_form {
      width: auto;
      height: auto;
      background: ${({ theme }) => theme.colors.bg};
      margin: 5rem 4rem 3rem 6rem;
      border-radius: 2rem;
      color: ${({ theme }) => theme.colors.color_white};
      .contact-form {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 6rem 0 2rem 0;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          font-size: 1.4rem;
          border-radius: 2rem;
          margin: 5rem 2rem;

          input {
            width: 38rem;
            height: 4rem;
          }
          Button {
            padding: 0.8rem 2rem;
            background: ${({ theme }) => theme.colors.btn_color};
            display: flex;
            margin: auto;
          }
        }
      }
    }
  }
`;

export default HireUs;
