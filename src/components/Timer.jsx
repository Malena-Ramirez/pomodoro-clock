import React, { useState, useEffect, useRef } from 'react';
import {
  TimerContainer,
  TimerControlsContainer,
  TimerDisplayContainer,
  TimerTitle,
  TimerDisplayText,
  TimerControlIcon,
} from './TimerStyled';
import audioFile from '../assets/alarm.wav';

const Timer = ({
  sessionLength,
  setSessionLength,
  setBreakLength,
  breakLength,
  isRunning,
  setisRunning,
}) => {
  const [mode, setMode] = useState('Sesión');
  const [displayTime, setDisplayTime] = useState(sessionLength * 60);

  const alarm = useRef();

  useEffect(() => {
    setDisplayTime(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    const handleSwitch = () => {
      if (mode === 'Sesión') {
        setMode('Break');
        setDisplayTime(breakLength * 60);
      } else if (mode === 'Break') {
        setMode('Sesión');
        setDisplayTime(sessionLength * 60);
      }
    };
    let countdown = null;
    if (isRunning && displayTime > 0) {
      countdown = setInterval(() => {
        setDisplayTime(displayTime - 1);
      }, 1000);
    } else if (isRunning && displayTime === 0) {
      countdown = setInterval(() => {
        setDisplayTime(displayTime - 1);
      }, 1000);
      alarm.current.play();
      handleSwitch();
    } else {
      clearInterval(countdown);
    }
    return () => clearInterval(countdown);
  }, [isRunning, displayTime, mode, breakLength, sessionLength, alarm]);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? `0${minutes}` : minutes) +
      ':' +
      (seconds < 10 ? `0${seconds}` : seconds)
    );
  };

  const handlePlay = () => {
    setisRunning(!isRunning);
  };

  const startStopIcon = isRunning
    ? 'bi bi-pause-btn-fill'
    : 'bi bi-play-btn-fill';

  const handleReset = () => {
    setisRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setMode('Sesión');
    alarm.current.pause();
    alarm.current.currentTime = 0;
  };

  return (
    <TimerContainer>
      <TimerTitle id='timer-label'>{mode}</TimerTitle>
      <TimerDisplayContainer>
        <TimerDisplayText id='time-left'>
          {formatTime(displayTime)}
        </TimerDisplayText>
      </TimerDisplayContainer>
      <TimerControlsContainer>
        <TimerControlIcon
          className={startStopIcon}
          id='start_stop'
          onClick={handlePlay}
        ></TimerControlIcon>
        <TimerControlIcon
          className='bi bi-arrow-counterclockwise'
          id='reset'
          onClick={handleReset}
        ></TimerControlIcon>
      </TimerControlsContainer>
      <audio ref={alarm} src={audioFile} type='audio'></audio>
    </TimerContainer>
  );
};

export default Timer;
