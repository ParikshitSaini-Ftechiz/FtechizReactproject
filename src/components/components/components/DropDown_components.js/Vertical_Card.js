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
        margin-top: 2rem;
        margin-left: 1rem;
        .icon {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
`;
export default Vertical_Card;
