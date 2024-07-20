import styled, { css } from "styled-components";
import { space, layout, typography, color, flexbox, border, position } from "styled-system";
import { IBoxProps } from "./Box";

export const StyledBox = styled.div<IBoxProps>`
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${flexbox}
  ${border}
  ${position}
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${(props) =>
    props.float &&
    css`
      float: ${props.float};
    `}
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;
