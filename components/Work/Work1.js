import React from "react";
import { useState } from "react";
import styles from "./Work1.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Work1 = () => {
  const [works, setWorks] = useState([
    {
      title: "TodayToday",
      tools: "ReactJs, Tailwind Css, API",
      description: "Online marketplace that provides buyers and sellers with an avenue to meet and exchange goods and services",
      live: "https://today-today.vercel.app/",
      code: "https://github.com/thebadmos/TodayToday",
      id: 12,
    },

    {
      title: "LogiKeep",
      tools: "ReactJs, Tailwind Css, API",
      description: "A Book-keeping Application",
      live: "https://logikeep.vercel.app/",
      code: "https://github.com/thebadmos/logikeep",
      id: 13,
    },
    
    {
      title: "Portfolio",
      tools: "Nextjs, CSS",
      description: "A portfolio website showcasing my works and resume.",
      live: "#",
      code: "https://github.com/thebadmos/thebadmos",
      id: 1,
    },

    {
      title: "eShopAfrica",
      tools: "ReactJs, Tailwind Css, API",
      description: "Bringing international shopping to your doorstep anywhere in Africa",
      live: "https://eshopafrica.vercel.app/",
      code: "https://github.com/thebadmos/thebadmos",
      id: 2,
    },

    {
      title: "MijiStore",
      tools: "React, Boostrap, API",
      description:
        "Built an E-commerce website which makes shopping easier",
      live: "https://mijistore.netlify.app/",
      code: "https://github.com/thebadmos/MijiStore",
      id: 3,
    },

    {
      title: "DealPot",
      tools: "HTML, CSS, JS, Web Scraping",
      description:
        "An online application which seeks to reduce the time shoppers spend in finding the best deal",
      live: "https://dealpot.herokuapp.com/",
      code: "https://github.com/thebadmos/dealpot",
      id: 4,
    },

    {
      title: "Eazy Search",
      tools: "React, API",
      description:
        "A go2go search application linking subcribed users to github",
      live: "https://eazy-search.herokuapp.com/",
      code: "https://github.com/thebadmos/eazysearch",
      id: 5,
    },

    {
      title: "Admin Dashboard",
      tools: "React, Styled-components, Redux, API",
      description: "A dashboard that showcases the administrative UI of an application (In Progress)",
      live: "#",
      code: "#",
      id: 6,
    },
    {
      title: "Weather App",
      tools: "React, Context API",
      description: 
      "A Progressive web App that displays weather condition in Countries(Capital) all around the world",
      live: "https://wea-apps.netlify.app/",
      code: "https://github.com/thebadmos/weatherApp",
      id: 7,
    },

    {
      title: "UI inspiration",
      tools: "React, Styled-components",
      description:
        "A landing page for a UI insipiration",
      live: "https://uinspiration.netlify.app/",
      code: "https://github.com/thebadmos/uinspiration",
      id: 8,
    },

    {
      title: "Sales Report",
      tools: "React, Styled-components, API",
      description: "A Snippet landing page for a sales report",
      live: "https://salesreport-skyhigh.netlify.app/",
      code: "https://github.com/thebadmos/SalesReport",
      id: 9,
    },

    {
      title: "Trulogistics",
      tools: "HTML, SASS, JavaScript ",
      description: "A logistics website",
      live: "https://logisticstruckka.netlify.app/",
      code: "https://github.com/thebadmos/truckLogistics",
      id: 10,
    },

    {
      title: "Truspace",
      tools: "HTML, CSS, JS",
      description: "A co-working website built with pure HTML,CSS and JS",
      live: "https://truspaceco.netlify.app/",
      code: "https://github.com/thebadmos/coWorking",
      id: 11,
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
  ];

  return (
    <div className={styles.works}>
      {works.map((work) => (
        <div className={styles.workCard} key="index">
          <div className={styles.card}>
            <h2>{work.title}</h2>
            <h3>{work.tools}</h3>
            <p>{work.description}</p>
            <ul className={styles.links}>
              <li>
                <i>
                  <BsFillEyeFill />
                </i>
                <a href={work.live} target="_blank" rel="noopener noreferrer">
                  live
                </a>
              </li>
              <li>
                <i>
                  <FaLink />
                </i>
                <a href={work.code} target="_blank" rel="noopener noreferrer">
                  code
                </a>
              </li>
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
