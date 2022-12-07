import React from 'react'
import styled from 'styled-components';
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const Why_Choose_Us = () => {
  return (
   <>
    <Wrapper>
    <div class="container">
    <div class="row">
        <div class="col-6 mt-3">
            <div class="card">
                <div class="card-horizontal">
                <div className="card_icon">
                      <CurrencyBitcoinIcon className="icon"/>
                    </div>
                    
             
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
    </Wrapper>
   </>
  )
}
const Wrapper = styled.section`
.card-horizontal {
    display: flex;
    flex: 1 1 auto;
      border:1px solid red;
    .card{
    }
.card_icon {
      width: 10rem;
      height: 10rem;
      background: ${({ theme }) => theme.colors.hover_color};
      border-radius: 50%;
      display: inline-block;
      padding: 2rem 0rem;
      margin: auto;
      margin-bottom: 2rem;
      .icon {
        font-size: 5rem;
        color: ${({ theme }) => theme.colors.color_white};
      }
    }
    .card-text{
      color:red;
    }
}
`;
export default Why_Choose_Us