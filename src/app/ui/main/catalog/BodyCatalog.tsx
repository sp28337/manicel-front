import { WBLogo } from "../../logotips"
import styles from "../../../styles/catalog.module.css"
import commonStyles from "../../../styles/common.module.css"
import Link from "next/link"
import Image from "next/image"
import { StaticImageData } from "next/image"
import { CatalogProductsSchema } from "../../../definitions"
import { Icons } from "../../header/Icons"
import { ReviewsStars } from "../../reviews"

import raspberry from "../../../../../public/raspberry/raspberry-1200w.png"
import mango from "../../../../../public/mango/mango-1200w.png"
import mint from "../../../../../public/mint/mint-1200w.png"
import bubblegum from "../../../../../public/bubblegum/bubblegum-1200w.png"
import caramel from "../../../../../public/caramel/caramel-1200w.png"
import coconut from "../../../../../public/coconut/coconut-1200w.png"
import lavender from "../../../../../public/lavender/lavender-1200w.png"
import peach from "../../../../../public/peach/peach-letual.png"
import inzhir from "../../../../../public/inzhir/inzhir-320w.png"
import citrus from "../../../../../public/citrus/citrus-320w.png"
import apple from "../../../../../public/apple/apple-320w.png"

import mintMango from "../../../../../public/mint-mango-500w.png"
import coconutLavender from "../../../../../public/coconut-lavender-500w.png"
import peachLavender from "../../../../../public/peach-lavender-500w.png"
import coconutPeach from "../../../../../public/coconut-peach-500w.png"
import trio from "../../../../../public/trio.png"


export const BodyCatalog = ({ products }: { products: CatalogProductsSchema[] }) => {

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

    const chooseClassName = (id: number) => {
        if ([3, 6, 9].includes(id)) {
            return styles.pocketImg
        } else {
            return styles.scrabImg
        }
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
                {products && products.map((product: any, index: number) => (
                    <div key={index} className={`${styles.cardItem} ${backgroundStyles[product.id]}`}>
                        <div className={`${styles.gradient} ${gradientStyles[product.id]}`}></div>
                            <Link className={styles.cardLink} href={`/catalog/${product.id}`}>
                                {images[product.id] && <Image 
                                    className={`${styles.img} ${chooseClassName(product.id)}`} 
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
                                            <ReviewsStars />
                                        </span>
                                        {/* <div className={styles.price}>{"357 P"}<span className={styles.oldPrice}>{"675 P"}</span></div> */}
                                    </Link>
                                    <div className={styles.infoButtonWrapper}>                            
                                        <a 
                                            className={styles.infoButton} 
                                            href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                                        >
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
                    <WBLogo />
                </div>
            </div>
        </div>
    );
}