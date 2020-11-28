import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Achievement.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Masonry from "react-masonry-css";

import { getSortedAchievementsData } from "../../lib/achievements";

export default function Achievements({ achievements }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Achievements - Tesla Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>Achievements</div>
      </header>
      <main className={styles.main}>
        <Masonry
          breakpointCols={{ default: 3, 768: 2, 576: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {achievements.map((achievement) => {
            return (
              <article className={styles.achievement}>
                <Link href={`/achievements/${achievement.id}`}>
                  <div className={styles.imageContainer}>
                    <img src={`/images/achievements/${achievement.image}`} />
                  </div>
                </Link>

                <section>
                  <header>{achievement.title}</header>
                  <div>{achievement.caption}</div>
                  <div className={styles.footer}>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        className={styles.link}
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLink} size="lg" />
                      </a>
                    )}
                    <span></span>
                    <span>11 Jan 2020</span>
                  </div>
                </section>
              </article>
            );
          })}
        </Masonry>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const achievements = getSortedAchievementsData();
  console.log(achievements);
  return {
    props: {
      achievements,
    },
  };
}
