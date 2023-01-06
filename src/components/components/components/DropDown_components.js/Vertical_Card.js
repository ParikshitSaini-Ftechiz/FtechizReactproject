import styled from "styled-components";

const Vertical_Card = ({
  icon,
  title,
  para,
}) => {
  return (
    <>
      <Wrapper>
        <div>
          <div class="grid">
            <div class="card">
              <div class=" grid-two-column">
                <div className="card_icon">
                  <div className="icon">{icon}</div>
                </div>
                <div class="card-body">
                  <h3 class="card-title">{title}</h3>
                  <p class="card-text" style={{ textAlign: "justify" }}>
                    {para}
                  </p>
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
  .grid {
    display: grid;
    gap: 2rem;
    margin: 1rem 0rem;
  }
  .card {
    width: 100%;
    display: flex;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.services_card_bg};
    border-radius: 1rem;
    p {
      font-size: 1.65rem;
      line-height: 1.4;
    }
    .grid-two-column {
      display: flex;
      flex-direction: row;
      grid-template-columns: 1fr 1fr;
      margin: 0.5rem 1rem;
      .card_icon {
        width: 10rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.helper};
        border-radius: 50%;
        display: flex;
        padding: 2.4rem 2.4rem 1rem 2.4rem;
        margin:auto;
        .icon {
          color: ${({ theme }) => theme.colors.bg};
     

        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
      font-size: 60%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid-two-column {
      grid-template-columns: 1fr;
    }
    .card {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.services_card_bg};
    padding:  2rem;
    border-radius: 1rem;
    align-items:center;
    justify-content:center;
    h3 {
      text-align:center;
      margin: 1rem 0rem;
    }
    .grid-two-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      grid-template-columns:  1fr;
      .card_icon {
        width: 10rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.helper};
        border-radius: 50%;
        display: flex;
        padding: 3rem 2.8rem;
        margin:auto;
        .icon {
          color: ${({ theme }) => theme.colors.bg};
        

        }
      }
    }
  }
  }
  @media (max-width: ${({ theme }) => theme.media.small_phone}) {
    html {
      font-size: 60%;
    }
    .grid {
      gap: 3.2rem;
    }
    .grid-two-column  {
      grid-template-columns: 1fr;
    }
    .card {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.services_card_bg};
    padding: 2rem;
    border-radius: 1rem;
    align-items:center;
    justify-content:center;
    h3 {
      text-align:center;
      margin: 2rem 0rem;
    }
    .grid-two-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      grid-template-columns:  1fr;
      .card_icon {
        width: 10rem;
        height: 10rem;
        background: ${({ theme }) => theme.colors.helper};
        border-radius: 50%;
        display: flex;
        padding: 3rem 2.8rem;
        margin:auto;
        .icon {
          color: ${({ theme }) => theme.colors.bg};


        }
      }

    }
  }
  }
`;
export default Vertical_Card;
