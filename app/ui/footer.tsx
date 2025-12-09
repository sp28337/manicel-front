import styles from "../styles/footer.module.css"
import commonStyles from "../styles/common.module.css"
import { ManicelLogoSVG, WBLogoSVG } from "./vectors"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={`${styles.footer} ${commonStyles.container}`}>
                <nav className={styles.footerNav}>
                    <div className={styles.partnersWrapper}>
                        <Link
                            title="Manicel" 
                            href="/"
                            scroll={true}
                        >
                            <ManicelLogoSVG />
                        </Link>
                        <a
                            title="Wildberries" 
                            href="https://www.wildberries.ru/brands/310747490-manicel"
                            className={styles.wbLogo}>
                            <WBLogoSVG />
                        </a>
                    </div>
                </nav>
                {/* <div className={styles.contactUsButtonWrapper}>
                    <a className={styles.contactUsButton}
                        href="mailto:rejx.nikita@bk.ru"
                    >
                        связаться с нами
                    </a>
                </div> */}
            </div>
        </footer>
    )
}