import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    box-sizing: border-box;
    background: linear-gradient(190deg, rgba(86,35,180,1) 0%, rgba(75,39,223,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;

export const AppContainer = styled.div`
  background-color: green;
  border-radius: 25px;
  padding: 10px 20px;
`;