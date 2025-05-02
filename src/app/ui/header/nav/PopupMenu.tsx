'use client'

import styles from '../../../styles/popup-menu.module.css'
import { useState } from "react";
import { createPortal } from "react-dom";

export const PopupMenu = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const closeMenu = () => {
        setIsPopupOpen(false);
    }

    return (
        <>
            <button className={styles.burger} onClick={() => setIsPopupOpen((isPopupOpen) => !isPopupOpen)}>
                <svg width="31" height="14" viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H30" stroke="#212121" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 7L30 7" stroke="#212121" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M1 13H30" stroke="#212121" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            {
                isPopupOpen && createPortal(
                    <div className={styles.popupMenu} onClick={closeMenu}>
                        <div className={styles.links}>
                            <a href="/" className={styles.navLink}>
                                <p>ГЛАВНАЯ</p>
                            </a>
                            <a href="/about" className={styles.navLink}>
                                <p>O НАС</p>
                            </a>
                            <a href="/catalog" className={styles.navLink}>
                                <p>КАТАЛОГ</p>
                            </a>
                            <a href="#contacts" className={styles.navLink}>
                                <p>КОНТАКТЫ</p>
                            </a>
                            <a href="" className={styles.navLink}>
                                <p>ПОИСК</p>
                            </a>
                            <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.navLink}>
                                <p>КУПИТЬ</p>
                            </a>
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