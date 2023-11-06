import Menu from "./components/menu/Menu";
import React, { useRef } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import View from "./components/view/View";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import { Route, Routes } from "react-router-dom";
import { ProjectDetail } from "./pages/ProjectDetail";

const ContentBox = styled.div`
  display: flex;
`;

function App() {
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentBox>
        <Menu
          scrollToHome={() => scrollToComponent(homeRef)}
          scrollToAbout={() => scrollToComponent(aboutRef)}
          scrollToProject={() => scrollToComponent(projectRef)}
          scrollToContact={() => scrollToComponent(contactRef)}
        />
        <View homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} />
      </ContentBox>
      <Routes>
        <Route path="/projects/:projectNum" element={<ProjectDetail />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
