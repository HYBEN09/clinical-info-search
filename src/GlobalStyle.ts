import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 a {
  color: inherit;
  text-decoration: none;
}

  ul,li {
    list-style: none;
  }

  button, input {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font: inherit;
  }

  input {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
