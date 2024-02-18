"use client";

import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  return (
    <SectionStyled className="services">
      {/* card */}
      <ServiceCard
        title={"Web Design"}
        desktopImage={"/images/home/desktop/image-web-design-large.jpg"}
        tabletImage={"/images/home/tablet/image-web-design.jpg"}
        mobileImage={"/images/home/mobile/image-web-design.jpg"}
        imagewidth={541}
        imageHeight={640}
        imageAlt="photo de d'ordinateur avec une main tappant dessus"
        className={"one"}
        onClick={() => router.push("/web-design", { scroll: false })}
      />
      {/* card */}
      <ServiceCard
        title={"App Design"}
        desktopImage={"/images/home/desktop/image-app-design.jpg"}
        tabletImage={"/images/home/tablet/image-app-design.jpg"}
        mobileImage={"/images/home/mobile/image-app-design.jpg"}
        imagewidth={541}
        imageHeight={640}
        imageAlt="photo d'une main tenant un téléphone"
        className={"two"}
        onClick={() => router.push("/app-design", { scroll: false })}
      />
      {/* card */}
      <ServiceCard
        title={"Graphic Design"}
        desktopImage={"/images/home/desktop/image-graphic-design.jpg"}
        tabletImage={"/images/home/tablet/image-graphic-design.jpg"}
        mobileImage={"/images/home/mobile/image-graphic-design.jpg"}
        imagewidth={541}
        imageHeight={640}
        imageAlt="photo d'art abstrait"
        className={"three"}
        onClick={() => router.push("/graphic-design", { scroll: false })}
      />
    </SectionStyled>
  );
}

const SectionStyled = styled.section`
  width: 100%;
  height: 640px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px 30px;
  grid-template-areas:
    "one two"
    "one three";

  .one {
    grid-area: one;
  }
  .two {
    grid-area: two;
  }
  .three {
    grid-area: three;
  }

  // Styles pour les tablettes
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 25px 0px;
    grid-template-areas:
      "one"
      "two"
      "three";
  }
`;
