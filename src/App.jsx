import "./App.css";
import styled, { ThemeProvider } from 'styled-components';
import { Home } from "./components/Home";
import { useContext } from "react";
import {ThemeContext} from './context/Context';
import { theme } from "./theme/theme";

function App() {

  const {localTheme} = useContext(ThemeContext) 
  return (
    <ThemeProvider theme={theme[localTheme]}>
    <Styled.Container className="container-fluid">
      <Home />
    </Styled.Container>
    </ThemeProvider>
  );
}

export default App;

const Styled = {
  Container: styled.div`
  height: 100vh;
  background-image: url(/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  `
}