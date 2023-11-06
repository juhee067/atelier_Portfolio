import TopMenu from "../topMenu/TopMenu";
import React, { useState } from "react";
import styled from "styled-components";
import SearchEngine from "./SearchEngine";
import SideMenu from "./SideMenu";

const MenuContainer = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: row;
  z-index: 999;
`;

const Menu = ({ scrollToHome, scrollToAbout, scrollToProject, scrollToContact }: any) => {
  let [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <MenuContainer>
      <SideMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToHome={scrollToHome}
        scrollToAbout={scrollToAbout}
        scrollToProject={scrollToProject}
        scrollToContact={scrollToContact}
      />
      <SearchEngine isOpen={isOpen} setIsOpen={setIsOpen} />
      <TopMenu />
    </MenuContainer>
  );
};
export default Menu;
