import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import React, { useEffect } from "react";

import EmbeddedImg from "../public/images/embedded.svg";
import PowerImg from "../public/images/power-electronics.svg";
import IotImg from "../public/images/iot.svg";
import CVImg from "../public/images/computer-vision.svg";
import LinuxImg from "../public/images/linux.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tesla Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.headerContainer}>
        <div className={styles.header}>
          <section>
            <div className={styles.title}>Tesla Lab.</div>
            <div className={styles.subtitle}>
              A team of future engineers who love to create awesome things here
              at SRM Institute of Science and Technology.
            </div>
          </section>
          <img src="/images/iot.png" />

          <a href="#main" id="main" className={styles.scrollDown}>
            Scroll Down
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"></path>
            </svg>
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <section>
          <h1>ABOUT US</h1>
          <p>
            Working on cutting edge technology, connecting multiple devices,
            appliances, electronics and other ‘things’ to proliferate the
            standards of day-to-day life. Researching on Smart Grids and load
            forecasting to improve transmission system and decrease power
            losses.
          </p>
          <h1>SUB-DOMAINS</h1>
          <p>
            At Tesla Lab we work on projects and research work from various
            disciplines. Tesla Lab supports multidisciplinary work which means
            no one is restricted to just one area of expertise. This leads to
            better overall learning for all our members.
          </p>
          <h3>> Embedded Systems</h3>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit urna sit amet elit iaculis aliquam sit amet non mi. Fusce
              sit amet nunc bibendum, pretium est vel, mattis orci. Proin semper
              congue vestibulum. Nulla porttitor ipsum pharetra nisl gravida
              imperdiet ut a urna. Vivamus sit amet ultrices massa, non
              pellentesque mauris. Cras rutrum ullamcorper velit vitae mollis.
              In nec ante dignissim, vestibulum dolor sed, varius sapien.
              Praesent eu gravida felis. Suspendisse nec malesuada felis. Donec
              nec dictum augue. Suspendisse quam nisl, congue ac eleifend id,
              vulputate at purus. Morbi in lorem nibh.
            </p>
            <EmbeddedImg />
          </article>
          <h3>> Power Electronics</h3>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit urna sit amet elit iaculis aliquam sit amet non mi. Fusce
              sit amet nunc bibendum, pretium est vel, mattis orci. Proin semper
              congue vestibulum. Nulla porttitor ipsum pharetra nisl gravida
              imperdiet ut a urna. Vivamus sit amet ultrices massa, non
              pellentesque mauris. Cras rutrum ullamcorper velit vitae mollis.
              In nec ante dignissim, vestibulum dolor sed, varius sapien.
              Praesent eu gravida felis. Suspendisse nec malesuada felis. Donec
              nec dictum augue. Suspendisse quam nisl, congue ac eleifend id,
              vulputate at purus. Morbi in lorem nibh.
            </p>
            <PowerImg />
          </article>
          <h3>> Internet of Things</h3>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit urna sit amet elit iaculis aliquam sit amet non mi. Fusce
              sit amet nunc bibendum, pretium est vel, mattis orci. Proin semper
              congue vestibulum. Nulla porttitor ipsum pharetra nisl gravida
              imperdiet ut a urna. Vivamus sit amet ultrices massa, non
              pellentesque mauris. Cras rutrum ullamcorper velit vitae mollis.
              In nec ante dignissim, vestibulum dolor sed, varius sapien.
              Praesent eu gravida felis. Suspendisse nec malesuada felis. Donec
              nec dictum augue. Suspendisse quam nisl, congue ac eleifend id,
              vulputate at purus. Morbi in lorem nibh.
            </p>
            <IotImg />
          </article>
          <h3>> Computer Vision</h3>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit urna sit amet elit iaculis aliquam sit amet non mi. Fusce
              sit amet nunc bibendum, pretium est vel, mattis orci. Proin semper
              congue vestibulum. Nulla porttitor ipsum pharetra nisl gravida
              imperdiet ut a urna. Vivamus sit amet ultrices massa, non
              pellentesque mauris. Cras rutrum ullamcorper velit vitae mollis.
              In nec ante dignissim, vestibulum dolor sed, varius sapien.
              Praesent eu gravida felis. Suspendisse nec malesuada felis. Donec
              nec dictum augue. Suspendisse quam nisl, congue ac eleifend id,
              vulputate at purus. Morbi in lorem nibh.
            </p>
            <CVImg />
          </article>
          <h3>> Linux and Open Source</h3>
          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              suscipit urna sit amet elit iaculis aliquam sit amet non mi. Fusce
              sit amet nunc bibendum, pretium est vel, mattis orci. Proin semper
              congue vestibulum. Nulla porttitor ipsum pharetra nisl gravida
              imperdiet ut a urna. Vivamus sit amet ultrices massa, non
              pellentesque mauris. Cras rutrum ullamcorper velit vitae mollis.
              In nec ante dignissim, vestibulum dolor sed, varius sapien.
              Praesent eu gravida felis. Suspendisse nec malesuada felis. Donec
              nec dictum augue. Suspendisse quam nisl, congue ac eleifend id,
              vulputate at purus. Morbi in lorem nibh.
            </p>
            <LinuxImg />
          </article>
        </section>
      </main>
    </div>
  );
}
