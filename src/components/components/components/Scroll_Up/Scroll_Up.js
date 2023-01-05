import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Scroll_Up = () => {
    const [visible , setVisible] = useState(false);

  const goToBtn = () =>{
    window.scrollTo({
      top:0,left:0,behavior:"smooth"
    })
  };

 const listenToScroll = () =>{
  let heightToHidden = 150;

  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  // console.log(windowScroll);

  if(windowScroll > heightToHidden){
setVisible(true);
  }else{
    setVisible(false);
  }

 };
  useEffect(() =>{
    window.addEventListener('scroll',listenToScroll);
    return() => window.removeEventListener('scroll',listenToScroll);
  },[])
  return (
   <>
    <Wrapper>
    {
  visible && (
    <div className="Scroll_Up">
    <button className="btn" onClick={goToBtn}><ArrowUpwardIcon style={{color:"white" , fontSize:"2.5rem" , fontWeight:"600"}}/></button>
</div>
  )
}
    
    </Wrapper>
   </>
  )
}
const Wrapper = styled.section`
.Scroll_Up{
    position: fixed;
    right:0;
    bottom:0;
    margin-bottom: 2rem;
    margin-right: 2.1rem;
    cursor: pointer;
    z-index: 1000;
    
    .btn{
        background: ${({ theme }) => theme.colors.helper};
        border-radius: 50%;
        padding: 1rem;
        box-shadow:${({ theme }) => theme.colors.shadow};   
    }
}
`;
export default Scroll_Up