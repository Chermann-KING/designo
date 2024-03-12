import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface ArticleProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Article: React.FC<ArticleProps> = ({
  id,
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
      <Link href={`/article/${id}`}>
        <div className="article-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </ArticleStyled>
  );
};

const ArticleStyled = styled.article`
  /* background-color: #fdf3f0; */
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
    cursor: pointer;
    background-color: #fdf3f0;
    transition: background-color 0.3s ease;
    margin: 0 auto;
    padding: 0 44px;
    width: 100%;
    height: calc(478px - 320px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    text-align: center;

    h2 {
      color: #e7816b;
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 5px;
    }

    &:hover {
      background-color: #e7816b;
      h2,
      p {
        color: #ffffff;
      }
    }
  }
`;

export default Article;
