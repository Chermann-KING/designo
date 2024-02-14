import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

export default function Services() {
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
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
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
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
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
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </SectionStyled>
  );
}

const SectionStyled = styled.section`
  /* width: 1112px; */
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
