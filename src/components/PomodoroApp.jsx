import React from 'react';
import Label from './Label';
import Timer from './Timer';

const PomodoroApp = () => {
  return (
    <div>
      Soy la aplicación
      <Label id='session' />
      <Label id='break' />
      <Timer />
    </div>
  );
};

export default PomodoroApp;
