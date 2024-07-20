import styled from "styled-components/macro";

export const StyledDropdown = styled.div`
  width: 220px;

  & > div {
    margin-bottom: 0;
  }

  & .select__control {
    background: #f2f3f6;
    color: #4c4c4c;
    cursor: pointer;
  }

  & .select__menu {
    width: max-content;
  }

  & .select__menu-list {
    width: max-content;
  }

  & .select__option {
    cursor: pointer;
  }

  & .select__option--is-focused {
    background-color: #f2f3f6;
  }
`;
