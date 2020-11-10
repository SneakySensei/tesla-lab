import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { getAllSortedMembers } from "../lib/team";

export default function Team({ members }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div>Tesla Lab</div>
      </header>
      {members.map((member) => {
        return (
          <div>
            {member.name} --- {member.role}
            {member.image && <img src={`images/team/${member.image}`} />}
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const members = getAllSortedMembers().people;

  return {
    props: {
      members,
    },
  };
}
