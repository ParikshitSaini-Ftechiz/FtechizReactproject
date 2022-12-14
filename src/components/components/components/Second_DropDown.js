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
        <Dropdown.Item href="/mobileappdevelopment">Mobile App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/iosappdevelopment">iOS App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/flutterappdevelopment">Flutter App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/reactnativeappdevelopment">React Native App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/websitedevelopment">Website Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/androidappdevelopment">Android App Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/websitedesigning">Website Designing</Dropdown.Item><hr/>
        <Dropdown.Item href="/webapplicationdevelopment">Web Application Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/blockchaindevelopment">Block Chain Development</Dropdown.Item><hr/>
        <Dropdown.Item href="/cloudappdevelopment">Cloud App Development</Dropdown.Item>
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