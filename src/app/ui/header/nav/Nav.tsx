'use client'

import Link from "next/link";
import styles from "../../../styles/nav.module.css";
import commonStyles from "../../../styles/common.module.css";

import { Search } from "../../Search";
import { useState } from "react";
import { Logo } from "./Logo";
import { PopupMenu } from "./PopupMenu";

export const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <nav className={`${styles.navWrapper}`}>
            <div className={`${styles.backgroundNav}`}></div>
            <div className={`${styles.nav} ${commonStyles.container}`}>
                <Logo />
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
                    </>

                }
                <Search placeholder="Поиск..." isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}/>
                <PopupMenu />
            </div>
        </nav>
    );
};