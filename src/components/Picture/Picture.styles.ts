import { layout, LayoutProps } from "styled-system";
import styled from "styled-components";

export interface IPictureProps extends LayoutProps {}

export const StyledPicture = styled.img<IPictureProps>`
  ${layout}
`;

StyledPicture.defaultProps = {
  width: 1,
  height: "100%",
  loading: "eager",
};
