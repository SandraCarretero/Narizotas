import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: white ;
  }

  a{
    text-decoration: none;
    color: inherit;
    width: 100%;
    height: 100%;
    display: block;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  

  .active {
  border-bottom: 2px solid black; 
}
`;
