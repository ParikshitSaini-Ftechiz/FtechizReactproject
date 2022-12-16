import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Outfit', sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden; 
}


h1,
h2,
h3,
h4 {
  font-family: 'Outfit', sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.color_white};
  font-size: 4.6rem;
  font-weight: 700;
}
.heading{
  color: ${({ theme }) => theme.colors.headings};
}
 h2 {
   color: ${({ theme }) => theme.colors.color_white};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;

  }

h3 {
  font-size: 2.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.color_white};
}

p{
  color: ${({ theme }) => theme.colors.color_white};
  font-size: 1.65rem;
  line-height: 1.6;
} 
 .para {
    margin-top: 2rem;
    margin-bottom: 5rem;
    word-spacing: 0rem;
    font-size: 1.7rem;
  }
a {
  text-decoration: none;
  font-size: 1.5rem;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}


.grid {
  display: grid;
  gap: 9rem;
  margin:8rem 16rem 0rem 16rem;
}

.grid_two_column {
  grid-template-columns: 1fr 1fr;

}
.grid-two-rows{
  grid-template-rows: 1fr 1fr;
}
.grid-three-column {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-four-column{
   grid-template-columns: 1.2fr 1.2fr .8fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}


 @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 60%;
    } 

 }

 .grid{
  gap: 3.2rem;
 }
.grid-two-column , .grid-three-column, .grid-four-column{
    grid-template-columns: 1fr;
 } 
 
    

`;
