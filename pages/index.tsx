import type { NextPage } from 'next'
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movilist App</title>
        <meta name='description' content='Movilist: all your updated movies.' />
      </Head>

      <main>
        <h1 className={styles.title}>Movilist</h1>
        <p className={styles.description}>
          Get the latest updates on your favorite movies.
        </p>
      </main>
    </div>
  );
};

export default Home
