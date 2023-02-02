import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #2F2E41;
  }

  body, input, button {
    font: 12px Open Sans, sans-serif;
  }

  #root {
    max-width: 734px;
    margin: 0 auto;
    padding: 0 25px 50px;
  }

  button {
    cursor: pointer;
    background: #009EDD;
    border-radius: 4px;
    color: #fff;
  }
`;
