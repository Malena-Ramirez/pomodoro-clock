import React, { useState, useEffect } from 'react';
import {
  TimerContainer,
  TimerControlsContainer,
  TimerDisplayContainer,
  TimerTitle,
  TimerDisplayText,
} from './TimerStyled';

const Timer = ({
  sessionLength,
  setSessionLength,
  setBreakLength,
  breakLength,
}) => {
  const [mode, setMode] = useState('Sesión');
  const [timeLeft, setTimeLeft] = useState();
  const [timeSpent, setTimeSpent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [displayTime, setDisplayTime] = useState(sessionLength * 60);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audio = new Audio('../assets/alarm.wav');

  useEffect(() => {
    setTimeLeft(
      mode === 'Sesión' ? sessionLength * 60 * 1000 : breakLength * 60 * 1000
    );
  }, [sessionLength, breakLength]);

  useEffect(() => {
    let interval = null;
    if (isPlaying && timeLeft > 1) {
      setTimeLeft(
        mode === 'Sesión'
          ? sessionLength * 60 * 1000 - timeSpent
          : breakLength * 60 * 1000 - timeSpent
      );

      interval = setInterval(() => {
        setTimeSpent((timeSpent) => timeSpent + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (timeLeft === 0) {
      audio.play();
      setAudioPlaying(true);
      setTimeSpent(0);
      setMode((mode) => (mode === 'Sesión' ? 'Break' : 'Sesión'));
      setTimeLeft(
        mode === 'Sesión' ? sessionLength * 60 * 1000 : breakLength * 60 * 1000
      );
    }
  }, [isPlaying, timeSpent]);

  useEffect(() => {
    audio.addEventListener('ended', () => setAudioPlaying(false));
    return () => {
      audio.addEventListener('ended', () => setAudioPlaying(false));
    };
  }, []);

  // useEffect(() => {
  //   setDisplayTime(sessionLength * 60);
  // }, [sessionLength]);

  // const formatTime = (time) => {
  //   let minutes = Math.floor(time / 1000 / 60);
  //   let seconds = (time / 1000) % 60;
  //   return (
  //     (minutes < 10 ? `0${minutes}` : minutes) +
  //     ':' +
  //     (seconds < 10 ? `0${seconds}` : seconds)
  //   );
  // };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const startStopIcon = isPlaying
    ? 'bi bi-pause-btn-fill'
    : 'bi bi-play-btn-fill';

  const handleReset = () => {
    setIsPlaying(false);
    setSessionLength(25);
    setBreakLength(5);
    if (audioPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setAudioPlaying(false);
    }
  };

  const min = Math.floor(timeLeft / 1000 / 60);
  const sec = Math.floor((timeLeft / 1000) % 60);

  return (
    <TimerContainer>
      <TimerTitle id='timer-label'>{mode}</TimerTitle>
      <TimerDisplayContainer>
        <TimerDisplayText id='time-left'>
          {min}:{sec.toString().length === 1 ? '0' + sec : sec}
        </TimerDisplayText>
      </TimerDisplayContainer>
      <TimerControlsContainer>
        <i className={startStopIcon} id='start_stop' onClick={handlePlay}></i>
        <i
          className='bi bi-arrow-counterclockwise'
          id='reset'
          onClick={handleReset}
        ></i>
      </TimerControlsContainer>
    </TimerContainer>
  );
};

export default Timer;
