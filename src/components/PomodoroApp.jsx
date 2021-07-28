import React, { useState } from 'react';
import Label from './Label';
import Timer from './Timer';
import { LabelsContainer, PomodoroContainer } from './LabelStyled';

const PomodoroApp = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isRunning, setisRunning] = useState(false);

  return (
    <PomodoroContainer>
      <LabelsContainer>
        <Label
          type='session'
          length={sessionLength}
          setLength={setSessionLength}
          isRunning={isRunning}
        />
        <Label
          type='break'
          length={breakLength}
          setLength={setBreakLength}
          isRunning={isRunning}
        />
      </LabelsContainer>
      <Timer
        sessionLength={sessionLength}
        breakLength={breakLength}
        setSessionLength={setSessionLength}
        setBreakLength={setBreakLength}
        isRunning={isRunning}
        setisRunning={setisRunning}
      />
    </PomodoroContainer>
  );
};

export default PomodoroApp;
