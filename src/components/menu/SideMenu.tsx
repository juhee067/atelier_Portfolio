import React from "react";
import styled from "styled-components";
import { BiHomeAlt } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineFolderOpen, AiOutlineMessage } from "react-icons/ai";

const SideMenuContainer = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  border-right: 2px solid #606060;
  background-color: #333333;
`;

const MenuItem = styled.div`
  color: #757575;
  text-decoration: none;
  margin-bottom: 40px;
  font-size: 3rem;
`;

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <MenuItem>
        <BiHomeAlt />
      </MenuItem>
      <MenuItem>
        <RiAccountCircleLine />
      </MenuItem>
      <MenuItem>
        <AiOutlineFolderOpen />
      </MenuItem>
      <MenuItem>
        <AiOutlineMessage />
      </MenuItem>
      <MenuItem>
        <FiAlertTriangle />
      </MenuItem>
    </SideMenuContainer>
  );
};

export default SideMenu;
