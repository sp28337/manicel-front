'use client'

import Image from "next/image";
import styles from '../../styles/bestsellers.module.css';
import raspberryWebp from "../../../../public/raspberry.webp";
import mangoWebp from "../../../../public/mango.webp";
import mintWebp from "../../../../public/mint.webp";
import coconutWebp from "../../../../public/coconut.webp";
import bubblegumWebp from "../../../../public/bubblegum.webp";
import caramelWebp from "../../../../public/caramel.webp";
import lavenderWebp from "../../../../public/lavender.webp";
import { useState } from "react";
import { Scrubs } from "./bestsellers/Scrubs";
import { Sets } from "./bestsellers/Sets";

export const Bestsellers = () => {
    
    // const data = await fetch('http://0.0.0.0:8001/products/bestsellers')
    // const bestsellers = await data.json()
    // {console.log(bestsellers)}

    let [showScrubs, setShowScrubs] = useState(true);

    return (
        <div className={styles.bestsellersWrapper}>
            <h1 className={styles.h1}>бестселлеры</h1>
            <div className={styles.tabsWrapper}>
                <button className={`${styles.button} ${showScrubs ? styles.false : styles.true}`} onClick={() => setShowScrubs(true)}>скраб</button>
                <button className={`${styles.button} ${showScrubs ? styles.true : styles.false}`} onClick={() => setShowScrubs(false)}>наборы</button>
            </div>

            {showScrubs ? <Scrubs /> : <Sets />}
            {/* <div className={styles.bestsellersGrid}>
                {products.map((product, index) => (
                <div key={index} className={styles.productItem}>
                    <Image className={styles[`${product.name}`]} src={product.image} alt={product.imgDescription} />
                    <div className={styles.infoContainer}>
                        <h3 className={`${styles.h3}`}>{product.name}</h3>
                        <p className={styles.p}>{product.description}</p>
                        <div className={styles.rating}>
                            <svg width="96" height="20" viewBox="0 0 96 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.99996 14.375L4.85671 17.5163L6.25496 11.6538L1.67871 7.73375L7.68559 7.2525L9.99996 1.6875L12.3143 7.2525L18.3221 7.73375L13.745 11.6538L15.1432 17.5163L9.99996 14.375Z" fill="#4A4A4A"/>
                                <path d="M29 14.375L23.8567 17.5163L25.255 11.6538L20.6787 7.73375L26.6856 7.2525L29 1.6875L31.3143 7.2525L37.3221 7.73375L32.745 11.6538L34.1432 17.5163L29 14.375Z" fill="#4A4A4A"/>
                                <path d="M48 14.375L42.8567 17.5163L44.255 11.6538L39.6787 7.73375L45.6856 7.2525L48 1.6875L50.3143 7.2525L56.3221 7.73375L51.745 11.6538L53.1432 17.5163L48 14.375Z" fill="#4A4A4A"/>
                                <path d="M67 14.375L61.8567 17.5163L63.255 11.6538L58.6787 7.73375L64.6856 7.2525L67 1.6875L69.3143 7.2525L75.3221 7.73375L70.745 11.6538L72.1432 17.5163L67 14.375Z" fill="#4A4A4A"/>
                                <path d="M86 14.375L80.8567 17.5163L82.255 11.6538L77.6787 7.73375L83.6856 7.2525L86 1.6875L88.3143 7.2525L94.3221 7.73375L89.745 11.6538L91.1432 17.5163L86 14.375Z" fill="#4A4A4A"/>
                            </svg>
                            <span className={styles.span}>4.8 (4 617)</span>
                        </div>
                    </div>
                    <div className={styles.composition}>
                        <h3 className={`${styles.h3}  ${index !== 0 && styles.h3Hide}`}>Состав</h3>
                        <p className={styles.p}>{product.ingredients}</p>
                    </div>
                </div>
                ))}
            </div> */}

        </div>
    )
}
