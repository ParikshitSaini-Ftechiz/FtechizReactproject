import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

const Icons = () => {
  return (
    <>
      <Wrapper>
        <div className="icons">
          <a className="icon" href="https://www.facebook.com/Ftechiz" target="_blank">
            <FacebookRoundedIcon style={{fontSize:"2rem"}}/>
          </a>
          <a className="icon" href="https://twitter.com/Ftechiz" target="_blank">
            <TwitterIcon style={{fontSize:"2rem"}}/>
          </a>
          <a className="icon" href="https://www.instagram.com/ftechiz_solutions/" target="_blank">
            <InstagramIcon style={{fontSize:"2rem"}}/>
          </a>
          <a className="icon" href="https://www.linkedin.com/company/ftechizsolutions" target="_blank" >
           <LinkedInIcon style={{fontSize:"2rem"}}/>
          </a>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  .icons {
    ${'' /* margin-top: 2.4rem;
    margin-bottom: 2.4rem; */}
    padding: 0.1rem;
    cursor: pointer;
    display: flex;
    gap: 2rem;

    .icon {
      color:${({theme}) => theme.colors.bg};
      font-size: ${({ theme }) => theme.colors.fontSize};
      cursor: pointer;
      &:hover{
        opacity:.6;
      }
    }
  }
`;
export default Icons;
