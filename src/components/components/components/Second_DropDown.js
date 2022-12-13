import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
const Second_DropDown = () => {
  return (
  <>
    <Wrapper>
    <Dropdown>
      <Dropdown.Toggle className='dropdown'>
   Services
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/about">Mobile App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="#/action-2">Android App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="#/action-3">iOS App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="#/action-3">Flutter App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="#/action-3">React Native App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="#/action-3">Website Development</Dropdown.Item><hr/>
        <Dropdown.Item href="#/action-3">Website Designing</Dropdown.Item><hr/>
        <Dropdown.Item href="#/action-3">Web Application Development</Dropdown.Item>
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
}
`;
export default Second_DropDown