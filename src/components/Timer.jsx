import React from 'react';
import {
  TimerContainer,
  TimerControlsContainer,
  TimerDisplayContainer,
  TimerTitle,
  TimerDisplayText,
} from './TimerStyled';

const Timer = () => {
  return (
    <TimerContainer>
      <TimerTitle>Sesión</TimerTitle>
      <TimerDisplayContainer>
        <TimerDisplayText>25:00</TimerDisplayText>
      </TimerDisplayContainer>
      <TimerControlsContainer>
        <i className='bi bi-play-btn-fill'></i>
        <i className='bi bi-pause-btn-fill'></i>
        <i className='bi bi-arrow-counterclockwise'></i>
      </TimerControlsContainer>
    </TimerContainer>
  );
};

export default Timer;
