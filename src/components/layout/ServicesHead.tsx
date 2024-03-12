import styled from "styled-components";
import Button from "../shared/Button";

const ServicesHead = () => {
  return (
    <ContainerStyled>
      <ContentStyled>
        <h2>Web Design</h2>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </ContentStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  margin-bottom: -70px;

  background-color: #e7816b;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 292px;

  background-image: url("/images/shared/desktop/bg-pattern-call-to-action.svg");
  background-position: 823px 450px;

  padding: 0 94px;
  border-radius: 15px;

  text-align: center;

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
  width: 730px;
  height: 124px;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 0 19%;

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

export default ServicesHead;
