import React from 'react';
import Label from './Label';
import Timer from './Timer';
import { LabelsContainer, PomodoroContainer } from './LabelStyled';

const PomodoroApp = () => {
  return (
    <PomodoroContainer>
      <LabelsContainer>
        <Label id='session' />
        <Label id='break' />
      </LabelsContainer>
      <Timer />
    </PomodoroContainer>
  );
};

export default PomodoroApp;
