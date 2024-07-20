import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)<{ color?: string }>`
  cursor: pointer;
  color: ${({ color }) => (color ? color : "#00cc66")};
`;
