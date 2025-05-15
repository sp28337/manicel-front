"use client"

import Link from "next/link"
import styles from "../styles/popup-menu.module.css"
import { useState } from "react"
import { createPortal } from "react-dom"
import { BurgerSVG } from "./vectors"

export const PopupMenu = (
    { isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (value: boolean) => void }
) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const closeMenu = () => {
        setIsPopupOpen(false)
    }

    return (
        <> 
            { !isOpen && 
                <button className={styles.burger} onClick={() => setIsPopupOpen((isPopupOpen) => !isPopupOpen)}>
                    <BurgerSVG />
                </button>
            }
            {
                isPopupOpen && createPortal(
                    <div className={styles.popupMenu} onClick={closeMenu}>
                        <div className={styles.links}>
                            <Link href="/" className={styles.navLink}>
                                <p>ГЛАВНАЯ</p>
                            </Link>
                            {/* <Link href="#" className={styles.navLink}> */}
                                <p style={{color: "#747474"}}>O НАС</p>
                            {/* </Link> */}
                            <Link href="/catalog" className={styles.navLink}>
                                <p>КАТАЛОГ</p>
                            </Link>
                            <Link href="#contacts" className={styles.navLink}>
                                <p>КОНТАКТЫ</p>
                            </Link>
                            <button 
                                className={styles.navLink} 
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <p>ПОИСК</p>
                            </button>
                            <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.navLink}>
                                <p>В МАГАЗИН</p>
                            </a>
                        </div>
                    </div>
                    , document.body
                )
            }
        </>
    )
}