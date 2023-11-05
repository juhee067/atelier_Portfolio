import Menu from "./components/menu/Menu";
import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import View from "./components/view/View";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";

const ContentBox = styled.div`
  display: flex;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentBox>
        <Menu />
        <View />
      </ContentBox>
    </ThemeProvider>
  );
}

export default App;
