import React from "react";
import styled from "styled-components";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import PaymentsIcon from "@mui/icons-material/Payments";
import SchoolIcon from "@mui/icons-material/School";
import YouTubeIcon from "@mui/icons-material/YouTube";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Industries = () => {
  return (
    <>
      <Wrapper>
        <div className="container industries_portion">
          <div className="heading_portion grid">
            <h1 className="headings">Industries We Serve</h1>
            <p className="para">
              Be it a simple app or an enterprise-grade complex solution, we
              have expertise in industries we serve and we have developed the
              perfect applications for brands and companies across the globe.
            </p>
          </div>
          <div className="grid grid-four-column industries_icons">
            <div className="grid_two_column">
              <div className="grid_row">
                <HealthAndSafetyIcon className="icons" />
                <h3>Healthcare</h3>
              </div>
              <div className="grid_row">
                <StorefrontIcon className="icons" />
                  <h3>E_commerce</h3>
              </div>
            </div>

            <div className="grid_two_column">
              <div className="grid_row">
                <SchoolIcon className="icons" />
                <h3>Education</h3>
              </div>
              <div className="grid_row">
                <YouTubeIcon className="icons" />
                <h3>Entertainment</h3>
              </div>
            </div>

            <div className="grid_two_column">
              <div className="grid_row">
                <div>
                  <TravelExploreIcon className="icons" />
                </div>
                <h3>Travel_&_Tourism</h3>
              </div>
              <div class="grid_row">
                <div className="real_estate_icon"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                  <path d="M38.9 29.95v-15.9L28 6.45l-10.9 7.6V21h-2.2v-8L28 3.65 41.1 13v16.95ZM28 6.45Zm1.1 10.25h1.8v-1.8h-1.8Zm-4 0h1.8v-1.8h-1.8Zm4 4h1.8v-1.8h-1.8Zm-4 0h1.8v-1.8h-1.8Zm2.75 22.65L12.1 38.8v2.65H3.2v-17.2H17l12.45 4.65q1.15.4 1.95 1.35.8.95.8 2.95h6.3q1.8 0 2.9 1.325 1.1 1.325 1.1 3.625v.7ZM5.4 39.25h4.5v-12.8H5.4Zm22.25 1.8 12.55-3.8q-.15-.95-.575-1.4-.425-.45-1.125-.45H28.45q-1.35 0-2.65-.2-1.3-.2-2.25-.5l-4.2-1.25.9-2.2 3.65 1.3q1.2.4 2.35.525 1.15.125 3.6.125 0-.8-.25-1.4-.25-.6-.9-.85l-12-4.5h-4.6v10ZM9.9 32.85Zm19.95.35ZM9.9 32.85Zm2.2 0Z"></path>
                </svg></div>
                <h3>Real Estate</h3>
              </div>
            </div>

            <div className="grid_two_column">
              <div className="grid_row">
                <PaymentsIcon className="icons" />
                <h3>Finance</h3>
              </div>
              <div className="grid_row">
                <AssuredWorkloadIcon className="icons" />
                <h3>Government</h3>
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
  background: ${({ theme }) => theme.colors.color_white};
  .grid {
  display: grid;
  gap: 0rem;
  margin:4rem 6rem 0rem 6rem;
}
  .industries_portion {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .heading_portion {
      .headings,
      p {
        color: ${({ theme }) => theme.colors.heading};
        text-align: center;
      }
      p {
        font-size: 1.5rem;
      }
    }
    .industries_icons {
      font-size: 2rem;

      .icons {
        display: flex;
        margin: auto;
        font-size: 4.5rem;
      }
    }
    .grid-four-column {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      .grid_two_column {
        display: flex;
        flex-direction: column;
        gap: 6rem;
        .grid_row {
          border: none;
          padding: 1rem 6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap:2rem;

          h3 {
            color: ${({ theme }) => theme.colors.heading};
            display:inline;
          }
          &:hover{
            background: ${({ theme }) => theme.colors.hover_color};
            color: ${({ theme }) => theme.colors.color_white};
            border-radius:1rem;
            h3{
              color: ${({ theme }) => theme.colors.color_white};
            }
            .real_estate_icon path{
             fill: ${({ theme }) => theme.colors.color_white};
            }
          }
          }
        }
      }
    }
  
`;
export default Industries;
