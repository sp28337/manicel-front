import styles from "../styles/footer.module.css"
import commonStyles from "../styles/common.module.css"
import { ManicelLogoSVG } from "./vectors"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className={`${styles.footer} ${commonStyles.container}`}>
            <div className={styles.logoWrapper}>
                <ManicelLogoSVG />
            </div>
            <nav className={styles.footerNav}>
                <div>
                    <h3 className={styles.h3}>навигация</h3>
                    <div className={styles.linksWrapper}>
                        {/* <Link className={styles.footerLink} href=""> */}
                            <p style={{color: "#747474"}}>
                                о нас
                            </p>
                        {/* </Link> */}
                        <Link className={styles.footerLink} href="/catalog">каталог</Link>
                        <a 
                            className={styles.footerLink} 
                            href="https://www.wildberries.ru/brands/310747490-manicel"
                        >
                            в магазин
                        </a>
                    </div>
                </div>
                <div id="documents">
                    <h3 className={styles.h3}>документы</h3>
                    <div className={styles.linksWrapper}>
                        <Link href="/privacy">
                            политика конфиденциальности
                        </Link>
                        <Link href="/agreement#contacts">
                            контакты
                        </Link>
                        <Link href="#">
                            пользовательское соглашение
                        </Link>
                        {/* <a href="">+7-(920)-941-53-89</a>
                        <a className={styles.email} href="">rejx.nikita@bk.ru</a>
                        <address className={styles.address}>г. Вязники, ул Сенькова, д 9/8</address> */}
                    </div>
                </div>
            </nav>
            <div className={styles.contactUsButtonWrapper}>
                <a className={styles.contactUsButton}
                    href="mailto:rejx.nikita@bk.ru"
                >
                    связаться с нами
                </a>
            </div>
        </footer>
    )
}