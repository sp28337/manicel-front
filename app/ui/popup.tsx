"use client"

import Link from "next/link"
import styles from "../styles/popup-menu.module.css"
import { useState } from "react"
import { createPortal } from "react-dom"
import { 
    BurgerSVG,
    HomepageSVG,
    StoreSVG,
    ShopSVG,
 } from "./vectors"

export const PopupMenu = () => {
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
                            <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.navLink}>
                                <span className={styles.icon}>
                                    <ShopSVG color="#000" h={15} w={15}/>
                                </span>
                                <p>МАГАЗИН</p>
                            </a>
                        </div>
                    </nav>
                    , document.body
                )
            }
        </>
    )
}