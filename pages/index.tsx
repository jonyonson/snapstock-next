import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snapstock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Snapstock</h1>

        <Link href="/news">News</Link>
      </main>
    </div>
  );
}
