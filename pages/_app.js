import "../styles/globals.css";

import Link from "next/link";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const currentRoute = router.route;
  let listener = null;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrollAmount = document.scrollingElement.scrollTop;
      if (scrollAmount >= 30) {
        if (!scrolled) {
          setScrolled(true);
        }
      } else {
        if (scrolled) {
          setScrolled(false);
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrolled]);
  return (
    <>
      <nav className={scrolled || currentRoute !== "/" ? "solid" : ""}>
        <div className="container">
          <Link href="/team">
            <a className={currentRoute === "/team" ? "active" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle fill="none" cx="12" cy="7" r="3"></circle>
                <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
                <path
                  className={currentRoute === "/team" ? "" : "inactive"}
                  d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"
                ></path>
              </svg>
              <span>Our Team</span>
            </a>
          </Link>

          <Link href="/">
            <a className={currentRoute === "/" ? "active" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M3,13h1v2v5c0,1.103,0.897,2,2,2h3h6h3c1.103,0,2-0.897,2-2v-5v-2h1c0.404,0,0.77-0.244,0.924-0.617 c0.155-0.374,0.069-0.804-0.217-1.09l-9-9c-0.391-0.391-1.023-0.391-1.414,0l-9,9c-0.286,0.286-0.372,0.716-0.217,1.09 C2.23,12.756,2.596,13,3,13z M10,20v-5h4v5H10z M12,4.414l6,6V15l0,0l0.001,5H16v-5c0-1.103-0.897-2-2-2h-4c-1.103,0-2,0.897-2,2v5 H6v-5v-3v-1.586L12,4.414z"></path>
                <path
                  className={currentRoute === "/" ? "" : "inactive"}
                  d="M21.743,12.331l-9-10c-0.379-0.422-1.107-0.422-1.486,0l-9,10c-0.265,0.293-0.331,0.715-0.17,1.076 C2.247,13.768,2.605,14,3,14h2v7c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-7h2 c0.395,0,0.753-0.232,0.913-0.593C22.074,13.046,22.008,12.625,21.743,12.331z"
                ></path>
              </svg>
              <span>Home</span>
            </a>
          </Link>
          <Link href="/achievements">
            <a className={currentRoute === "/achievements" ? "active" : ""}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21,4h-3V3c0-0.553-0.447-1-1-1H7C6.447,2,6,2.447,6,3v1H3C2.447,4,2,4.447,2,5v3c0,4.31,1.799,6.91,4.819,7.012 c0.88,1.509,2.396,2.597,4.181,2.898V20H9v2h6v-2h-2v-2.09c1.784-0.302,3.301-1.39,4.181-2.898C20.201,14.91,22,12.31,22,8V5 C22,4.447,21.553,4,21,4z M4,8V6h2v6.021v0.809C4.216,12.078,4,9.299,4,8z M12,16c-2.206,0-4-1.794-4-4V4h8v8 C16,14.206,14.206,16,12,16z M18,12.83v-0.809V6h2v2C20,9.299,19.784,12.078,18,12.83z"></path>
                <path
                  className={currentRoute === "/achievements" ? "" : "inactive"}
                  d="M21,4h-3V3c0-0.553-0.447-1-1-1H7C6.447,2,6,2.447,6,3v1H3C2.447,4,2,4.447,2,5v3c0,4.31,1.799,6.91,4.819,7.012 c0.88,1.509,2.396,2.597,4.181,2.898V20H9v2h6v-2h-2v-2.09c1.784-0.302,3.301-1.39,4.181-2.898C20.201,14.91,22,12.31,22,8V5 C22,4.447,21.553,4,21,4z M4,8V6h2v6.021v0.809C4.216,12.078,4,9.299,4,8z M18,12.83v-0.809V6h2v2C20,9.299,19.784,12.078,18,12.83 z"
                ></path>
              </svg>
              <span>Achievements</span>
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer>
        <span>Contact Us</span>
        <section>
          <a href="https://goo.gl/maps/j9E1McXBEChtxX7A8" target="_blank">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            UB-703, SRMIST, KTR - 603203
          </a>
          <a href="mailto:info@nextech.io" target="_blank">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            info@nextech.io
          </a>
        </section>
        Made with ❤️️ by Snehil
      </footer>
    </>
  );
}

export default MyApp;
