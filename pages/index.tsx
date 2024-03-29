import Head from 'next/head'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css';
import Nav from '../src/components/navbar/Nav';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>main</p>
      </main>
    </div>
  )
}

export default Home
