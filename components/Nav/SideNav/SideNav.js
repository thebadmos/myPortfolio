import Link from "next/link";
import styles from "./SideNav.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaExternalLinkAlt,
  FaMedium,
  FaNode,
  FaLinkedin,
} from "react-icons/fa";

const SideNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideNav}>
        <div className={styles.navHeader}>
          <h1>
            Hello, I&apos;m <br /> Olamiji Badmos.
          </h1>
          <p>
            As a dedicated front-end developer, my goal is to create engaging
            and user-friendly digital experiences. My journey in web development
            is a mix of creativity, innovation, and a constant drive for
            excellence. Beyond coding, I extend my love for technology by
            sharing computer-related knowledge through the art of writing,
            contributing to a community where insights thrive.
          </p>
        </div>

        <nav className={styles.dNav}>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span>01</span>
                  <div className={styles.btnNavLine}></div>
                  <span>Projects</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="Resume">
                <a>
                  <span>02</span>
                  <div className={styles.btnNavLine}></div>
                  <span>Resume</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="Articles">
                <a>
                  <span>03</span>
                  <div className={styles.btnNavLine}></div>
                  <span>Articles</span>
                </a>
              </Link>
            </li>
            {/* <li>
                            <Link href="Contact">
                                <a> 
                                    <span>02</span> 
                                    <div className={styles.btnNavLine}></div>
                                    <span>Contact</span>
                                </a>
                            </Link>
                        </li> */}
          </ul>
        </nav>

        <div className={styles.user}>
          <div className={styles.userImg}>
            <img src="/portfolio.jpeg" alt="User picture" />
          </div>
          <ul>
            <li>
              <p>
                <i>
                  <FaGithub />
                </i>
              </p>
              <a
                href="https://github.com/thebadmos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <p>
                <i>
                  <FaExternalLinkAlt />
                </i>
              </p>
            </li>
          </ul>
          {/* <ul>
            <li>
              <p>
                <i>
                  <FaMedium />
                </i>
              </p>
              <a
                href="https://medium.com/@thebadmos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
              <p>
                <i>
                  <FaExternalLinkAlt />
                </i>
              </p>
            </li>
          </ul> */}
          <ul>
            <li>
              <p>
                <i>
                  <FaNode />
                </i>
              </p>
              <a
                href="https://olamijibadmos.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hashnode
              </a>
              <p>
                <i>
                  <FaExternalLinkAlt />
                </i>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                <i>
                  <FaLinkedin />
                </i>
              </p>
              <a
                href="https://www.linkedin.com/in/olamijibadmos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        {/* <div className={styles.inspire}>
          <span>
            inspired by{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Devs
            </a>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default SideNav;
