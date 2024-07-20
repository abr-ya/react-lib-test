import styled from "styled-components/macro";

import ButtonOld from "components/ButtonOld/ButtonOld";

const ButtonBase = styled(ButtonOld)`
  height: 40px;
  padding: 9px 20px;
  border-radius: 8px;
`;

export const ButtonGreen = styled(ButtonBase)`
  color: #fff;
  background-color: #10bf6a;
`;

export const ButtonGrey = styled(ButtonBase)`
  color: #4c4c4c;
  background-color: #f2f3f6;
  border: none;
`;

export const ButtonGhost = styled(ButtonBase)`
  color: black;
  background-color: transparent;
  border: none;
`;
