'use client'

import Image from "next/image";
import styles from '../../../styles/bestsellers.module.css';
import raspberryPng from "../../../../../public/raspberry-1200w.png";
import mangoPng from "../../../../../public/mango-1200w.png";
import mintPng from "../../../../../public/mint-1200w.png";
import coconutPng from "../../../../../public/coconut-1200w.png";
import bubblegumPng from "../../../../../public/bubblegum-1200w.png";
import caramelPng from "../../../../../public/caramel-1200w.png";
import lavenderPng from "../../../../../public/lavender-1200w.png";

export const Scrubs = () => {
     
    // const data = await fetch('http://0.0.0.0:8001/products/bestsellers')
    // const bestsellers = await data.json()
    // {console.log(bestsellers)}

    // const products = [
    //     {
    //         id: 1,
    //         name: "bubblegum",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
    //         rating: "",
    //         image: bubblegumPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     },
    //     {
    //         id: 2,
    //         name: "caramel",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло манго, масло авокадо, экстракт красный перец, масло ши, глицерин, витамин E, твин 80, отдушка манго",
    //         rating: "",
    //         image: caramelPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     },
    //     {
    //         id: 3,
    //         name: "lavender",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
    //         rating: "",
    //         image: lavenderPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     },
    //     {
    //         id: 4,
    //         name: "mint",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
    //         rating: "",
    //         image: mintPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     }
    // ]

    const products = [
        {
            id: 1,
            name: "raspberry",
            description: "Антицеллюлитный скраб для тела солевой с маслами",
            ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
            rating: "",
            image: raspberryPng,
            imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
        },
        {
            id: 2,
            name: "mango",
            description: "Антицеллюлитный скраб для тела солевой с маслами",
            ingredients: "морская соль, масло кокоса, масло манго, масло авокадо, экстракт красный перец, масло ши, глицерин, витамин E, твин 80, отдушка манго",
            rating: "",
            image: mangoPng,
            imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
        },
        {
            id: 3,
            name: "coconut",
            description: "Антицеллюлитный скраб для тела солевой с маслами",
            ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
            rating: "",
            image: coconutPng,
            imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
        },
        {
            id: 4,
            name: "mint",
            description: "Антицеллюлитный скраб для тела солевой с маслами",
            ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
            rating: "",
            image: mintPng,
            imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
        }
    ]

    return (
        <div className={`${styles.bestsellersGrid} ${styles.bestsellersFlex}`}>
            {products.map((product, index) => (
            <div key={index} className={styles.productItem}>
                <div className={styles.imgWrapper}>
                    <Image 
                        className={`${styles[`${product.name}`]} ${styles.scrub}`} 
                        src={product.image} 
                        alt={product.imgDescription}
                        sizes="(max-width: 1248px) 100vw,
                                    1200px"
                        width={400}
                    />
                </div>
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
        </div>
    )
}
