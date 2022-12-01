import styled from "styled-components";

export const Button = styled.button`
text-decoration:none;
list-style: none;
color:#fff;
text-transform: uppercase;
font-size: 1.4rem;
font-weight: 500;
border:none;
padding: 1rem;
cursor: pointer;
background: ${({theme}) =>theme.colors.helper};
box-shadow:${({theme}) => theme.colors.shadow};

`;