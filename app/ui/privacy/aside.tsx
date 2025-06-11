"use client"

import { useState } from "react"
import styles from "../../styles/privacy.module.css"
import Link from "next/link"
import { MoreSVG } from "../vectors"

export function Aside() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={styles.buttonOpenContainer}>
                <button
                    onClick={() => {setIsOpen(!isOpen)}}
                    className={`${styles.buttonOpen}`}
                >
                    <span className={isOpen ? styles.iconRotate : styles.icon}>
                        <MoreSVG />
                    </span>
                    <span>
                        оглавление
                    </span>
                </button>
            </div>
            <aside className={isOpen ? styles.menu : styles.closed}>
                <ol className={styles.menuList}>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section1"
                        >
                            1. Общие положения
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section2"
                        >
                            2. Обработка персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section3"
                        >
                            3. Порядок обработки персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section4"
                        >
                            4. Порядок передачи персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section5"
                        >
                            5. Порядок хранения персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section6"
                        >
                            6. Порядок уничтожения персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section7"
                        >
                            7. Порядок обеспечения безопасности персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section8"
                        >
                            8. Порядок обеспечения безопасности персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section9"
                        >
                            9. Порядок обеспечения безопасности персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section10"
                        >
                            10. Порядок обеспечения безопасности персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section11"
                        >
                            11. Порядок обеспечения безопасности персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section12"
                        >
                            12. Порядок обеспечения безопасности персональных данных
                        </Link>
                    </li>
                </ol>
                <div className={styles.menuListGradient}></div>
            </aside>
        </>
    )
}