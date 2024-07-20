import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";

const fullWidthCss = css`
  height: 100%;
  width: 100%;
`;

export const WrapperStyled = styled.span<{ color?: string; fullWidth?: boolean }>(
  ({ color, fullWidth }) => css`
    display: inline-block;
    text-decoration: none;
    vertical-align: middle;
    ${fullWidth && fullWidthCss};

    svg {
      display: block;
      ${fullWidth && fullWidthCss};

      fill: ${color ? color : "#ccc"};
    }
  `,
);
