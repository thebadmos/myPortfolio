import React from "react";
import Link from "next/link";
import styles from "./MobileLanding.module.css";
import { BiCaretRight } from "react-icons/bi";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const MobileLanding = () => {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.home}>
          <div className={styles.userImg}>
            <img src="portfolio.jpeg" alt="User picture" />
          </div>
          <h1>Hello, I&apos;m Olamiji Badmos.</h1>
          <p>
            {" "}
            As a dedicated front-end developer, my goal is to create engaging
            and user-friendly digital experiences. My journey in web development
            is a mix of creativity, innovation, and a constant drive for
            excellence. Beyond coding, I extend my love for technology by
            sharing computer-related knowledge through the art of writing,
            contributing to a community where insights thrive.
          </p>

          <Link href="Work" passHref>
            <div className={styles.explore}>
              <a>
                <p>Explore</p>
                <i>
                  <BiCaretRight />
                </i>
              </a>
            </div>
          </Link>
        </div>

        <footer className={styles.footer}>
          <div className={styles.socials}>
            <a
              href="https://github.com/thebadmos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaGithub />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/olamijibadmos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a
              href="mailto:badmosolamiji@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaEnvelope />
              </i>
            </a>
          </div>

          {/* <p>
            inspired by{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span>Devs</span>
            </a>
          </p> */}
        </footer>
      </div>
    </div>
  );
};

export default MobileLanding;
