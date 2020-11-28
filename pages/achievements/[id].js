import Head from "next/head";
import {
  getAllAchievementIds,
  getAchievementData,
} from "../../lib/achievements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Post.module.css";

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title} - Tesla Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div>{postData.title}</div>
        <div className={styles.caption}>{postData.caption}</div>
        <div className={styles.date}>{postData.date}</div>
        <div className={styles.authors}>
          {postData.authors.map((author) => (
            <a href={author.link} key={author.name}>
              {author.name}
            </a>
          ))}
        </div>
        {postData.link && (
          <article className={styles.visit}>
            <a href={postData.link} target="_blank">
              <FontAwesomeIcon icon={faLink} size="xs" /> Visit Site
            </a>
          </article>
        )}
      </header>
      <section className={styles.main}>
        <img
          src={`/images/achievements/${postData.image}`}
          className={styles.heroImage}
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllAchievementIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getAchievementData(params.id);

  const date = new Date(postData.date).toDateString();
  postData.date = date;
  return {
    props: {
      postData,
    },
  };
}
