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
import GoogleMap from "./components/components/GoogleMap";
import Icons from "./components/components/Icons";
const Footer = () => {
  return (
    <>
      <Wrapper>
        <footer>
          <div className="footer_portion">
            <div className="container">
              <div className="grid grid-three-column footer">
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
                      <CallIcon />
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
                      <NavLink to="/blockchaindevelopment">
                        <CurrencyBitcoinIcon /> blockchain development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/mobileappdevelopment">
                        <PhoneIphoneIcon />
                        mobile app development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/androidappdevelopment">
                        <i class="fa-brands fa-android"></i> android app
                        development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/iosappdevelopment">
                        <i class="fa-brands fa-app-store-ios"></i>ios app
                        development
                      </NavLink>
                    </li>
                    <li className="flutter">
                      <img src="https://ftechiz.com/wp-content/uploads/2020/09/4691465_flutter_icon.svg" />
                      <NavLink to="/flutterappdevelopment">
                        flutter app development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/reactnativeappdevelopment">
                        <i class="fa-brands fa-react"></i> react native app
                        development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/websitedevelopment">
                        <i class="fa-solid fa-desktop"></i> website development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/websitedesigning">
                        <DvrIcon /> website designing company
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/webapplicationdevelopment">
                        <ComputerIcon /> web app development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cloudappdevelopment">
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
                      <NavLink to="/hirejavadevelopers">
                        <AdjustIcon /> hire java developer
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/hiremobileappdevelopers">
                        <AdjustIcon /> hire mobile app developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/hirefullstackdevelopers">
                        <AdjustIcon /> hire full stack developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/hireblockchaindevelopers">
                        <AdjustIcon /> hire blockchain developers
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/hireremotedevelopers">
                        <AdjustIcon /> hire remote developers
                      </NavLink>
                    </li>
                  </ul>
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <NavLink to="/career">
                        <AdjustIcon /> career
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
              <NavLink to="/privacy"> privacy policy</NavLink> |
              <NavLink to="/disclaimer"> disclaimer</NavLink> |
              <NavLink to="/terms"> terms of use</NavLink>
            </p>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  margin-top: 9rem;
  h3 {
      font-size: 2.5rem;
    }
    a {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.4rem;
    }
  .footer_portion {
    padding: 1rem 0 7rem 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.color_white};

    .grid {
      display: grid;
      gap: 6rem;
      margin: 8rem 1rem 0rem 1rem;
    }
    .container {
      text-transform: capitalize;
      line-height: 4.5rem;
    }
    .grid-three-column {
      grid-template-columns: 1fr 1fr 1fr;
    }
   
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      color: ${({ theme }) => theme.colors.color_white};
    }

    .flutter {
      display: flex;
      gap: 0.6rem;
      img {
        width: 1.6rem;
      }
    }
    .contact {
      h3 {
        margin-top: 2.4rem;
      }
      p {
        display: flex;
        align-items: center;
        line-height: 1.4rem;
        gap: 1rem;
        margin: 2rem 0;
      }
    }
  }

  ${"" /* copyright */}
  .footer_bottom {
    text-align: center;
    text-transform: capitalize;
    p {
      color: ${({ theme }) => theme.colors.bg};
      font-size: 1.5rem;
      margin: 4rem 0;
    }
  }

  ${"" /* responsive */}
  @media (max-width: ${({ theme }) => theme.media.tab}) {
 
    .footer_portion {
      padding: 1rem 0 7rem 0;
      background: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.color_white};

      .grid {
        display: grid;
        gap: .2rem;
        margin: 8rem 0rem 0rem 0rem;
      }

      .grid-three-column {
        grid-template-columns: 0.2fr 1.3fr 1.4fr;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
      .flutter {
        display: flex;
        gap: 0.6rem;
    
        img {
          width: 1.6rem;
        }
      }
      .contact {
        h3 {
          margin-top: 2.4rem;
        }
        p {
          display: flex;
          align-items: center;
          line-height: 2.4rem;
          gap: 1rem;
          margin-bottom: 1rem;
          margin-top: 1.4rem;
        }
      }
    }

    ${"" /* copyright */}
    .footer_bottom {
      text-align: center;
      text-transform: capitalize;
      p {
        color: ${({ theme }) => theme.colors.bg};
        font-size: 1.5rem;
        margin: 4rem 0;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    h3 {
      font-size: 3rem;
    }
    a {
      font-size: 1.7rem;
    }
    .footer_portion {
      padding: 1rem 0 7rem 0;
      background: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.color_white};

      .grid {
        display: grid;
        gap:3rem;
        margin: 8rem 2rem;
      }
      .grid-three-column {
        grid-template-columns: 1fr;
      }
      .contact_portion {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        p {
          font-size: 1.5rem;
        }
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
      .services,
      .resources {
        h3 {
          text-align: center;
        }
      }
      .flutter {
        display: flex;
        gap: 0.6rem;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        img {
          width: 1.6rem;
        }
      }
      .contact {
        h3 {
          margin-top: 2.4rem;
        }
        p {
          display: flex;
          align-items: center;
          line-height: 2.4rem;
          gap: 1rem;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }
    .footer_portion {
      padding: 1rem 0 7rem 0;
      background: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.color_white};
      .grid {
        display: grid;
        gap: 3rem;
        margin: 8rem 2rem;
      }
      .grid-three-column {
        grid-template-columns: 1fr;
      }
      .contact_portion {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        p {
          font-size: 1.5rem;
        }
      }
      .services,
      .resources {
        h3 {
          text-align: center;
        }
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 1rem;
        color: ${({ theme }) => theme.colors.color_white};
      }

      .flutter {
        display: flex;
        gap: 0.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        img {
          width: 1.6rem;
        }
      }
      .contact {
        h3 {
          margin-top: 2.4rem;
        }
        p {
          display: flex;
          align-items: center;
          line-height: 2.4rem;
          gap: 1rem;
          margin-bottom: 1.7rem;
        }
      }
    }
  }
`;
export default Footer;
