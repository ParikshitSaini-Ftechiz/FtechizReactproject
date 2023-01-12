import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";
const Extra_div = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="grid grid-two-column extra_div">
            <div>
              <h3>Hire Remote Developers Now</h3>
            </div>
            <div>
              <NavLink to="/hire">
                <Button>Talk With Our Expert</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
.extra_div{
background: ${({theme}) =>theme.colors.component_bg};
display:flex;
align-items:center;
justify-content:space-between;
padding: 2.7rem;
border-radius:1rem;
h3{
    font-weight:600;
    margin-left:9rem;
}
Button{
    color:${({theme}) => theme.colors.heading};
    background: ${({theme}) => theme.colors.color_white};
}
}

.grid {
  display: grid;
  gap: 3rem;
  margin:0rem 0rem 5rem 0rem;
}
.grid-two-column{
    grid-template-columns:1fr .3fr;
}
`;
export default Extra_div;
