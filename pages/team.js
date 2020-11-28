import Head from "next/head";
import styles from "../styles/Team.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { getAllSortedMembers } from "../lib/team";

export default function Team({ syndicates, members }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our Team - Tesla Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>Our Team</div>
      </header>
      <main className={styles.main}>
        <h1>Syndicates</h1>
        <section>
          {syndicates.map((syndicate) => {
            return (
              <div key={syndicate.name} className={styles.card}>
                <img src={`images/team/${syndicate.image}`} />
                <div className={styles.socials}>
                  {syndicate.linkedin && (
                    <a href={syndicate.linkedin} target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.linkedin}
                        size="lg"
                      />
                    </a>
                  )}
                  {syndicate.portfolio && (
                    <a href={syndicate.portfolio} target="_blank">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className={styles.portfolio}
                        size="lg"
                      />
                    </a>
                  )}
                  {syndicate.github && (
                    <a href={syndicate.github} target="_blank">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={styles.github}
                        size="lg"
                      />
                    </a>
                  )}
                </div>
                <div>{syndicate.name}</div>
              </div>
            );
          })}
        </section>
        <h1>Members</h1>
        <section>
          {members.map((member) => {
            return (
              <div key={member.name} className={styles.card}>
                <img src={`images/team/${member.image}`} />
                <div className={styles.socials}>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={styles.linkedin}
                        size="lg"
                      />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className={styles.portfolio}
                        size="lg"
                      />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={styles.github}
                        size="lg"
                      />
                    </a>
                  )}
                </div>
                <div>{member.name}</div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const team = getAllSortedMembers();
  return {
    props: {
      syndicates: team.syndicates.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
      members: team.members.sort((a, b) => {
        return a.name.localeCompare(b.name);
      }),
    },
  };
}
