import styled from "styled-components";

const Separator = styled.div`
  /* stylelint-disable-next-line string-quotes */
  background-color: ${(props) => props.theme.colors.grey["300"]};
  height: 1px;
  width: 100%;
  margin: 0;
`;

export default Separator;
