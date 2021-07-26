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
  background-color: #0700008c;
  border-radius: 25px;
  padding: 10px 20px;
  width: 45vw;
  height: 65vh;
  color: #fbf7ff;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
`;

export const FooterText = styled.p`
  text-align: center;
`;