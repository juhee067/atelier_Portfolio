import React from "react";
import styled from "styled-components";

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: absolute;
  width: 200px;
  height: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.color.menuSubBg};
  font-size: 1.7rem;
  border-right: 1px solid ${({ theme }) => theme.color.menuLine};
`;

const FileName = styled.div`
  color: ${({ theme }) => theme.color.mainWhite};
  font-style: italic;
  span {
    color: ${({ theme }) => theme.color.indexFile};
    font-weight: 900;
    margin-right: 10px;
  }
`;

const File = () => {
  return (
    <FileContainer>
      <FileName>
        <span>&lt; &gt;</span> index.html
      </FileName>
    </FileContainer>
  );
};

export default File;
