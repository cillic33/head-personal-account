export const Reset = `
  * {
    padding: 0;
    margin: 0;
    border: none;
    font-family: 'Inter', sans-serif;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
  
    &::-webkit-scrollbar-track {
      background-color: rgba(13, 31, 51, 0.05);
      border-radius: 12px;
    }
  
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: rgba(13, 31, 51, 0.2);
      cursor: pointer;
    }
  
    @-moz-document url-prefix() {
      scrollbar-width: thin;
      scrollbar-color:rgba(13, 31, 51, 0.2) rgba(13, 31, 51, 0.05);
    }
  }
  
  a, a:link, a:visited  {
    text-decoration: none;
  }
  
  a:hover  {
    text-decoration: none;
  }
  
  aside, nav, footer, header, section, main {
    display: block;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    font-size: inherit;
    font-weight: inherit;
  }
  
  ul, ul li {
    list-style: none;
  }
  
  img {
    vertical-align: top;
  }
  
  img, svg {
    max-width: 100%;
    height: auto;
  }
  
  address {
    font-style: normal;
  }
  
  input, textarea, button, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }
  
  input::-ms-clear {
    display: none;
  }
  
  button, input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background: transparent none;
    cursor: pointer;
  }
  
  input:focus, input:active,
  button:focus, button:active {
    outline: none;
  }
  
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  
  label {
    cursor: pointer;
  }
  
  legend {
    display: block;
  }
`
