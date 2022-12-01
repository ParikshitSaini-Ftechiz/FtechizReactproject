import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./components/Button";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import AdjustIcon from "@mui/icons-material/Adjust";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DvrIcon from "@mui/icons-material/Dvr";
import ComputerIcon from "@mui/icons-material/Computer";
const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="footer_portion">
            <div className="container">
              <div className="grid grid-three-column">
                {/* contact info start */}
                <div className="contact_portion">
                  <h3>Office Location</h3>
                  <p>
                    3rd Floor Pitambar Plaza, Near Canara Bank Haridwar Road,
                    shastri nagar Dehradun, Uttrakhand 248001 INDIA
                  </p>
                  <div className="contact">
                    <h3>Contact Details</h3>
                    <p>
                      <CallIcon />{" "}
                      <NavLink to="tel:+918755231772">+918755231772</NavLink>
                    </p>
                    <p>
                      <EmailIcon /> <NavLink to="#"> sales@ftechiz.com</NavLink>
                    </p>
                    <p>
                      <LanguageSharpIcon />
                      <NavLink to="#">www.ftechiz.com</NavLink>
                    </p>
                  </div>
                  <div className="icons">
                    <NavLink className="icon" to="#">
                      <i class="fa-brands fa-square-google-plus"></i>
                    </NavLink>
                    <NavLink className="icon" to="#">
                      <i class="fa-brands fa-square-facebook"></i>
                    </NavLink>
                    <NavLink className="icon" to="#">
                      <i class="fa-brands fa-square-twitter"></i>
                    </NavLink>
                    <NavLink className="icon" to="#">
                      <i class="fa-brands fa-linkedin"></i>
                    </NavLink>
                  </div>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.078763705736!2d78.0581474152188!3d30.291819281792982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c315555515%3A0x25553e3289a692dd!2sFtechiz%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1669802354380!5m2!1sen!2sin"
                      width="400"
                      height="150"
                      style={{ border: 0, borderRadius: "1rem" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                {/* contact info end */}

                {/* services start */}

                <div className="services">
                  <h3>services</h3>
                  <ul>
                    <li>
                      <NavLink to="#">
                        <CurrencyBitcoinIcon /> blockchain development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <PhoneIphoneIcon />
                        mobile app development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa-brands fa-android"></i> android app
                        development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa-brands fa-app-store-ios"></i>ios app
                        development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">flutter app development</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa-brands fa-react"></i> react native app
                        development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa-solid fa-desktop"></i> website development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <DvrIcon /> website designing company
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <ComputerIcon /> web app development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i class="fa-solid fa-cloud"></i>cloud application
                        development
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/* services end */}

                {/* resources */}
                <div className="resources">
                  <h3>Hire Developers</h3>
                  <ul>
                    <li>
                      <NavLink to="#">
                        <AdjustIcon /> hire java developer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <AdjustIcon /> hire mobile app developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <AdjustIcon /> hire full stack developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <AdjustIcon /> hire blockchain developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <AdjustIcon /> hire remote developers
                      </NavLink>
                    </li>
                  </ul>
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <NavLink to="#">
                        <AdjustIcon /> career
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <AdjustIcon /> blog
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/* resources end*/}
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className="container footer_bottom">
            <p>
              ©️{new Date().getFullYear()} FTECHIZ | All Rights Reserved | 
              <NavLink to="#"> privacy policy</NavLink> | 
              <NavLink> disclaimer</NavLink> | 
              <NavLink> terms of use</NavLink>
            </p>
        </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  margin-top: 9rem;

  .footer_portion {
    padding: 1rem 0 7rem 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.color_white};

    .grid {
      display: grid;
      gap: 9rem;
      margin:8rem 0rem 0rem 0rem;
     }
    .container {
      text-transform: capitalize;
      line-height: 4.4rem;
    }
    .grid-three-column{
      grid-template-columns:1fr 1fr 1fr; 
      a{
        display: flex;
        align-items:center;
        justify-content:flex-start;
        gap:1rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
      }
      .contact {
        h3{
          margin-top: 2.4rem;
        }
       p{
        display: flex;
        align-items:center;
        line-height: 3.4rem;
        gap:1rem; 
      }
      }
          .icons {
            margin-top: 2.4rem;
            margin-bottom: 2.4rem;
            padding: 0.1rem;
            cursor: pointer;
            display: flex;
            gap:1rem;

            .icon {
              font-size:${({ theme }) => theme.colors.fontSize};
              cursor: pointer;
            }
          }
      }
    
   ${'' /* copyright */}
    .footer_bottom {
        text-align:center; 
        text-transform: capitalize;
      p {
        color: ${({ theme }) => theme.colors.bg};
        font-size: 1.5rem;
        margin: 4rem 0;
      }
    }

  ${'' /* responsive */}
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      max-width: 120rem;
      padding: 0 3.2rem;
    }
    .footer_portion {
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;

        .grid {
          display: grid;
          gap: 4rem;
          margin: 8rem 12rem 0rem 12rem;

          .grid-three-column {
            grid-template-columns: 1.4fr 1.2fr 1.3fr;
            .grid-two-rows .bottom {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-left: 4rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .footer_portion {
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        .grid {
          display: grid;
          gap: 1.6rem;
          margin: 8rem 12rem 0rem 12rem;

        .grid-three-column {
       
          .grid-two-rows .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 4rem;
          }
        }
      }
    }
  }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
.icons {
       display:flex;

       flex-direction:column;
            cursor: pointer;
            .icon {
              border: 1px solid white;
              margin-left: 0.6rem;
              border-radius: 50%;
              font-size: 1.7rem;
              cursor: pointer;
            }
          }
  }
`;
export default Footer;
