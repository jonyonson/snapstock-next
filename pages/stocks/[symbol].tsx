import { useRouter } from 'next/router';

export default function Symbol() {
  const router = useRouter();
  const { symbol } = router.query;

  return <h1>{symbol}</h1>;
}
