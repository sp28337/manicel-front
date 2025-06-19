import styles from "../styles/footer.module.css"
import commonStyles from "../styles/common.module.css"
import { ManicelLogoSVG, WBLogoSVG } from "./vectors"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={`${styles.footer} ${commonStyles.container}`}>
                <nav className={styles.footerNav}>
                    <div className={styles.navigation}>
                        <div>
                            <h3 className={styles.h3}>навигация</h3>
                            <div className={styles.linksWrapper}>
                                {/* <Link className={styles.footerLink} href=""> */}
                                    <p style={{color: "#747474"}}>
                                        о нас
                                    </p>
                                {/* </Link> */}
                                <Link 
                                    className={styles.footerLink} 
                                    href="/catalog"
                                >
                                    каталог
                                </Link>
                                <a 
                                    className={styles.footerLink} 
                                    href="https://www.wildberries.ru/brands/310747490-manicel"
                                >
                                    магазин
                                </a>
                            </div>
                        </div>
                        
                        <div id="documents" className={styles.documents}>
                            <h3 className={styles.h3}>документы</h3>
                            <div className={styles.linksWrapper}>
                                
                                <Link 
                                    className={styles.footerLink} 
                                    href="/agreement#contacts"
                                >
                                    контакты
                                </Link>
                                <Link 
                                    className={styles.footerLink}
                                    href="/agreement"
                                >
                                    пользовательское соглашение
                                </Link>
                                <Link 
                                    className={styles.footerLink} 
                                    href="/privacy"
                                >
                                    политика конфиденциальности
                                </Link>
                            </div>
                        </div>
                    </div>
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