"use client";

import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import styled from "styled-components";

export default function Home() {
  return (
    <MainStyled>
      <Hero />
      <Services />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  margin-top: 67px;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 160px;
  padding: 0 20px;
  margin-bottom: 60px;
`;
