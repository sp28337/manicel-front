'use client'

import styles from '../../styles/bestsellers.module.css';
import { useState } from "react";
import { Scrubs } from "./bestsellers/Scrubs";
import { Sets } from "./bestsellers/Sets";

export const Bestsellers = () => {
    
    let [showScrubs, setShowScrubs] = useState(true);

    const handleClick = () => {
        setShowScrubs(!showScrubs);
    }

    return (
        <div className={styles.bestsellersWrapper}>
            <h1 className={styles.h1}>
                бестселлеры
            </h1>

            <div className={styles.tabsWrapper}>
                <button 
                    className={`${styles.button} ${showScrubs ? styles.false : styles.true}`} 
                    onClick={handleClick}
                >
                    скраб
                </button>
                <button 
                    className={`${styles.button} ${showScrubs ? styles.true : styles.false}`} 
                    onClick={handleClick}
                >
                    наборы
                </button>
            </div>

            {showScrubs ? <Scrubs /> : <Sets />}
        </div>
    )
}
