"use client"

import Link from "next/link"
import styles from "../styles/popup-menu.module.css"
import { useState } from "react"
import { createPortal } from "react-dom"
import { logout } from "../actions/auth"
import { 
    BurgerSVG,
    HomepageSVG,
    LogoutSVG,
    StoreSVG,
    InfoSVG,
    ShopSVG,
    ProfileSVG,
    LoginSVG
 } from "./vectors"

export const PopupMenu = (
    { isLoggedIn }: 
    { isLoggedIn: boolean }
) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const closeMenu = () => {
        setIsPopupOpen(false)
    }

    return (
        <> 
            <button className={styles.burger} onClick={() => setIsPopupOpen((isPopupOpen) => !isPopupOpen)}>
                <BurgerSVG />
            </button>
            {
                isPopupOpen && createPortal(
                    <nav id="menu" className={styles.popupMenu} onClick={closeMenu}>
                        <div className={styles.links}>
                            <Link href="/" className={styles.navLink}>
                                <span className={styles.icon}>
                                    <HomepageSVG />
                                </span>
                                <p>ГЛАВНАЯ</p>
                            </Link>
                            <Link href="/catalog" className={styles.navLink}>
                                <span className={styles.icon}>
                                    <StoreSVG />
                                </span>
                                <p>КАТАЛОГ</p>
                            </Link>
                            <Link href="/agreement#contacts" className={styles.navLink}>
                                <span className={styles.icon}>
                                    <InfoSVG />
                                </span>
                                <p>КОНТАКТЫ</p>
                            </Link>
                            <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.navLink}>
                                <span className={styles.icon}>
                                    <ShopSVG color="#000" h={15} w={15}/>
                                </span>
                                <p>МАГАЗИН</p>
                            </a>
                            { isLoggedIn            ? 
                                <Link
                                    href="/user/1"
                                    className={styles.navLink} 
                                >
                                <span className={styles.icon}>
                                    <ProfileSVG color="#000" h={15} w={15} />
                                </span>
                                <p>ПРОФИЛЬ</p>
                                </Link>    
                                                    :
                                <Link
                                    href="/login"
                                    className={styles.navLink} 
                                >
                                    <span className={styles.icon}>
                                        <LoginSVG />
                                    </span>
                                    <p>ВХОД</p>
                                </Link>
                            }
                            { isLoggedIn  &&
                                <button className={styles.navLink} onClick={() => {logout()}}>
                                    <span className={styles.icon}>
                                        <LogoutSVG />
                                    </span>
                                    <p>ВЫХОД</p>
                                </button>
                            }
                        </div>
                    </nav>
                    , document.body
                )
            }
        </>
    )
}