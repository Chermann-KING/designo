import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../shared/Button";

const Hero = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Imagine fetching some data here...
    setShowButton(true); // After initial hydration
  }, []);

  return (
    <SectionStyle>
      <div className="infos-text">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        {showButton && (
          <Button href="/web-design" variant="primary">
            Learn more
          </Button>
        )}
      </div>
      <div className="image">
        <Image
          src={"/images/home/desktop/image-hero-phone.png"}
          alt="photo téléphone"
          width={624}
          height={913}
          priority={true}
        />
      </div>
    </SectionStyle>
  );
};

const SectionStyle = styled.section`
  z-index: 0;
  position: relative;
  background-color: #e7816b;
  border-radius: 15px;
  padding: 0 93px;

  overflow: hidden;

  height: 640px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url("/images/home/desktop/bg-pattern-hero-home.svg");
  background-repeat: no-repeat;
  background-position: center right;

  .infos-text {
    max-width: 540px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    margin-right: 20px;
    h1 {
      font-size: 3rem;
      line-height: 48px;
      font-weight: 500;
    }
    p {
      max-width: 445px;
    }
  }
  .image {
    align-self: flex-start;

    width: 284px;
    height: 573px;

    display: flex;
    justify-content: center;
  }

  // Styles pour les tablettes
  @media (max-width: 768px) {
    position: relative;
    padding: 58px 0;
    width: 100%;
    height: 843px;

    flex-direction: column;
    align-items: center;
    text-align: center;

    background-position: 200% 50%;

    .infos-text {
      max-width: 573px;
      align-items: center;
      margin-right: 0;
      gap: 19px;
      z-index: 10;
    }

    .image {
      align-self: center;
      position: relative;
      top: -80px;
    }
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    position: relative;
    padding: 58px 0;
    height: 843px;
    flex-direction: column;
    align-items: center;
    text-align: center;

    background-position: 0% 50%;

    .infos-text {
      padding: 0 20px;
      h1 {
        font-size: 2rem;
        line-height: 36px;
      }
      p {
        font-size: 0.9375rem;
        max-width: 327px;
      }
    }

    .image {
      align-self: center;
      position: relative;
      top: -80px;
    }
  }
`;

export default Hero;
