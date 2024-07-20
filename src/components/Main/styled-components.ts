import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

import IThemeInterface from "./theme";

const {
  createGlobalStyle,
  css,
  default: styled,
  keyframes,
  ThemeProvider,
  // @ts-ignore
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
