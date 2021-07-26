import styled from "styled-components";

export const LabelsContainer = styled.div`
  display:flex;
  justify-content: space-around;
`;

export const LabelContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LabelTitle = styled.h2`
  font-size: 1.5rem;
`;

export const LabelLengthContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5px;
  column-gap: 3px;
`;

export const DisplayLength = styled.p`
  grid-column: 1/3;
  font-size:1.5rem;
  text-align:center;
  margin: 0;
`;

export const UpdateLengthIcon = styled.i`
  margin: 0;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover{
    color: #4b27df;
  }
`;