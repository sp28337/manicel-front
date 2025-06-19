"use client"

import { useState } from "react"
import styles from "../../styles/agreement.module.css"
import Link from "next/link"
import { MoreSVG } from "../vectors"

export function AgreementAside() {

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
                            2. Предмет соглашения
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section3"
                        >
                            3. Регистрация
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section4"
                        >
                            4. Права и обязанности Администратора
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section5"
                        >
                            5. Права и обязанности Пользователя
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section6"
                        >
                            6. Ограничение ответственности Администратора
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section7"
                        >
                            7. Доступ к ресурсам третьих лиц
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section8"
                        >
                            8. Использование информации, хранящейся на стороне браузера
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section9"
                        >
                            9. Согласие на обработку персональных данных
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#section10"
                        >
                            10. Изменение условий и расторжение договора
                        </Link>
                    </li>
                    <li onClick={() => {setIsOpen(!isOpen)} } className={styles.menuItem} >
                        <Link 
                            className={styles.menuLink} 
                            href="#contacts"
                        >
                            11. Информация об Администраторе
                        </Link>
                    </li>
                </ol>
                <div className={styles.menuListGradient}></div>
            </aside>
        </>
    )
}