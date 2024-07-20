import styled from "@emotion/styled/macro";

export const Line = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.3px;
  margin-bottom: 12px;
`;

export const Left = styled.div<{ width?: number }>`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  color: #737373;
  word-break: break-all;
`;

export const Right = styled.div<{ width?: number }>`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  word-break: break-word;
`;

export const Edit = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 16px;
  width: 16px;
  padding: 0 6px;
`;
