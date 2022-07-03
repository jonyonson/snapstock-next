import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchQuote } from '../api/quote/[symbol]';

interface QuotePageProps {
  quote: IEXCloudQuote;
  company: Company;
  stats: Stats;
}
export default function Quote({ quote, company, stats }: QuotePageProps) {
  const router = useRouter();
  const { symbol } = router.query;

  return (
    <div>
      <Head>
        <title>
          {company.symbol.toUpperCase()}: {quote.latestPrice}
        </title>
      </Head>
      <h1>{symbol}</h1>
      <h1>{stats.companyName}</h1>
      <h2>{quote.latestPrice}</h2>
      <p>{company.description}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const { params } = context;
  const data = await fetchQuote(params?.symbol as string);
  const { quote, company, stats } = data;

  return { props: { quote, company, stats } };
};
