import React from "react";
import { useState } from "react";
import styles from "./Work1.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Work1 = () => {
  const [works, setWorks] = useState([
    {
      title: "LogiKeep",
      tools: "ReactJs, Redux, Tailwind Css, Styled Component, API Integration",
      description:
        "Logikeep stands as a testament to my commitment to innovation and dedication to empowering businesses. As a trusted ally, Logikeep streamlines and enhances bookkeeping processes, offering simplicity and efficiency.",
      live: "https://logikeep.africa/",
      // code: "https://github.com/thebadmos/logikeep",
      id: 13,
    },

    {
      title: "eShopAfrica",
      tools: "ReactJs, Styled Component, API Integration",
      description:
        "Bringing international shopping to your doorstep anywhere in Africa. The project is dedicated to bridging borders and bringing the world of online shopping to your fingertips.",
      live: "https://eshopafrica.co/",
      // code: "https://github.com/thebadmos/thebadmos",
      id: 2,
    },

    {
      title: "Labour Market",
      tools: "ReactJs, Redux, API Integration ",
      description:
        "LabourMarket is a dynamic initiative designed to seamlessly bridge the gap between job seekers and employers. This platform is crafted to empower employers in finding the right talent and individuals in discovering rewarding job opportunities.",
      live: "https://labour-market.vercel.app/",
      // code: "https://github.com/thebadmos/ttis-website",
      id: 3,
    },

    {
      title: "AddGoals",
      tools: "React Native, CSS ",
      description:
        "This project was a personal exploration, aimed at mastering React Native. With AddGoals, users can effortlessly add their goals. ",
      live: "https://github.com/thebadmos/addgoals",
      // code: "https://github.com/thebadmos/ttis-website",
      id: 4,
    },
    {
      title: "TTIS",
      tools: "ReactJs, Tailwind CSS",
      description:
        "The TTIS company website represents a successful collaboration between technology, design, and mission-driven values. It stands as a digital embodiment of TTIS's dedication to pioneering DNA technology and promoting inclusivity within the tech community.",
      live: "https://www.ttis.tech/",
      // code: "https://github.com/thebadmos/ttis-website",
      id: 16,
    },
  ]);

  const footerLinks = [
    {
      link: "/",
      title: "Home",
      id: 1,
    },
    {
      link: "/Resume",
      title: "Resume",
      id: 2,
    },
    {
      link: "/Articles",
      title: "Articles",
      id: 3,
    },
  ];

  return (
    <div className={styles.works}>
      {works.map((work) => (
        <div className={styles.workCard} key="index">
          <div className={styles.card}>
            <h2>{work.title}</h2>

            <p>{work.description}</p>
        
            <h4>{work.tools}</h4>
            <ul className={styles.links}>
              <li>
                <i>
                  <BsFillEyeFill />
                </i>
                <a href={work.live} target="_blank" rel="noopener noreferrer">
                  live
                </a>
              </li>
              {/* <li>
                <i>
                  <FaLink />
                </i>
                <a href={work.code} target="_blank" rel="noopener noreferrer">
                  code
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      ))}
      <div className={styles.footerlinks}>
        <Footer footerLinks={footerLinks} />
      </div>
    </div>
  );
};

export default Work1;
