import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background: #343446;
    }

    :root {
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
    }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: clamp(0px, 100%, 1000px);
  min-height: 100vh;
  background: white;
`;

export const PaddedWrapper = styled.div`
  padding: 8px;
  padding-bottom: 0;
  min-height: 100%;
`;
