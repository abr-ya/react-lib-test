import { createGlobalStyle } from "./styled-components";
import { reset } from "./Reset";
// import { TooltipStyle } from '../Tooltip/Tooltip.Styles';
// ${TooltipStyle} == 7я строка

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: SBSansUI, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Reset = createGlobalStyle`${reset}`;
