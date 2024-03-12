import ServicesHead from "@/components/layout/ServicesHead";
import Article from "@/components/shared/Article";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function WebDesign() {
  return (
    <>
      <Header />
      <MainStyled>
        <ServicesHead />

        <ArticlesStyled>
          <Article
            imageAlt="Photo article Express"
            imageSrc="/images/web-design/desktop/image-express.jpg"
            title="EXPRESS"
            description="A multi-carrier shipping website for ecommerce businesses"
          />
        </ArticlesStyled>
      </MainStyled>
      <Footer />
    </>
  );
}
const MainStyled = styled.main`
  border: 2px solid red;

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
const ArticlesStyled = styled.article`
  .article {
    background-color: #fdf3f0;
    width: 350px;
    height: 478px;
    border-radius: 15px;
    overflow: hidden;

    .article-image {
      background-color: #e4e00a;
      width: 100%;
      height: 320px;
      /* img {
        width: 100%;
        height: 100%;
      } */
    }
    .article-content {
      margin: 0 auto;
      width: 286px;
      height: calc(478px - 320px);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      text-align: center;

      h2 {
        color: #e7816b;
      }
    }
  }
`;
