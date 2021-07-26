import React from 'react';
import PomodoroApp from './components/PomodoroApp';
import { GlobalStyle, AppContainer, Title, Footer, FooterText } from './components/AppStyled';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>Reloj Pomodoro</Title>
        <PomodoroApp />
      </AppContainer>
      <Footer>
        <FooterText>&copy; Malena Ramirez Uribe</FooterText>
      </Footer>
    </>
  );
}

export default App;
