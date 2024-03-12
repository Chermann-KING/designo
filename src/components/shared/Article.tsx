import Image from "next/image";
import styled from "styled-components";

interface ArticleProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <ArticleStyled>
      <div className="article-image">
        <Image src={imageSrc} alt={imageAlt} width={350} height={320} />
      </div>
      <div className="article-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ArticleStyled>
  );
};

const ArticleStyled = styled.article`
  background-color: #fdf3f0;
  width: 350px;
  height: 478px;
  border-radius: 15px;
  overflow: hidden;

  .article-image {
    background-color: #9a9a9a;
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
`;

export default Article;
