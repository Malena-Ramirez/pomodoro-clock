import React, { useState } from 'react';
import Label from './Label';
import Timer from './Timer';
import { LabelsContainer, PomodoroContainer } from './LabelStyled';

const PomodoroApp = () => {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  return (
    <PomodoroContainer>
      <LabelsContainer>
        <Label
          type='session'
          length={sessionLength}
          setLength={setSessionLength}
        />
        <Label type='break' length={breakLength} setLength={setBreakLength} />
      </LabelsContainer>
      <Timer
        sessionLength={sessionLength}
        breakLength={breakLength}
        setSessionLength={setSessionLength}
        setBreakLength={setBreakLength}
      />
    </PomodoroContainer>
  );
};

export default PomodoroApp;
