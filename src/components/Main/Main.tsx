import React, { FC } from "react";

import { GlobalStyleNotification } from "./Notification.styles";
import { ThemeProvider } from "./styled-components";
import IThemeInterface from "./theme";
import { GlobalStyle, Reset } from "./Main.styles";

interface IMainProps {
  theme: IThemeInterface;
  withReset?: boolean;
}

/**
 * ThemeProvider + Styles from CARS / Components
 */
export const Main: FC<IMainProps> = (props): JSX.Element => {
  const { children, theme, withReset = true } = props;

  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
      <GlobalStyleNotification />
      {withReset && <Reset />}
    </ThemeProvider>
  );
};
