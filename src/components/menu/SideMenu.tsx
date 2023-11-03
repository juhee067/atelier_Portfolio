import React from "react";
import styled from "styled-components";

import { menuData } from "src/data/data";
import Icon from "../Icon";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const SideMenuContainer = styled.div`
  position: relative;
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  border-right: 1px solid #585858;
  background-color: #333333;
`;

const MenuItem = styled.div`
  margin-bottom: 40px;
`;

const CloseButton = styled.div`
  position: absolute;
  right: -25px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  background-color: #333333;
  border: 1px solid #585858;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface OpenType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideMenu = ({ isOpen, setIsOpen }: OpenType) => {
  return (
    <SideMenuContainer>
      <CloseButton
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <Icon icon={AiOutlineArrowLeft} size={30} color="#585858" margin="0" />
        ) : (
          <Icon icon={AiOutlineArrowRight} size={30} color="#585858" margin="0" />
        )}
      </CloseButton>
      {menuData.map((item, i) => {
        return (
          <MenuItem key={i}>
            <Icon icon={item.icon} size={30} color={item.color} margin="0" />
          </MenuItem>
        );
      })}
    </SideMenuContainer>
  );
};

export default SideMenu;
