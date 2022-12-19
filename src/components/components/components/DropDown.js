import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
const DropDown = () => {
  return (
   <>
     <Wrapper>
     <Dropdown>
      <Dropdown.Toggle className='dropdown'>
      Hire Remote Developers
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item className='drop_down_hover' href="/hireremotedevelopers">Hire Remote Developers</Dropdown.Item><hr/>
        <Dropdown.Item className='drop_down_hover' href="/hirejavadevelopers">Hire Java Developers</Dropdown.Item><hr/>
        <Dropdown.Item className='drop_down_hover' href="/hiremobileappdevelopers">Hire Mobile App Developers</Dropdown.Item><hr/>
        <Dropdown.Item className='drop_down_hover' href="/hirefullstackdevelopers">Hire Full Stack Developers</Dropdown.Item><hr/>
        <Dropdown.Item className='drop_down_hover' href="/hireblockchaindevelopers">Hire Blockchain Developers</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     </Wrapper>
   </>
  )
}
const Wrapper = styled.div`
.dropdown{
    border:none;
    font-size: 1.6rem;
    font-weight: 500;
    background: transparent;
    .drop_down_hover{
       
       &:hover{
        background: ${({theme}) => theme.colors.helper};  

       }
    }
}
`;
export default DropDown
