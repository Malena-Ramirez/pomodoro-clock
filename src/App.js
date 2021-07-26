import React from 'react';
import PomodoroApp from './components/PomodoroApp';
import { GlobalStyle, AppContainer } from './components/AppStyled';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <h1>Pomodoro</h1>
        <PomodoroApp />
      </AppContainer>
      <footer>&copy; Malena Ramirez Uribe</footer>
    </>
  );
}

export default App;
