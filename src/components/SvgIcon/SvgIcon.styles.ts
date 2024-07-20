import styled from "styled-components";
import { fontSize, color } from "styled-system";
import { ISvgIconProps } from "./SvgIcon";

export const StyledSvgIcon = styled.svg<ISvgIconProps>`
  display: inline-block;
  flex-shrink: 0;
  width: ${(props) => props.width || "1em"};
  height: ${(props) => props.height || "1em"};

  ${fontSize};

  transform: ${(props) => props.transform || "none"};
  user-select: none;
  ${color}

  fill: currentColor;
`;
