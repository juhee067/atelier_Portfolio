import React from "react";
import styled from "styled-components";

const StackContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.color.bottomLine}; /* 테두리 추가 */
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border: 1px solid ${({ theme }) => theme.color.bottomLine};
`;

const Td = styled.td`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.color.bottomLine};
  * {
    margin-right: 5px;
  }
`;

const Stack: React.FC = () => {
  return (
    <StackContainer>
      <Table>
        <thead>
          <tr>
            <Th>Subject</Th>
            <Th>Stack</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>View</Td>
            <Td>
              <img
                src="https://img.shields.io/badge/react-282C34?style=for-the-badge&logo=react&logoColor=#61DAFB"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"
                alt="React Router"
              />
            </Td>
          </tr>
          <tr>
            <Td>State Management</Td>
            <Td>
              <img
                src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
                alt="Redux"
              />
            </Td>
          </tr>
          <tr>
            <Td>CSS</Td>
            <Td>
              <img
                src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"
                alt="Styled Components"
              />
            </Td>
          </tr>
          <tr>
            <Td>Code Quality</Td>
            <Td>
              <img
                src="https://img.shields.io/badge/prettier-2C414F?style=for-the-badge&logo=prettier&logoColor=white"
                alt="Prettier"
              />
              <img
                src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"
                alt="ESLint"
              />
            </Td>
          </tr>
          <tr>
            <Td>Design Tool</Td>
            <Td>
              <img
                src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                alt="Figma"
              />
            </Td>
          </tr>
        </tbody>
      </Table>
    </StackContainer>
  );
};

export default Stack;
