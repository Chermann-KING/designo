"use client";

import Features from "@/components/layout/Features";
import GetInTouch from "@/components/layout/GetInTouch";
import Hero from "@/components/layout/Hero";
import Services from "@/components/layout/Services";
import styled from "styled-components";

export default function Home() {
  return (
    <MainStyled>
      <Hero />
      <Services />
      <Features />
      <GetInTouch />
    </MainStyled>
  );
}

const MainStyled = styled.main`
  max-width: 1111px;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 160px;
  padding: 0 20px;

  margin: 0 auto;
  margin-top: 67px;

  // Styles pour les tablettes
  @media (max-width: 768px) {
    row-gap: 120px;
  }
`;
