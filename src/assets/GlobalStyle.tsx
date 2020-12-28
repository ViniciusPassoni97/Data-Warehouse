import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
  body{
    height:546vh;
    width:70%;
    margin-left:auto;
    margin-right:auto;
  }
  @media(max-width: 900px) {
    body{
      width:97%;
      margin-left:auto;
      margin-right:auto;
    }
  }
  * {
    margin: 0;
    padding: 0;
    outline: none;
  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    border:none;
  }
  h1,p,span{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }
`;

export default GlobalStyle;