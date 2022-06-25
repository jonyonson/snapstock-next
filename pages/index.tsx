import Head from 'next/head';
import Image from 'next/image';

// Components
import Search from '../components/Search/Search';

// Styles
import styles from 'styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Snapstock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Search placeholder="🔍  Search Quotes" />
      </main>
    </div>
  );
}
