import React from "react";
import { StackType } from "src/pages/ProjectDetail";
import styled from "styled-components";

const StackContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 1px solid ${({ theme }) => theme.color.bottomLine};
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

type UseStackProps = {
  useStack: StackType[];
};

const Stack: React.FC<UseStackProps> = ({ useStack }) => {
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
          {useStack.map((item, index) => (
            <tr key={index}>
              <Td>{item.category}</Td>
              <Td>
                {item.badges.map((badge, badgeIndex) => (
                  <img
                    key={badgeIndex}
                    src={`https://img.shields.io/badge/${badge.logo}-${badge.color}?style=for-the-badge&logo=${badge.logo}&logoColor=white`}
                    alt={badge.label}
                  />
                ))}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </StackContainer>
  );
};

export default Stack;
