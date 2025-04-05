import styles from "../../styles/footer.module.css"
import commonStyles from "../../styles/common.module.css"
import { Logo } from "../header/nav/Logo";

export const Footer = () => {
    return (
        <footer className={`${styles.footer} ${commonStyles.container}`}>
            <div className={styles.logoWrapper}>
                <Logo />
            </div>
            <div className={styles.footerNav}>
                <div>
                    <h3 className={styles.h3}>навигация</h3>
                    <div className={styles.linksWrapper}>
                        <a className={styles.footerLink} href="">о нас</a>
                        <a className={styles.footerLink} href="">каталог</a>
                        <a className={styles.footerLink} href="">доставка и оплата</a>
                        <a className={styles.footerLink} href="">где купить</a>
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