import styles from "./Header.module.css";
import { Button } from "../Button/Button";


export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navWrapper}>
                    <div className={styles.navBody}>
                        <ul className={`${styles.navList} d-flex`}>
                            <li className={`${styles.navItem} txt-props`}>
                                <a href="#">Home</a>
                            </li>
                            <li className={`${styles.navItem} txt-props`}>
                                <a href="#profile">Profile</a>
                            </li>
                            <li className={`${styles.navItem} txt-props`}>
                                <a href="#experience">Experience</a>
                            </li>
                            <li className={`${styles.navItem} txt-props`}>
                                <a href="#skills">Skills</a>
                            </li>
                            <li className={`${styles.navItem} txt-props`}>
                                <a href="#education">Education</a>
                            </li>
                            <li className={`${styles.navItem} txt-props`}>
                                <a href="#certifications">Certifications</a>
                            </li>
                        </ul>
                        <div className={styles.contactBtn}>
                            <Button name="Contact Me" href="#contact" alt="search" icon="/person.svg" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;