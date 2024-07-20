import styled, { css } from "styled-components/macro";
import { variant, color, background, space, fontWeight, border } from "styled-system";

import { IButtonOld } from "./ButtonOld";

export const StyledButtonLabel = styled.span`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: 100%;
  font-family: SBSansUI, Arial, sans-serif;
`;

export const StyledButton = styled.button<IButtonOld>`
  display: inline-block;
  width: ${(props) => props.fullWidth && "100%"};
  min-width: 100px;
  white-space: nowrap;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  appearance: button;
  user-select: none;
  ${color}
  ${background}
  ${space}
  ${border}
  ${fontWeight}

  ${variant({
    prop: "size",
    variants: {
      large: {
        fontSize: 6,
        padding: "12px 50px 13px",
      },
      medium: {
        fontSize: 4,
        padding: "11px 12px",
      },
      small: {
        fontSize: 2,
        padding: "10px 7px",
      },
    },
  })}

  ${(props) =>
    props.disabled &&
    css`
      border: none;
      cursor: not-allowed;
      opacity: 50%;
      pointer-events: none;
    `}

  ${(props) =>
    props.design === "secondary" &&
    css`
      color: ${(props) => props.theme.colors.black["1000"]};
      background-color: ${(props) => props.theme.colors.grey["1000"]};
      border-color: ${(props) => props.theme.colors.grey["1000"]};
    `}

  ${(props) =>
    props.design === "outline" &&
    css`
      color: ${(props) => props.theme.colors.green["500"]};
      background-color: ${(props) => props.theme.colors.white["1000"]};
      border-color: ${(props) => props.theme.colors.green["500"]};
    `}

  ${(props) =>
    props.design === "rectangle" &&
    css`
      font-weight: normal;
      color: ${(props) => props.theme.colors.white["1000"]};
      background-color: ${(props) => props.theme.colors.green["100"]};
      border-color: ${(props) => props.theme.colors.green["1000"]};
      border-radius: ${(props) => props.theme.radii[2]}px;
    `}

  &:active {
    position: relative;
    top: 1px;
  }

  :hover {
    border-color: transparent;
    border-color: ${(props) => (props.design === "outline" ? props.theme.colors.green["500"] : "transparent")};
    box-shadow: ${(props) => props.theme.shadows[2]};
  }
`;
