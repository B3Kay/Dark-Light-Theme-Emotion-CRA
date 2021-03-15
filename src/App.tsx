import { Theme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import "./App.css";
import { ReactComponent as Moon } from "./moon.svg";
import { ReactComponent as Sun } from "./sun.svg";

const lightTheme: Theme = {
  type: "light",
  color: {
    primary: "#FBBF24",
    contrast: "#8B5CF6",
    text: "#1F2937",
    contrastText: "#F3F4F6",
    secondary: "#F9A8D4",
    secondaryText: "#a7adb7",
    background: "#F3F4F6",
  },
};
const darkTheme: Theme = {
  type: "dark",
  color: {
    primary: "#8B5CF6",
    contrast: "#FBBF24",
    text: "#F3F4F6",
    contrastText: "#1F2937",
    secondary: "#6EE7B7",
    secondaryText: "#6B7280",
    background: "#1F2937",
  },
};

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text};
`;
const ContrastHighlight = styled.span`
  color: ${({ theme }) => theme.color.contrast};
  font-weight: bold;
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.contrastText};
  font-weight: bold;
  margin-top: 1rem;
  font-size: 2rem;
`;
const StyledMoon = styled(Moon)`
  color: ${({ theme }) => theme.color.primary};
`;
const StyledSun = styled(Sun)`
  color: ${({ theme }) => theme.color.primary};
`;

const StyledBackground = styled.div`
  ${({ theme }) => `
  background: ${theme.color.background};
  overflow: hidden;
  `}
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const onChangeTheme = () => {
    const newTheme = theme.type === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledBackground>
        <header className="App-header">
          {theme.type === "light" ? (
            <StyledSun className="App-logo" />
          ) : (
            <StyledMoon className="App-logo" />
          )}

          <Paragraph>
            Click the button to switch to{" "}
            <ContrastHighlight>
              {theme.type === "light" ? "dark" : "light"}
            </ContrastHighlight>{" "}
            mode!
          </Paragraph>

          <StyledButton onClick={onChangeTheme}>Switch theme</StyledButton>
        </header>
      </StyledBackground>
    </ThemeProvider>
  );
}

export default App;
