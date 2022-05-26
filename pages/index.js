import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>munetsi - home</title>
        <meta name="description" content="munetsi - web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World!
        </h1>

        <p className={styles.description}>
          Welcome to my portfolio website
        </p>
      </main>

      <footer className={styles.footer}>
       &copy; {new Date().getFullYear()}
      </footer>
    </div>
  )
}
