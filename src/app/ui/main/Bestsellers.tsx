import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from 'next/link';

import raspberryPng from "../../../../public/raspberry/raspberry-1200w.png";
import mangoPng from "../../../../public/mango/mango-1200w.png";
import mintPng from "../../../../public/mint/mint-1200w.png";
import coconutPng from "../../../../public/coconut/coconut-1200w.png";
import bubblegumPng from "../../../../public/bubblegum/bubblegum-1200w.png";
import caramelPng from "../../../../public/caramel/caramel-1200w.png";
import lavenderPng from "../../../../public/lavender/lavender-1200w.png";
import inzhirPng from "../../../../public/inzhir/inzhir-main-790w.png";
import applePmg from "../../../../public/apple/apple-main-790w.png";
import citrusPng from "../../../../public/citrus/citrus-main-790w.png";
import mintMangoPng from "../../../../public/mint-mango-500w.png";
import coconutLavenderPng from "../../../../public/coconut-lavender-500w.png";
import coconutPeachPng from "../../../../public/coconut-peach-500w.png";
import peachLavenderPng from "../../../../public/peach-lavender-500w.png";
import trioPng from "../../../../public/trio.png";
import styles from '../../styles/bestsellers.module.css';

interface Data {
    id: number,
    name: string,
    type: string,
    reviews: number,
    ingredients: [string],
  }

interface BestsellersProps {
    products: Data
}

export const Bestsellers = ({ products }: BestsellersProps) => {

    const backgroundStyles: { [key: number]: string } = {
        1: styles.productItem1,
        2: styles.productItem2,
        3: styles.productItem3,
        4: styles.productItem4,
        5: styles.productItem5,
        6: styles.productItem6,
        7: styles.productItem7,
        8: styles.productItem8,
        9: styles.productItem9,
        10: styles.productItem10,
        11: styles.productItem11,
        12: styles.productItem12,
        13: styles.productItem13,
        14: styles.productItem14,
        15: styles.productItem15,
        16: styles.productItem16,
    }

    const gradientStyles: { [key: number]: string } = {
        1: styles.gradient1,
        2: styles.gradient2,
        3: styles.gradient3,
        4: styles.gradient4,
        5: styles.gradient5,
        6: styles.gradient6,
        7: styles.gradient7,
        8: styles.gradient8,
        9: styles.gradient9,
        10: styles.gradient10,
        11: styles.gradient11,
        12: styles.gradient12,
        13: styles.gradient13,
        14: styles.gradient14,
        15: styles.gradient15,
        16: styles.gradient16,
    }

    const images: {[key: number]: StaticImageData} = {
        1: mangoPng,
        2: bubblegumPng,
        3: inzhirPng,
        4: caramelPng,
        5: coconutPng,
        6: citrusPng,
        7: raspberryPng,
        8: mangoPng,
        9: applePmg,
        10: lavenderPng,
        11: mintPng,
        12: mintMangoPng,
        13: coconutLavenderPng,
        14: coconutPeachPng,
        15: peachLavenderPng,
        16: trioPng
    }

    // const products = [
    //     {
    //         id: 1,
    //         name: "raspberry",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
    //         ratio: "4.8",
    //         image: raspberryPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     },
    //     {
    //         id: 2,
    //         name: "mango & chilli",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло манго, масло авокадо, экстракт красный перец, масло ши, глицерин, витамин E, твин 80, отдушка манго",
    //         ratio: "4.8",
    //         image: mangoPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     },
    //     {
    //         id: 3,
    //         name: "coconut pulp",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло миндаля, кокосовая стружка, масло ши, глицерин, витамин E, твин 80, отдушка КОКОС",
    //         ratio: "4.8",
    //         image: coconutPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     },
    //     {
    //         id: 4,
    //         name: "mint & cucumber",
    //         description: "Антицеллюлитный скраб для тела солевой с маслами",
    //         ingredients: "морская соль, масло кокоса, масло ши, увлажняющий лосьон, глицерин, витамин E, твин 80, отдушка Малина",
    //         ratio: "4.8",
    //         image: mintPng,
    //         imgDescription: "raspberry scrub with a couple of raspberries on top and some another ones nearby",
    //     }
    // ]
    
    // let [showScrubs, setShowScrubs] = useState(true);

    // const handleClick = () => {
    //     setShowScrubs(!showScrubs);
    // }

    return (
        <div className={styles.bestsellersWrapper}>
            <h1 className={styles.h1}>
                бестселлеры
            </h1>

                <div className={`${styles.bestsellersGrid} ${styles.bestsellersFlex}`}>
                {products && Array.isArray(products) && products.map((product, index) => (
                    <Link key={index} href={`/catalog/${product.id}`}>
                        <div className={`${styles.productItem} ${backgroundStyles[product.id]}`}>
                            <div className={`${styles.gradient} ${gradientStyles[product.id]}`}></div>
                            <div className={styles.background}></div>
                            <div className={`${styles.scrubWrapper}`}>
                                <Image 
                                    className={`${styles.scrub}`} 
                                    src={images[product.id]} 
                                    alt={product.type}
                                    sizes="100vw"
                                    width={400}
                                />
                            </div>
                            <div className={styles.infoContainer}>
                                <h3 className={`${styles.h3}`}>{product.name}</h3>
                                <p className={styles.p}>{product.type}</p>
                                <div className={styles.rating}>
                                    <svg width="96" height="20" viewBox="0 0 96 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99996 14.375L4.85671 17.5163L6.25496 11.6538L1.67871 7.73375L7.68559 7.2525L9.99996 1.6875L12.3143 7.2525L18.3221 7.73375L13.745 11.6538L15.1432 17.5163L9.99996 14.375Z" fill="#4A4A4A"/>
                                        <path d="M29 14.375L23.8567 17.5163L25.255 11.6538L20.6787 7.73375L26.6856 7.2525L29 1.6875L31.3143 7.2525L37.3221 7.73375L32.745 11.6538L34.1432 17.5163L29 14.375Z" fill="#4A4A4A"/>
                                        <path d="M48 14.375L42.8567 17.5163L44.255 11.6538L39.6787 7.73375L45.6856 7.2525L48 1.6875L50.3143 7.2525L56.3221 7.73375L51.745 11.6538L53.1432 17.5163L48 14.375Z" fill="#4A4A4A"/>
                                        <path d="M67 14.375L61.8567 17.5163L63.255 11.6538L58.6787 7.73375L64.6856 7.2525L67 1.6875L69.3143 7.2525L75.3221 7.73375L70.745 11.6538L72.1432 17.5163L67 14.375Z" fill="#4A4A4A"/>
                                        <path d="M86 14.375L80.8567 17.5163L82.255 11.6538L77.6787 7.73375L83.6856 7.2525L86 1.6875L88.3143 7.2525L94.3221 7.73375L89.745 11.6538L91.1432 17.5163L86 14.375Z" fill="#4A4A4A"/>
                                    </svg>
                                    <span className={styles.ratio}>{product.reviews}</span>
                                </div>
                            </div>
                            <div className={styles.composition}>
                                <h3 className={`${styles.h3}  ${index !== 0 && styles.h3Hide}`}>Состав</h3>
                                <div className={styles.ingredientsWrapper}>
                                    {
                                        product.ingredients?.map((ingredient: string, index: number) => (
                                            <span className={styles.infoItem} key={index}>
                                                {ingredient}
                                            </span>
                                            ))
                                        }
                                </div>  
                            </div>
                        </div>
                    </Link >
                ))}
                </div>
        </div>
    )
}
