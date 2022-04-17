import styles from "../styles/Resume.module.css";
import { FiDownloadCloud } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const Resume = () => {
  const footerLinks = [
    {
      link: "/Work",
      title: "Work",
      id: 1,
    },
    // {
    //   link: "/Contact",
    //   title: "Contact",
    //   id: 2,
    // },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.userInfo}>
          <h1>Olamiji Badmos</h1>
          <ul className={styles.download}>
            <li>
              <a
                href="mailto:badmosolamiji@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FaEnvelope />
                </i>
                <span>Mail</span>
              </a>
            </li>
            
            <li>
              <a
                href="https://docs.google.com/document/d/1RSEx5hRJ9pqsqC9ZQ3rCfJxdo09vKlVA2GNg1DwB9ks/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <FiDownloadCloud />
                </i>
                <span>Download</span>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.template}>
          <h4>
            Front-end Developer <hr />
          </h4>
          <p>
            I am a Frontend Developer with a passion for building
            web applications, with great user interface and user experience. 
          </p>
        </div>

        <div className={styles.template}>
          <h4>
            Technologies <hr />
          </h4>
          <p>
            HTML, CSS, Javascript, React Js, Next Js,  Vue Js, Sass,
            Styled-components.
          </p>
        </div>

        <div className={styles.template}>
          <h4>
            Familiar With <hr />
          </h4>
          <p>NodeJs, Express, MongoDb, WordPress.</p>
        </div>

        <div className={styles.template}>
          <h4>
            Frameworks <hr />
          </h4>
          <p>Ant Design, Semantic UI, Tailwind CSS, Bootstrap.</p>
        </div>
        <div className={styles.template}>
          <h4>
            Experience <hr />
          </h4>
          <h4>
            Xrubicon Solutions Limited - <span>Front-end developer</span>
          </h4>
          <p>April 2022 - Present</p>
          <p>
            I contributed to building user interface for the company&apos;s products.
          </p>
          <ul>
            <li>
              <p>
                - Worked with React and CSS-in-Js to build custom components
              </p>
            </li>
            <li>
              <p>- Handled complex state management using react hooks</p>
            </li>
            <li>
              <p>
                - Leveraging responsive web frameworks to consistently complete product 
                  deliverables
              </p>
            </li>
          </ul>
          
          <h4>
            Truckka Logistics Limited - <span>Project Technology Officer</span>
          </h4>
          <p>April 2021 - August 2021</p>
          <p>
           Translate designs to front-end code, estimate project time and costs.
          </p>
          <ul>
            <li>
              <p>
                - Developed and implemented software solutions based on client requirements
              </p>
            </li>
            <li>
              <p>- Designs and creates responsive web solutions to solve pain points for various 
               clients.</p>
            </li>
          </ul>


          <h4>
            Stutern Accelerator Program - <span>Front-end developer</span>
          </h4>
          <p>December 2019 - November 2020</p>
          <p>
          Formulated optimal solutions through extensive research into relevant technologies, existing code base and open-source libraries.
          </p>
          <ul>
            <li>
              <p>
                - Exposed to a breadth of new and challenging tasks that contributed to the 
                     web application.
              </p>
            </li>
            <li>
              <p>- Developed fully functional responsive prototypes.</p>
            </li>
          </ul>
        </div>

        <div className={styles.template}>
          <h4>
            Education
            <hr />
          </h4>
          <h4>
            Babcock University — Bsc. Computer Science
          </h4>
          <p>2014 - 2018</p>
        </div>
      </div>
      <div className={styles.footerlinks}>
        <Footer footerLinks={footerLinks} />
      </div>
    </div>
  );
};

export default Resume;
