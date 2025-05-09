import styles from "../styles/footer.module.css"
import commonStyles from "../styles/common.module.css"
import { ManicelLogoSVG } from "./vectors";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className={`${styles.footer} ${commonStyles.container}`}>
            <div className={styles.logoWrapper}>
                <ManicelLogoSVG />
            </div>
            <div className={styles.footerNav}>
                <div>
                    <h3 className={styles.h3}>навигация</h3>
                    <div className={styles.linksWrapper}>
                        <Link className={styles.footerLink} href="">о нас</Link>
                        <Link className={styles.footerLink} href="">каталог</Link>
                        <Link className={styles.footerLink} href="">доставка и оплата</Link>
                        <Link className={styles.footerLink} href="">где купить</Link>
                    </div>
                </div>
                <div id="contacts" className={styles.contactsWrapper}>
                    <h3 className={styles.h3}>контакты</h3>
                    <div className={styles.linksWrapper}>
                        <a href="">+7 (999) 999-99-99</a>
                        <a className={styles.email} href="">example@example.com</a>
                        <address className={styles.address}>г. Москва, ул. Пушкина, д. 10</address>
                    </div>
                </div>
            </div>
            <div className={styles.contactUsButtonWrapper}>
                <a className={styles.contactUsButton}>
                    связаться с нами
                </a>
            </div>
        </footer>
    )
}