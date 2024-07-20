import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: SBSansUI, Arial, sans-serif;
    background-color: #2bbb;
    line-height: 1.6;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  max-width: 768px;
  margin: auto;
  padding: 0 20px;

  img {
    max-width: 100%;
    max-height: 400px;
  }
`;
