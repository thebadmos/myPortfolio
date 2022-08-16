import Link from "next/link";
import styles from './SideNav.module.css';
import { FaEnvelope, FaGithub, FaExternalLinkAlt, FaMedium, FaNode } from "react-icons/fa";


const SideNav = () => {

    return (
        <div className={styles.container}>
            <div className={styles.sideNav}>
                <div className={styles.navHeader}>
                    <h1>Hello, I&apos;m <br/> Olamiji Badmos.</h1>
                    <p>I am a Frontend Developer. I create accessible and intuitive web applications by using modern web technologies.
                        I am currently exploring the decentralized web and technical writing.</p>
                </div>

                <nav className={styles.dNav}>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    <span>00</span>  
                                    <div className={styles.btnNavLine}></div>
                                    <span>Work</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="Resume">
                                <a> 
                                    <span>01</span>
                                    <div className={styles.btnNavLine}></div>
                                    <span>Resume</span>
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
                    <div className={styles.userImg}><img src="/portfolio.jpeg" alt="User picture" /></div>
                    <ul>
                        <li>
                            <p><i><FaGithub /></i></p>
                            <a href="https://github.com/thebadmos"
                            target="_blank"
                            rel="noopener noreferrer">Github</a>
                            <p><i><FaExternalLinkAlt /></i></p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p><i><FaMedium /></i></p>
                            <a href="https://medium.com/@thebadmos"
                            target="_blank"
                            rel="noopener noreferrer">Medium</a>
                            <p><i><FaExternalLinkAlt /></i></p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p><i><FaNode /></i></p>
                            <a href="https://olamijibadmos.hashnode.dev/"
                            target="_blank"
                            rel="noopener noreferrer">Hashnode</a>
                            <p><i><FaExternalLinkAlt /></i></p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p><i><FaEnvelope /></i></p>
                            <a href="mailto:badmosolamiji@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">Mail</a>
                            <p><i><FaExternalLinkAlt /></i></p>
                        </li>
                    </ul>
                </div>

                <div className={styles.inspire}>
                <span>inspired by <a href="#"
                target="_blank"
                rel="noopener noreferrer"
                >Devs</a></span>
                </div>
            </div>
        </div>
    );
}
 
export default SideNav;