import React from "react";
import styled from "styled-components";
import CounterUp from "react-countup";

const Counter_Up = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          {/* counter cloumns */}
          <div className="grid grid-three-column">
            {/* counter first column */}
            <div className="content">
              <h1 className="main_heading">Towards Leading the Industry</h1>
              <h1>
                The credits goes to Ftechiz team for making this up to here.
              </h1>
            </div>
            {/* counter second column */}
            <div className="grid_two_rows">
              <div>
                <h1>
                  <CounterUp end={120} duration={2} />+
                </h1>
                <p>Project</p>
              </div>
              <div>
                <h1>
                  <CounterUp end={6} duration={3} />+
                </h1>
                <p>Year of Experience</p>
              </div>
            </div>
            {/* counter third column */}
            <div className="grid_two_rows">
              <div>
                <h1>
                  <CounterUp end={40} duration={2} />+
                </h1>
                <p>Clients</p>
              </div>
              <div>
                <h1>
                  <CounterUp end={24} duration={3} />+
                </h1>
                <p>Staff Members</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  background: ${({theme}) => theme.colors.color_grey};
  padding: 1rem 0;
  .container {
    padding: 1rem 0;
    background: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    margin: 8rem 12rem;
  }
  .grid {
    display: grid;
    gap: 2rem;
    margin: 3rem 3rem;
  }
  .grid-three-column {
    grid-template-columns: 1fr 0.5fr 0.5fr;
    .content {
      .main_heading {
        font-weight: 520;
        color: ${({ theme }) => theme.colors.helper};
        margin-bottom: 2rem;
      }
    }
    .grid_two_rows {
      display: flex;
      gap: 3rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h1,
      p {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default Counter_Up;
