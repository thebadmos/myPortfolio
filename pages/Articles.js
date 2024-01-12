import styles from "../styles/Resume.module.css";
import { FiLink } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const Articles = () => {
  const footerLinks = [
    {
      link: "/Work",
      title: "Projects",
      id: 1,
    },
    {
      link: "/Resume",
      title: "Resume",
      id: 2,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.userInfo}>
          <h1>Technical Writer</h1>
          <ul className={styles.download}>
            <li>
              <a
                href="https://olamijibadmos.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FiLink />
                </i>
                <span>Read Articles</span>
              </a>
            </li>

            {/* <li>
              <a
                href="https://drive.google.com/file/d/1S2Zyy4YajsaYGWTeFJK-wXM4UyKkUMMB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FiDownloadCloud />
                </i>
                <span>Download</span>
              </a>
            </li> */}
          </ul>
        </div>

        <div className={styles.template}>
          {/* <h4>
            Technical Writer <hr />
          </h4> */}

          <p>
            I&apos;m a passionate technical writer dedicated to simplifying
            computer-related knowledge through the art of writing. My mission is
            to make complex concepts accessible, easier, and engaging, offering
            valuable insights to readers.
          </p>
        </div>
      </div>
      <div className={styles.footerlinks}>
        <Footer footerLinks={footerLinks} />
      </div>
    </div>
  );
};

export default Articles;
