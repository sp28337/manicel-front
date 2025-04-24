import styles from '../../../styles/catalog.module.css';
import commonStyles from '../../../styles/common.module.css';
import Image from 'next/image';
import { Icons } from '../../header/Icons';
import wbLogo from "../../../../../public/wildberries-logo.svg"
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import raspberry from "../../../../../public/raspberry/raspberry-1200w.png";
import mango from "../../../../../public/mango/mango-1200w.png";
import mint from "../../../../../public/mint/mint-1200w.png";
import bubblegum from "../../../../../public/bubblegum/bubblegum-1200w.png";
import caramel from "../../../../../public/caramel/caramel-1200w.png";
import coconut from "../../../../../public/coconut/coconut-1200w.png";
import lavender from "../../../../../public/lavender/lavender-1200w.png";
import peach from "../../../../../public/peach/peach-letual.png";
import inzhir from "../../../../../public/inzhir/inzhir-320w.png"
import citrus from "../../../../../public/citrus/citrus-320w.png"
import apple from "../../../../../public/apple/apple-320w.png"

import mintMango from "../../../../../public/mint-mango-500w.png"
import coconutLavender from "../../../../../public/coconut-lavender-500w.png"
import peachLavender from "../../../../../public/peach-lavender-500w.png"
import coconutPeach from "../../../../../public/coconut-peach-500w.png"
import trio from "../../../../../public/trio.png"


export const BodyCatalog = (props: { products: any }) => {
    
    // const data = await fetch(`http://127.0.0.1:8000/products/catalog_products`)
    // const products: [data] = await data.json()
    // console.log(products)

    const images: { [key: number]: StaticImageData } = {
        1: mango,
        2: bubblegum,
        3: inzhir,
        4: caramel,
        5: coconut,
        6: citrus,
        7: raspberry,
        8: peach,
        9: apple,
        10: lavender,
        11: mint,
        12: mintMango,
        13: coconutLavender,
        14: coconutPeach,
        15: peachLavender,
        16: trio,
    }
    
    const backgroundStyles: { [key: number]: string } = {
        1: styles.cardItem1,
        2: styles.cardItem2,
        3: styles.cardItem3,
        4: styles.cardItem4,
        5: styles.cardItem5,
        6: styles.cardItem6,
        7: styles.cardItem7,
        8: styles.cardItem8,
        9: styles.cardItem9,
        10: styles.cardItem10,
        11: styles.cardItem11,
        12: styles.cardItem12,
        13: styles.cardItem13,
        14: styles.cardItem14,
        15: styles.cardItem15,
        16: styles.cardItem16,
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

    return (
        <div className={`${commonStyles.container} ${styles.bodyWrapper}`}>
            <div className={styles.urlPath}>
                <Link className={styles.pathLink} href="/">главная </Link>
                &gt;
                <Link className={styles.activePath} href="/catalog"> каталог </Link>
            </div>
            <p className={styles.description}>Скрабы для тела SALT BODY SCRUB от российского бренда MANICEL — это эффективное средство для очищения и ухода за кожей рук, ног, живота, ягодиц и других участков тела. Скраб мягко отшелушивает ороговевшие клетки, стимулирует обновление кожи и придаёт ей здоровый сияющий вид.</p>
            <h1 className={styles.h1Body}>каталог</h1>
            <ul className={styles.catalogList}>
                {props.products.map((product: any, index: number) => (
                    <div key={index} className={`${styles.cardItem} ${backgroundStyles[product.id]}`}>
                        <div className={`${styles.gradient} ${gradientStyles[product.id]}`}></div>
                            <Link className={styles.cardLink} href={`/catalog/${product.id}`}>
                                {images[product.id] && <Image 
                                    className={styles.scrabImg} 
                                    src={images[product.id]} 
                                    alt={"scrub image"}
                                    sizes="100vw"
                                    width={[3, 6, 9].includes(product.id) ? 180 : 210}
                                />}

                            </Link>
                            {product.name_ru && 
                                <>  
                                    <Link className={styles.cardContent} href={`/catalog/${product.id}`}>
                                        {product.name_ru && <h3 className={styles.h3Body}>{product.name_ru}</h3>}
                                        <span className={styles.descScrab}>{product.type}</span>
                                        <span>
                                            <div className={styles.rating}>
                                                <svg width="96" height="20" viewBox="0 0 96 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99996 14.375L4.85671 17.5163L6.25496 11.6538L1.67871 7.73375L7.68559 7.2525L9.99996 1.6875L12.3143 7.2525L18.3221 7.73375L13.745 11.6538L15.1432 17.5163L9.99996 14.375Z" fill="#4A4A4A"/>
                                                    <path d="M29 14.375L23.8567 17.5163L25.255 11.6538L20.6787 7.73375L26.6856 7.2525L29 1.6875L31.3143 7.2525L37.3221 7.73375L32.745 11.6538L34.1432 17.5163L29 14.375Z" fill="#4A4A4A"/>
                                                    <path d="M48 14.375L42.8567 17.5163L44.255 11.6538L39.6787 7.73375L45.6856 7.2525L48 1.6875L50.3143 7.2525L56.3221 7.73375L51.745 11.6538L53.1432 17.5163L48 14.375Z" fill="#4A4A4A"/>
                                                    <path d="M67 14.375L61.8567 17.5163L63.255 11.6538L58.6787 7.73375L64.6856 7.2525L67 1.6875L69.3143 7.2525L75.3221 7.73375L70.745 11.6538L72.1432 17.5163L67 14.375Z" fill="#4A4A4A"/>
                                                    <path d="M86 14.375L80.8567 17.5163L82.255 11.6538L77.6787 7.73375L83.6856 7.2525L86 1.6875L88.3143 7.2525L94.3221 7.73375L89.745 11.6538L91.1432 17.5163L86 14.375Z" fill="#4A4A4A"/>
                                                </svg>
                                                <span className={styles.ratio}>{"4.8"}</span>
                                            </div>
                                        </span>
                                        <div className={styles.price}>{"357 P"}<span className={styles.oldPrice}>{"675 P"}</span></div>
                                    </Link>
                                    <div className={styles.infoButtonWrapper}>                            
                                        <a className={styles.infoButton} href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}>
                                            КУПИТЬ
                                        </a>
                                    </div>  
                                </>
                            }
                        
                    </div>

                ))}
            </ul>
            <div className={styles.bottomWrapper}>
                <div className={styles.iconsWrapper}>
                    <Icons />
                </div>
                <div className={styles.partners}>
                    <Image 
                        className={styles.wbLogo}
                        priority
                        src={wbLogo}
                        alt="Wildberries logo"
                    />
                    {/* <Image 
                        className={styles.wbLogo}
                        priority
                        src={wbLogo}
                        alt="Wildberries logo"
                    />
                    <Image 
                        className={styles.wbLogo}
                        priority
                        src={wbLogo}
                        alt="Wildberries logo"
                    /> */}

                </div>
                {/* <div className={styles.gradient}>
                    <Image 
                        className={styles.gradientImage}
                        src={gradient}
                        alt="gradient"
                        width={900}
                    />
                </div> */}
            </div>
        </div>
    );
}