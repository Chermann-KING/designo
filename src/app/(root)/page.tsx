"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <MainStyled>
      <h1>Designo</h1>
    </MainStyled>
  );
}

const MainStyled = styled.main`
  margin-top: 67px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
  h1 {
    color: #e7816b;
  }
`;
