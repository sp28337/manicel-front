"use client"

import Link from "next/link"
import styles from "../styles/popup-menu.module.css"
import { createPortal } from "react-dom"
import { BurgerSVG } from "./vectors"
import { useMyPopupContext } from "./contexts"

export const PopupMenu = () => {

    const context = useMyPopupContext()
    const { open, switchOpen } = context

    return (
        <> 
            <button className={styles.burger} onClick={switchOpen} >
                <BurgerSVG />
            </button>
            {
                open && createPortal(
                    <div className={styles.popupMenu} onClick={switchOpen}>
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
                                // onClick={() => setOpen(!open)}
                            >
                                <p>ПОИСК</p>
                            </button>
                            <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.navLink}>
                                <p>В МАГАЗИН</p>
                            </a>
                        </div>
                    </div>
                    , document.getElementById("menu")!
                )   
            }
        </>
    )
}