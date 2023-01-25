import styled from "styled-components";

export const Button = styled.button`
text-decoration:none;
list-style: none;
color:#fff;
text-transform: uppercase;
font-size: 1.4rem;
font-weight: 600;
border:none;
padding: 1.1rem 1.6rem;
cursor: pointer;
background: ${({theme}) =>theme.colors.helper};
box-shadow:${({theme}) => theme.colors.shadow};
border-radius:.6rem;
`;