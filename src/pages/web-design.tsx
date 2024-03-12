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
          {articles.map((article, index) => (
            <Article
              key={index}
              id={index.toString()} //TODO revoir comment gérer l'ID
              imageAlt={article.imageAlt}
              imageSrc={article.imageSrc}
              title={article.title}
              description={article.description}
            />
          ))}
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
const ArticlesStyled = styled.section`
  /*  */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
