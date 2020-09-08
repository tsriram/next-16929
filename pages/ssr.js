import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SSR({ name }) {
  const router = useRouter();
  console.log("router asPath: ", router.asPath);
  return (
    <main className={styles.main}>
      <h1>{name}-side rendered!</h1>
      <Link href="/csr">
        <a className={styles.card}>
          <h3>Client Rendered</h3>
        </a>
      </Link>
    </main>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      name: "Server"
    }
  };
}
