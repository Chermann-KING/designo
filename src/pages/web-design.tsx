import ServicesHead from "@/components/layout/ServicesHead";
import Article from "@/components/shared/Article";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

//Données pour les articles
const articles = [
  {
    imageAlt: "Photo article Express",
    imageSrc: "/images/web-design/desktop/image-express.jpg",
    title: "EXPRESS",
    description: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    imageAlt: "Photo article Transfer",
    imageSrc: "/images/web-design/desktop/image-transfer.jpg",
    title: "TRANSFER",
    description:
      "Site for low-cost money transfers and sending money within seconds",
  },
  {
    imageAlt: "Photo article Photon",
    imageSrc: "/images/web-design/desktop/image-photon.jpg",
    title: "PHOTON",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    imageAlt: "Photo article Builder",
    imageSrc: "/images/web-design/desktop/image-builder.jpg",
    title: "BUILDER",
    description:
      "Connects users with local contractors based on their location",
  },
  {
    imageAlt: "Photo article Blogr",
    imageSrc: "/images/web-design/desktop/image-blogr.jpg",
    title: "BLOGR",
    description:
      "Blogr is a platform for creating an online blog or publication",
  },
  {
    imageAlt: "Photo article Camp",
    imageSrc: "/images/web-design/desktop/image-camp.jpg",
    title: "CAMP",
    description:
      "Get expert training in coding, data, design, and digital marketing",
  },
];

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
