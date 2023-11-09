import Menu from "./components/menu/Menu";
import React, { useRef, useState } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import View from "./components/view/View";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import { Route, Routes } from "react-router-dom";
import { ProjectDetail } from "./pages/ProjectDetail";
import Alert from "./components/idModal/Alert";
import IdModal from "./components/idModal/IdModal";

const ContentBox = styled.div`
  display: flex;
`;

function App() {
  let [isOpen, setIsOpen] = useState<boolean>(false);
  let [isAlert, setIsAlert] = useState<boolean>(false);
  let [isIdModal, setIsIdModal] = useState<boolean>(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop; // 컴포넌트의 화면 상단 위치
      window.scrollTo({ top: offsetTop, behavior: "smooth" }); // 스크롤 이동
    }
  };

  const DropBox = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.mainWhite};
    opacity: 0.9;
    z-index: 970;
  `;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentBox>
        <Alert isAlert={isAlert} setIsAlert={setIsAlert} setIsIdModal={setIsIdModal} />
        <Menu
          scrollToHome={() => scrollToComponent(homeRef)}
          scrollToAbout={() => scrollToComponent(aboutRef)}
          scrollToProject={() => scrollToComponent(projectRef)}
          scrollToContact={() => scrollToComponent(contactRef)}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isAlert={isAlert}
          setIsAlert={setIsAlert}
          isIdModal={isIdModal}
          setIsIdModal={setIsIdModal}
        />
        <DropBox isOpen={isOpen} />
        <IdModal isIdModal={isIdModal} />
        <View homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
      </ContentBox>
      <Routes>
        <Route path="/projects/:projectNum" element={<ProjectDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
