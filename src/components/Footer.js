import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import AdjustIcon from "@mui/icons-material/Adjust";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DvrIcon from "@mui/icons-material/Dvr";
import ComputerIcon from "@mui/icons-material/Computer";
import GoogleMap from "./components/GoogleMap";
import Icons from "../components/components/Icons";
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
                      <NavLink to="tel:+917534078989">+917534078989</NavLink>
                    </p>
                    <p>
                      <EmailIcon /> <NavLink to="#"> sales@ftechiz.com</NavLink>
                    </p>
                    <p>
                      <LanguageSharpIcon />
                      <NavLink to="#">www.ftechiz.com</NavLink>
                    </p>
                  </div>
                  {/* google icons */}
                  <div>
                    <Icons />
                  </div>

                  {/* google map */}
                  <div>
                   <GoogleMap />
                  </div>
                  {/* google map */}

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
        margin-bottom: 2rem;
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
