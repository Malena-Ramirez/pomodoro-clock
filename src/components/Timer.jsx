import React from 'react';
import {
  TimerContainer,
  TimerControlsContainer,
  TimerDisplayContainer,
} from './TimerStyled';

const Timer = () => {
  return (
    <TimerContainer>
      <TimerDisplayContainer>
        <h2>Sesión</h2>
        <p>25:00</p>
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
