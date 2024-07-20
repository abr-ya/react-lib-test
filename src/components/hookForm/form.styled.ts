import styled from "@emotion/styled/macro";

export const DateFieldsWrapper = styled.div`
  display: flex;
  gap: 10px;

  & > div {
    flex: 1 1 100%;
  }

  & > :last-child {
    label {
      visibility: hidden;
    }
  }

  & > div:first-of-type {
    label {
      position: relative;
      top: 0;
      left: -18px;
    }
  }
`;

export const DateFieldsText = styled.span`
  align-self: center;
  flex: 0 0 fit-content;
  font-size: 12px;
`;
