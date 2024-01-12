import styles from "../styles/Resume.module.css";
import { FiDownloadCloud } from "react-icons/fi";
import { FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer/Footer";

const Resume = () => {
  const footerLinks = [
    {
      link: "/Work",
      title: "Projects",
      id: 1,
    },
    {
      link: "/Articles",
      title: "Articles",
      id: 2,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <div className={styles.userInfo}>
          <h1>Front-end Developer</h1>
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
                href="https://drive.google.com/file/d/1S2Zyy4YajsaYGWTeFJK-wXM4UyKkUMMB/view?usp=sharing"
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
          {/* <h4>
            Front-end Developer <hr />
          </h4> */}
      
          <p>
            As a front-end developer, I turn design ideas into engaging web
            experiences. I specialize in creating user-friendly interfaces with
            pixel-perfect precision. I&apos;m committed to enhancing user
            satisfaction and always ready to learn new technologies to tackle
            challenges head-on
          </p>
        </div>

        <div className={styles.template}>
          <h4>
            Technical Skills <hr />
          </h4>
          <p>
            • Front-end Technologies: React.js, Vue.js, React Native <br />
            • UI Libraries: Tailwind Css, Material-UI, Styled Component,
            Bootstrap <br />
            • State Management: Redux, Vuex <br /> • Web APIs: Fetch API, Axios{" "}
            <br />
            • Version Control: Git, GitHub <br /> • Testing: Jest, React Testing
            Library <br /> • Responsive Design: CSS Grid, Flexbox
          </p>
        </div>

        {/* <div className={styles.template}>
          <h4>
            Soft Skills <hr />
          </h4>
          <p>
            • Collaboration: Ability to collaborate with cross-functional teams
            to achieve project goals. <br />
            • Problem Solving: Addressing UI challenges creatively, whilst
            enhancing the user experience and platform functionality. <br />
            • Communication: Adept at conveying technical concepts to
            non-technical stakeholders and team members, fostering clear
            understanding. <br />
            • Attention to Detail: Meticulously implementing design
            specifications, ensuring pixel-perfect front-end rendering. <br />
            • Adaptability: Embracing new technologies and methodologies to stay
            up-to-date in the dynamic frontend landscape. <br />• Time
            Management: Managing tasks and deadlines efficiently. Accurately
            maintaining code quality and project delivery standards.
          </p>
        </div> */}
        {/* <div className={styles.template}>
          <h4>
            Experience <hr />
          </h4>
          <h4>
            Logikeep Africa - <span>Front-end developer</span>
          </h4>
          <p>June 2022 - Present </p>

          <h6> Project Description</h6>
          <p>
            LogiKeep is a subscription-based bookkeeping application
            meticulously tailored for small and medium enterprises. Beyond
            conventional inventory management capabilities, the software flaunts
            an array of exceptional features. These include automated SMS
            notifications to debtors, seamless integration of virtual bank
            accounts, and an innovative points-based system that drives user
            engagement. This points system rewards users based on their
            application usage frequency, allowing them to amass points
            convertible into call airtime.
          </p>
          <h6> Role</h6>
          <p>
            In the LogiKeep project, I undertook pivotal roles as the Tech Lead
            and Front-end Developer. As the Tech Lead, I orchestrated the
            intricate technical facets of the project, ensuring the efficient
            coordination of our team&apos;s endeavors. Simultaneously, as the
            Front-end Developer, I assumed the mantle of designing and
            implementing the user interface, cultivating a seamless and
            user-friendly experience for our esteemed clients. My contributions
            spanned the entirety of the development lifecycle — from
            conceptualization to implementation — and I played a central role in
            transforming the application&apos;s innovative features into an
            engaging front-end.
          </p>
          <h6> Result</h6>
          <p>
            LogiKeep&apos;s launch surpassed expectations, gaining significant
            traction within its inaugural week. Our free trial mode saw a
            remarkable onboarding of over 200 users, with an impressive 65%
            actively engaging with the application. The positive reception
            underscored the efficacy of our front-end design and the appeal of
            the features we integrated, including the innovative points-based
            system. This initial success validates LogiKeep&apos;s potential to
            evolve into an indispensable tool for small and medium enterprises,
            offering efficient and innovative bookkeeping solutions.
          </p>

       

          <h4>
            Summa Logix - <span>Front-end developer</span>
          </h4>
          <p>October 2022 – August 2023 </p>

          <h6> Project Description</h6>
          <p>
            Siyonna is an expansive ecommerce software that serves as an online
            marketplace, fostering connections between buyers and sellers. The
            platform offers tailored experiences for both user groups, with
            advanced features including seller-specific tools, secure payment
            mechanisms, and real-time transaction monitoring. Siyonna empowers
            users to register as buyers, sellers, or both, enabling a customized
            and secure ecommerce experience.
          </p>
          <h6> Role</h6>
          <p>
            As a key member of the front-end team for the Siyonna project, I
            played a pivotal role in shaping the user interface and overall user
            experience. Leveraging the power of the Vue.js framework, I
            skillfully translated the project&apos;s vision into a functional
            and visually appealing application. My responsibilities included
            meticulous design implementation and the integration of key
            front-end features. I worked collaboratively with backend developers
            and designers to ensure seamless integration of functionalities and
            aesthetics. Through dedicated teamwork and proficient coding, I
            played a significant role in bringing Siyonna&apos;s frontend to
            life.
          </p>
          <h6> Result</h6>
          <p>
            Siyonna&apos;s successful launch and live deployment mark a
            significant achievement in the realm of online marketplaces. The
            robust architecture and user-centric design have manifested in
            seamless interactions between buyers and sellers. The introduction
            of innovative features, including the dual-factor authenticator
            monitoring mode and the confirmation button for product delivery,
            has instilled a sense of trust and convenience among users.
            Siyonna&apos;s deployment underscores the trajectory toward
            establishing a vibrant and efficient online marketplace, poised for
            further enhancements and extended implementation in the future.
          </p>
        </div> */}

        {/* <div className={styles.template}>
          <h4>
            Education
            <hr />
          </h4>
          <h4>Babcock University — Bsc. Computer Science</h4>
          <p>2014 - 2018</p>
          <h6>
            At Babcock University I garnered the knowledge and skills necessary
            to excel in the dynamic field of computer science and frontend
            development. During this time, I solidified my passion for creating
            user-centric experiences and innovative solutions in the digital
            realm.
          </h6>
        </div> */}
      </div>
      <div className={styles.footerlinks}>
        <Footer footerLinks={footerLinks} />
      </div>
    </div>
  );
};

export default Resume;
