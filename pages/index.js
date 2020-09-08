import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/csr">
            <a className={styles.card}>
              <h3>Client Rendered</h3>
            </a>
          </Link>

          <Link href="/ssr">
            <a className={styles.card}>
              <h3>Server Rendered</h3>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
