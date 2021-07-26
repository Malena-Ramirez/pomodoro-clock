import React from 'react';
import Label from './Label';
import Timer from './Timer';
import { LabelsContainer } from './LabelStyled';

const PomodoroApp = () => {
  return (
    <>
      <LabelsContainer>
        <Label id='session' />
        <Label id='break' />
      </LabelsContainer>
      <Timer />
    </>
  );
};

export default PomodoroApp;
