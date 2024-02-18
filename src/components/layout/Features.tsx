import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    imgUrl: "/images/home/desktop/illustration-passionate.svg",
    altText: "Passionate",
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    imgUrl: "/images/home/desktop/illustration-resourceful.svg",
    altText: "Resourceful",
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imgUrl: "/images/home/desktop/illustration-friendly.svg",
    altText: "Friendly",
  },
];

const Features = () => {
  return (
    <Container>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} gradientAngle={index * 90} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 412px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    height: 670px;

    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    height: 1396px;
    gap: 80px;
  }
`;

export default Features;
