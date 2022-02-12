import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 0 20px;
  background: linear-gradient(to right, #D4D3DD, #EFEFBB);
}
`;
export default GlobalStyle;
