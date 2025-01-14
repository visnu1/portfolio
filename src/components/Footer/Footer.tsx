import styles from "@/styles/Home.module.css";
import Image from "next/image";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className={styles.img}
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Learn
            </a>
            <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className={styles.img}
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                Examples
            </a>
            <a
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className={styles.img}
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                Go to nextjs.org →
            </a>
        </footer>
    )
}

export default Footer;