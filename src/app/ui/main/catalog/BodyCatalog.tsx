import styles from '../../../styles/catalog.module.css';
import commonStyles from '../../../styles/common.module.css';
import Image from 'next/image';
import raspberry from "../../../../../public/raspberry-1200w.png";
import mango from "../../../../../public/mango-1200w.png";
import mint from "../../../../../public/mint-1200w.png";
import bubblegum from "../../../../../public/bubblegum-1200w.png";
import caramel from "../../../../../public/caramel-1200w.png";
import coconut from "../../../../../public/coconut-1200w.png";
import lavender from "../../../../../public/lavender-1200w.png";
import peach from "../../../../../public/peach-letual.png";
import { Icons } from '../../header/Icons';
import inzhir from "../../../../../public/inzhir-main-crop.png"
import citrus from "../../../../../public/citrus-main-crop.png"
import apple from "../../../../../public/apple-main-crop.png"
import trio from "../../../../../public/trio.png"

import wbLogo from "../../../../../public/wildberries-logo.svg"
import mintMango from "../../../../../public/mint-mango-500w.png"
import coconutLavender from "../../../../../public/coconut-lavender-500w.png"
import peachLavender from "../../../../../public/peach-lavender-500w.png"
import coconutPeach from "../../../../../public/coconut-peach-500w.png"


export const BodyCatalog = async () => {
    
    const data = await fetch(`http://127.0.0.1:8000/products/catalog_products`)
    const products = await data.json()

    const images = [
        undefined,
        mango,
        bubblegum,
        inzhir,
        caramel,
        coconut,
        citrus,
        raspberry,
        peach,
        apple,
        lavender,
        mint,
        mintMango,
        coconutLavender,
        coconutPeach,
        peachLavender,
        trio,
    ]
    
    return (
        <div className={`${commonStyles.container} ${styles.bodyWrapper}`}>
            <div className={styles.urlPath}>
                <a className={styles.pathLink} href="/">главная </a>
                &gt;
                <a className={styles.activePath} href="/catalog"> каталог </a>
            </div>
            <p className={styles.description}>Скрабы для тела SALT BODY SCRUB от российского бренда MANICEL — это эффективное средство для очищения и ухода за кожей рук, ног, живота, ягодиц и других участков тела. Скраб мягко отшелушивает ороговевшие клетки, стимулирует обновление кожи и придаёт ей здоровый сияющий вид.</p>
            <h1 className={styles.h1Body}>каталог</h1>
            <ul className={styles.catalogList}>
                {products.map((product, index) => (
                    <div key={index} className={styles.cardItem}>
                        {images[product.id] && <Image 
                            className={styles.scrabImg} 
                            src={images[product.id]} 
                            alt={"scrub image"}
                            sizes="100vw"
                            width={210}
                        />}
                        {product.name && 
                            <>
                                <div className={styles.cardContent}>                        
                                    {product.name && <h3 className={styles.h3Body}>{product.name}</h3>}
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
                                </div>
                                <div className={styles.infoButtonWrapper}>                            
                                    <a className={styles.infoButton} href={`/catalog/${product.id}`}>
                                        подробнее
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