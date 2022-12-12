import React from 'react'
import styled from 'styled-components'

const PremiumClient = () => {
  return (
   <>
    <Wrapper>
<div className='container'>
    <div className='premium_client'></div>
</div>
    </Wrapper>
   </>
  )
}
const Wrapper = styled.section`
.premium_client{
    width:20rem;
    height:10rem;
    border:1px solid red;
    background: ${({theme}) => theme.colors.premium_bg}
}
`;
export default PremiumClient