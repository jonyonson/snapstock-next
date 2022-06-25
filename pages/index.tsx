import Widget from '@/components/Widget';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Snapstock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Snapstock</h1>
        <Widget
          name="DJIA"
          price={31500.68}
          change={823.312}
          percentChange={2.5678}
          loading={false}
        />
      </main>
    </div>
  );
}
