import useQuote from 'hooks/use-quote';
import { useRouter } from 'next/router';

export default function Symbol() {
  const router = useRouter();
  const { symbol } = router.query;

  const { data, error, loading } = useQuote(symbol as string);
  if (error) {
    console.error(error);
  }
  return (
    <div>
      <h1>{symbol}</h1>
      <h2>{!loading && data?.quote.latestPrice}</h2>
      <p>{!loading && data?.company.description}</p>
    </div>
  );
}
