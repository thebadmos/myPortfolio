import React from "react";
import styles from "./Footer.module.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = ({ footerLinks }) => {
  return (
    <div>
      <div className={styles.footer_links}>
        {footerLinks.map((footer) => (
          <button key={footer.id}>
            <Link href={footer.link}>{footer.title}</Link>
          </button>
        ))}
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

          <a href="mailto:badmosolamiji@gmail.com"
             target="_blank"
             rel="noopener noreferrer"
          >
            <i>
              <FaEnvelope />
              </i>
              </a>
        </div>

        <p>
          inspired by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Devs</span>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
