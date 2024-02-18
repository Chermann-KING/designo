import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface ServiceCardProps {
  title: string;
  description: string;
  imgUrl: string;
  altText: string;
  gradientAngle: number;
}

const FeatureCard = ({
  title,
  description,
  imgUrl,
  altText,
  gradientAngle,
}: ServiceCardProps) => {
  return (
    <CardContainer>
      <ImageWrapper gradientAngle={gradientAngle}>
        {/* <img src={imgUrl} alt={altText} /> */}
        <Image src={imgUrl} alt={altText} width={202} height={202} />
      </ImageWrapper>
      <div className="text">
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 350px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 48px;

  line-height: 26px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  // Styles pour les tablettes
  @media (max-width: 768px) {
    height: 200px;
    width: 100%;
    flex-direction: row;

    .text {
      text-align: left;
      max-width: 439px;
      gap: 16px;
    }
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    flex-direction: column;
    height: 412px;
    gap: 48px;

    .text {
      text-align: center;
    }
  }
`;

const ImageWrapper = styled.div<{ gradientAngle: number }>`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: ${({ gradientAngle }) => `linear-gradient(
    ${gradientAngle}deg,
    rgba(231, 129, 107, 0.2) 0%,
    rgba(250, 247, 247, 0) 100%
  )`};

  /* img {
    width: 202px;
    height: auto;
  } */
`;

const Title = styled.h3`
  font-size: 1.25rem;
  letter-spacing: 5px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 1rem;
  letter-spacing: 0px;
`;

export default FeatureCard;
