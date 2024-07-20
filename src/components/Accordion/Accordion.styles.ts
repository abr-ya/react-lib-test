import styled from "styled-components/macro";

export const StyledAccordion = styled.div<{ width: string }>`
  width: ${({ width }) => width || "auto"};
`;

export const Header = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 15px;
  background-color: rgba(242, 243, 246, 0.6);
  color: #444;
  cursor: pointer;
  padding: 16px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.5s;
  border-radius: 12px 12px 0 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;

  & :hover {
    background-color: rgba(242, 243, 246, 0.8);
  }

  & > div:nth-child(1) {
    transform: ${({ isActive }) => (isActive ? "rotate(540deg)" : "none")};
    height: 20px;
    width: 20px;
    opacity: 0.5;
    transition: 0.8s;
  }

  & > div:nth-child(2) {
    width: calc(100% - 100px);
  }

  & > div:nth-child(3) {
    width: 50px;
    text-align: right;
  }
`;

export const Panel = styled.div<{ isActive: boolean }>`
  padding: ${({ isActive }) => (isActive ? "16px" : "0px")};
  background-color: rgba(242, 243, 246, 0.6);
  overflow: hidden;
  transition: all 0.6s;
  max-height: ${({ isActive }) => (isActive ? "300px" : 0)};
  margin-bottom: 2px;
  border-radius: 0 0 12px 12px;
  width: 100%;
`;
