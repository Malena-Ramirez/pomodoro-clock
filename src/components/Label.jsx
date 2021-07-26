import React, { useState } from 'react';
import {
  LabelContainer,
  LabelLengthContainer,
  LabelTitle,
  DisplayLength,
  UpdateLengthIcon,
} from './LabelStyled';

const Label = ({ id }) => {
  const name = id === 'session' ? 'de la sesión' : 'del break';
  const minutes = id === 'session' ? 25 : 5;
  const [length, setLength] = useState(minutes);

  const handleIncrement = () => {
    setLength(length + 1);
  };

  const handleDecrement = () => {
    if (length > 0) {
      setLength(length - 1);
    }
  };

  return (
    <LabelContainer>
      <LabelTitle id={`${id}-label`}>Duración {name}</LabelTitle>
      <LabelLengthContainer>
        <DisplayLength id={`${id}-length`}>{length}</DisplayLength>
        <UpdateLengthIcon
          onClick={handleIncrement}
          className='bi bi-caret-up-square-fill'
          id={`${id}-increment`}
        ></UpdateLengthIcon>
        <UpdateLengthIcon
          onClick={handleDecrement}
          className='bi bi-caret-down-square-fill'
          id={`${id}-decrement`}
        ></UpdateLengthIcon>
      </LabelLengthContainer>
    </LabelContainer>
  );
};

export default Label;
