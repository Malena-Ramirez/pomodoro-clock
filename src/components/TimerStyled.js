import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TimerTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
`;

export const TimerDisplayContainer = styled.div`
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: #e7dcff;
  color: #29115b;
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimerControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.8rem;
`;

export const TimerDisplayText = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;