import React from 'react';
import {
  LabelContainer,
  LabelLengthContainer,
  LabelTitle,
  DisplayLength,
  UpdateLengthIcon,
} from './LabelStyled';

const Label = ({ type, length, setLength, isRunning }) => {
  const name = type === 'session' ? 'de la sesión' : 'del break';

  const handleIncrement = () => {
    if (length < 60 && !isRunning) {
      setLength(length + 1);
    }
  };

  const handleDecrement = () => {
    if (length > 1 && !isRunning) {
      setLength(length - 1);
    }
  };

  return (
    <LabelContainer>
      <LabelTitle id={`${type}-label`}>Duración {name}</LabelTitle>
      <LabelLengthContainer>
        <DisplayLength id={`${type}-length`}>{length}</DisplayLength>
        <UpdateLengthIcon
          onClick={handleIncrement}
          className='bi bi-caret-up-square-fill'
          id={`${type}-increment`}
        ></UpdateLengthIcon>
        <UpdateLengthIcon
          onClick={handleDecrement}
          className='bi bi-caret-down-square-fill'
          id={`${type}-decrement`}
        ></UpdateLengthIcon>
      </LabelLengthContainer>
    </LabelContainer>
  );
};

export default Label;
