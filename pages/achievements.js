import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Achievements() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>Achievements</div>
      </header>
    </div>
  );
}
