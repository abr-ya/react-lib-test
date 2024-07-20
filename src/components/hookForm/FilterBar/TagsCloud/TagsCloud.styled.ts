import styled from "@emotion/styled/macro";

export const TagsCloudWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 750ms;
`;

export const Tag = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #262626;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  cursor: default;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
