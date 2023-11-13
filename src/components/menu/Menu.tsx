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

const Menu = ({
  scrollToHome,
  scrollToAbout,
  scrollToProject,
  scrollToContact,
  isOpen,
  setIsOpen,
  isAlert,
  setIsAlert,
  isIdModal,
  setIsIdModal,
}: any) => {
  return (
    <>
      <MenuContainer>
        <SideMenu
          isIdModal={isIdModal}
          isAlert={isAlert}
          setIsAlert={setIsAlert}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
        />
        <SearchEngine isOpen={isOpen} setIsOpen={setIsOpen} />
        <TopMenu isIdModal={isIdModal} setIsIdModal={setIsIdModal} />
      </MenuContainer>
    </>
  );
};
export default Menu;
