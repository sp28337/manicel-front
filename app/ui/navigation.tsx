"use client"

import Link from "next/link"
import styles from "../styles/nav.module.css"
import commonStyles from "../styles/common.module.css"
import { Search } from "./search"
import { useState, Suspense } from "react"
import { ManicelLogoSVG, SearchSVG } from "./vectors"
import { PopupMenu } from "./popup"

export const Navigation = () => {
    
    const [isOpen, setIsOpen] = useState(false)
  
    return (
        <nav className={`${styles.navWrapper}`}>
            <div className={`${styles.backgroundNav}`}></div>
            <div className={`${styles.nav} ${commonStyles.container}`}>
                <Link 
                    className={styles.logo}
                    href="/"
                    onClick={() => {window.location.href = "/"}}
                >
                    <ManicelLogoSVG />
                </Link>
                { !isOpen &&
                    <>
                        <div className={styles.links}>
                            <Link href="#" className={styles.navLink}>
                                <p>O НАС</p>
                            </Link>
                            <Link href="/catalog" className={styles.navLink}>
                                <p>КАТАЛОГ</p>
                            </Link>
                            <Link href="#contacts" className={styles.navLink}>
                                <p>КОНТАКТЫ</p>
                            </Link>
                        </div>
                        <a 
                            className={styles.wblink} 
                            href="https://www.wildberries.ru/brands/310747490-manicel"
                        >
                            МАГАЗИН
                        </a>               
                        <button 
                            className={styles.searchButton} 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <SearchSVG />
                        </button>  
                    </>
                }
                <Suspense fallback={<div>Loading...</div>}>
                    <Search placeholder="Поиск..." isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}/>
                </Suspense>
                <PopupMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </nav>
    )
}