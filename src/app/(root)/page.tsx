"use client";

import Hero from "@/components/layout/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <MainStyled>
      <Hero />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  margin-top: 67px;
  height: calc(100vh - 67px);
  display: flex;
  /* align-items: center; */
  justify-content: center;
  padding: 0 20px;
`;
