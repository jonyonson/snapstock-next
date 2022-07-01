import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { fetchArticles } from './api/news';

type Article = {
  author: string;
  content: string;
  publishedAt: string;
  source: { id: string | null; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const articles: Article[] = await fetchArticles();

  return { props: { articles } };
};

export default function News({
  articles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <main>
        <h1>News</h1>
        {articles.map((article: Article) => (
          <p key={article.title}>{article.title}</p>
        ))}
      </main>
    </div>
  );
}
