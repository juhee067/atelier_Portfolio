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
  background-color: #3a3a3a;
  font-size: 1.7rem;
  border-right: 1px solid #585858;
`;

const FileName = styled.div`
  color: #fff;
  font-style: italic;
  span {
    color: #ff7700;
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
