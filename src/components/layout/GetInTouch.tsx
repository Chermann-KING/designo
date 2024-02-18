import styled from "styled-components";
import Button from "../shared/Button";
import { useEffect, useState } from "react";

const GetInTouch = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Imagine fetching some data here...
    setShowButton(true); // After initial hydration
  }, []);

  return (
    <SectionStyled>
      <ContentStyled>
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </ContentStyled>
      {showButton && (
        <Button href="/contact" variant="primary">
          Get In Touch
        </Button>
      )}
    </SectionStyled>
  );
};

const SectionStyled = styled.section`
  margin-bottom: -70px;

  background-color: #e7816b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 292px;

  background-image: url("/images/shared/desktop/bg-pattern-call-to-action.svg");
  background-position: 823px 450px;

  padding: 0 94px;
  border-radius: 15px;

  // Styles pour les tablettes
  @media (max-width: 768px) {
    margin-bottom: -86px;

    flex-direction: column;
    justify-content: center;
    gap: 32px;
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    margin-bottom: -190px;

    height: 379px;
    padding: 0 25px;
    background-position: 653px 480px;
  }
`;

const ContentStyled = styled.div`
  margin-right: 20px;

  width: 459px;
  height: 148px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 40px;
  }

  p {
    line-height: 26px;
  }

  // Styles pour les tablettes
  @media (max-width: 768px) {
    margin-right: 0px;

    text-align: center;
    align-items: center;

    h2 {
      width: 335px;
    }
    p {
      padding: 0 10px;
    }
  }

  // Styles pour les téléphones
  @media (max-width: 480px) {
    width: 100%;
    height: 163px;
    h2 {
      font-size: 2rem;
      line-height: 36px;
      width: 279px;
    }
    p {
      padding: 0;
    }
  }
`;

export default GetInTouch;
