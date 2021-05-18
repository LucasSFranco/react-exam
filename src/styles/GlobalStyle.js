import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --header-normal: #000000;
    --text-primary: #333333;
    --text-secondary: #999999;
    --text-muted: #cccccc;
    --text-link: #3b8aff;
    --accent-primary: #000000;
    --accent-secondary: #e2e2e2;
    --button-color: #ffffff;
    --button-normal: #121212;
    --button-hover: #333333;
    --button-active: #666666;
  }

  html, body, #root {
    width: 100%;
    height: 100%;

    overflow: hidden;
  }

  *, *::before, *::after {
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;

    background: none;
    box-sizing: border-box;
    font-family: 'Newsreader', serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
