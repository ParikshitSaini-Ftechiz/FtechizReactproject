import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Tool_Tech = ({ tool_tech_para, tool_tech_heading }) => {
  const [active, setActive] = useState("");
  const { paraData } = tool_tech_para;
  const { headingData } = tool_tech_heading;

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <>
      <Wrapper>
        <div className="container">
          <h1>{headingData}</h1>
          <p>{paraData}</p>
          <div className="grid grid-five-column">
            <div className="first_column">
            <NavLink to="" className="first_column_text">
                <div
                  key={1}
                  className={active === "1" ? "active " : undefined}
                  id={"1"}
                  onClick={handleClick}
                >
                  Frontend
                </div>
              </NavLink>
              <NavLink to="" className="first_column_text">
                <div
                  key={2}
                  className={active === "2" ? "active" : undefined}
                  id={"2"}
                  onClick={handleClick}
                >
                  Backend
                </div>
              </NavLink>
              <NavLink to="" className="first_column_text">
                <div
                  key={3}
                  className={active === "3" ? "active" : undefined}
                  id={"3"}
                  onClick={handleClick}
                >
                  Mobile App Development
                </div>
              </NavLink>
              <NavLink to="" className="first_column_text">
                <div
                  key={4}
                  className={active === "4" ? "active" : undefined}
                  id={"4"}
                  onClick={handleClick}
                >
                  Databases
                </div>
              </NavLink>
              <NavLink to="" className="first_column_text">
                <div
                  key={5}
                  className={active === "5" ? "active" : undefined}
                  id={"5"}
                  onClick={handleClick}
                >
                  Blockchain Technology
                </div>
              </NavLink>
              <NavLink to="" className="first_column_text">
                <div
                  key={6}
                  className={active === "6" ? "active" : undefined}
                  id={"6"}
                  onClick={handleClick}
                >
                  Cloud Services
                </div>
              </NavLink>
            </div>
            <div className="tool_icons_column">
              <img
                decoding="async"
                src="https://ftechiz.com/wp-content/uploads/2022/07/4373284_angular_logo_logos_icon.svg"
                class="attachment-large size-large wp-image-711"
                alt=""
                loading="lazy"
              />
              <img
                decoding="async"
                src="https://ftechiz.com/wp-content/uploads/2022/08/652581_code_command_develop_javascript_language_icon-1024x1024.png"
                class="attachment-large size-large wp-image-1257"
                alt=""
                loading="lazy"
                srcset="https://ftechiz.com/wp-content/uploads/2022/08/652581_code_command_develop_javascript_language_icon-1024x1024.png 1024w, https://ftechiz.com/wp-content/uploads/2022/08/652581_code_command_develop_javascript_language_icon-300x300.png 300w, https://ftechiz.com/wp-content/uploads/2022/08/652581_code_command_develop_javascript_language_icon-150x150.png 150w, https://ftechiz.com/wp-content/uploads/2022/08/652581_code_command_develop_javascript_language_icon-768x768.png 768w, https://ftechiz.com/wp-content/uploads/2022/08/652581_code_command_develop_javascript_language_icon-1536x1536.png 1536w, https://ftechiz.com/wp-content/uploads/2022/08/652581_code_command_develop_javascript_language_icon-2048x2048.png 2048w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              ></img>
            </div>
            <div className="tool_icons_column">
              <img
                decoding="async"
                src="https://ftechiz.com/wp-content/uploads/2022/07/7423888_react_react-native_icon.svg"
                class="attachment-large size-large wp-image-712"
                alt=""
                loading="lazy"
              />
              <img
                decoding="async"
                width="1024"
                height="1024"
                src="https://ftechiz.com/wp-content/uploads/2022/08/4375066_logo_sass_icon-1024x1024.png"
                class="attachment-large size-large wp-image-1258"
                alt=""
                loading="lazy"
                srcset="https://ftechiz.com/wp-content/uploads/2022/08/4375066_logo_sass_icon-1024x1024.png 1024w, https://ftechiz.com/wp-content/uploads/2022/08/4375066_logo_sass_icon-300x300.png 300w, https://ftechiz.com/wp-content/uploads/2022/08/4375066_logo_sass_icon-150x150.png 150w, https://ftechiz.com/wp-content/uploads/2022/08/4375066_logo_sass_icon-768x768.png 768w, https://ftechiz.com/wp-content/uploads/2022/08/4375066_logo_sass_icon-1536x1536.png 1536w, https://ftechiz.com/wp-content/uploads/2022/08/4375066_logo_sass_icon-2048x2048.png 2048w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              ></img>
            </div>
            <div className="tool_icons_column">
              <img
                decoding="async"
                src="https://ftechiz.com/wp-content/uploads/2022/07/317755_badge_html_html5_achievement_award_icon.png"
                class="attachment-large size-large wp-image-710"
                alt=""
                loading="lazy"
              />
              <img
                decoding="async"
                width="1024"
                height="1024"
                src="https://ftechiz.com/wp-content/uploads/2022/08/282806_jquery_logo_icon-1024x1024.png"
                class="attachment-large size-large wp-image-1259"
                alt=""
                loading="lazy"
                srcset="https://ftechiz.com/wp-content/uploads/2022/08/282806_jquery_logo_icon-1024x1024.png 1024w, https://ftechiz.com/wp-content/uploads/2022/08/282806_jquery_logo_icon-300x300.png 300w, https://ftechiz.com/wp-content/uploads/2022/08/282806_jquery_logo_icon-150x150.png 150w, https://ftechiz.com/wp-content/uploads/2022/08/282806_jquery_logo_icon-768x768.png 768w, https://ftechiz.com/wp-content/uploads/2022/08/282806_jquery_logo_icon-1536x1536.png 1536w, https://ftechiz.com/wp-content/uploads/2022/08/282806_jquery_logo_icon-2048x2048.png 2048w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              ></img>
            </div>
            <div className="tool_icons_column">
              <img
                decoding="async"
                src="https://ftechiz.com/wp-content/uploads/2022/07/317756_badge_css_css3_achievement_award_icon.png"
                class="attachment-large size-large wp-image-707"
                alt=""
                loading="lazy"
              />
              <img
                decoding="async"
                width="1024"
                height="1024"
                src="https://ftechiz.com/wp-content/uploads/2022/08/8546808_bootstrap_icon-1024x1024.png"
                class="attachment-large size-large wp-image-1260"
                alt=""
                loading="lazy"
                srcset="https://ftechiz.com/wp-content/uploads/2022/08/8546808_bootstrap_icon-1024x1024.png 1024w, https://ftechiz.com/wp-content/uploads/2022/08/8546808_bootstrap_icon-300x300.png 300w, https://ftechiz.com/wp-content/uploads/2022/08/8546808_bootstrap_icon-150x150.png 150w, https://ftechiz.com/wp-content/uploads/2022/08/8546808_bootstrap_icon-768x768.png 768w, https://ftechiz.com/wp-content/uploads/2022/08/8546808_bootstrap_icon-1536x1536.png 1536w, https://ftechiz.com/wp-content/uploads/2022/08/8546808_bootstrap_icon-2048x2048.png 2048w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              ></img>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
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
    grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    .first_column {
      width: 25rem;
      height: 30rem;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        margin: 1rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }

    .active {
      background: ${({ theme }) => theme.colors.component_bg};
      color: ${({ theme }) => theme.colors.color_white};
      padding: 1rem 0;
    }
    .tool_icons_column {
      display: flex;
      flex-direction: column;
      gap: 6rem;
    }
    img {
      width: 10rem;
      height: 10rem;
    }
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
    .first_column {
      width: 25rem;
      height: 30rem;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        padding: 1.4rem;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.heading};
        
      }
    }
    .tool_icons_column {
      display: flex;
      flex-direction: column;
      gap: 6rem;
    }
    img {
      width: 10rem;
      height: 10rem;
    }
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
    .first_column {
      width: 100%;
      height: 30rem;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        padding: 1.4rem;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.heading};
      }
    }
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem;
    }
    .tool_icons_column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    img {
      width: 20rem;
      height: 20rem;
    }
  }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
  
    .grid {
      gap: 3.2rem;
    }
    .grid-five-column {
      grid-template-columns: 1fr;
      display:flex;
      flex-direction: column;
      .first_column {
      width: 100%;
      height: 30rem;
      background: ${({ theme }) => theme.colors.color_grey};
      .first_column_text {
        padding: 1.4rem;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.heading};
        
      }
    }
    h1,
    p {
      color: ${({ theme }) => theme.colors.heading};
      text-align: center;
      margin: 0rem 2rem;
    }
    .tool_icons_column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    img {
      width: 20rem;
      height: 20rem;
    }
  }
  }
`;
export default Tool_Tech;
