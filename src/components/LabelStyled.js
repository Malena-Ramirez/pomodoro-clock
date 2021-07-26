import styled from "styled-components";

export const PomodoroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  justify-content: space-around;
`;

export const LabelsContainer = styled.div`
  display:flex;
  justify-content: space-around;
  width: 100%;
`;

export const LabelContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelTitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  @media(min-width: 768px){
    font-size: 1.2rem;
  }
`;

export const LabelLengthContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5px;
  column-gap: 3px;
  justify-items: center;
`;

export const DisplayLength = styled.p`
  grid-column: 1/3;
  font-size:1.8rem;
  text-align:center;
  margin: 0;
  color: #28115c;
  background-color: #e7dcff91;
  border-radius: 5px;
  width: 50px;
`;

export const UpdateLengthIcon = styled.i`
  margin: 0;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover{
    color: #4b27df;
  }
`;