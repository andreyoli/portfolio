import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.text};
  }

  html {
    font-size: 16px;
    display: flex;
    justify-content: center;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    max-width: 1200px;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.normal};
    font-weight: 400;
    text-align: justify;
    line-height: calc(${(props) => props.theme.fontSize.normal} * 1,5);
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: 500;
    line-height: calc(${(props) => props.theme.fontSize.medium} * 1,5);
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: 500;
    line-height: calc(${(props) => props.theme.fontSize.large} * 1,5);
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobileL}){
    body{
      max-width: calc(${(props) => props.theme.breakpoints.mobileL} - 110px);
    }

    p{
      line-height: calc(${(props) => props.theme.fontSize.normal} * 1.8);
    }
    h2 {
      line-height: calc(${(props) => props.theme.fontSize.medium} * 1.8);
    }
    h3 {
      line-height: calc(${(props) => props.theme.fontSize.large} * 1.8);
    }
  }
`

export default GlobalStyles
