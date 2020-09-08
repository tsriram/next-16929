import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CSR() {
  const router = useRouter();
  console.log("router asPath: ", router.asPath);
  return (
    <main className={styles.main}>
      <h1>Client-side rendered!</h1>
      <Link href="/ssr">
        <a className={styles.card}>
          <h3>Server Rendered</h3>
        </a>
      </Link>
    </main>
  );
}
