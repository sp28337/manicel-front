import { WBLogo } from "../../logotips"
import styles from "../../../styles/catalog.module.css"
import commonStyles from "../../../styles/common.module.css"
import Link from "next/link"
import Image from "next/image"
import { CatalogProductsSchema } from "../../../lib/definitions"
import { EcoFriendlySVG, WithLoveSVG, NoAnimalTestingSVG, ReviewsStarsSVG } from "../../vectors"
import { getCatalogImages } from "@/app/lib/images"

export const BodyCatalog = ({ products }: { products: CatalogProductsSchema[] }) => {

    const images = getCatalogImages()
    
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
                {products && products.map((product, index) => (
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
                                            <ReviewsStarsSVG />
                                        </span>
                                        {/* <div className={styles.price}>{"357 P"}<span className={styles.oldPrice}>{"675 P"}</span></div> */}
                                    </Link>
                                    <div className={styles.infoButtonWrapper}>                            
                                        <Link 
                                            className={styles.infoButton} 
                                            href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                                        >
                                            КУПИТЬ
                                        </Link>
                                    </div>  
                                </>
                            }
                        
                    </div>

                ))}
            </ul>
            <div className={styles.bottomWrapper}>
                <div className={styles.iconsWrapper}>
                    <div className={styles.iconWrapper}>
                        <EcoFriendlySVG  />
                        <span className={styles.iconDescribtion}>
                            eco friendly
                        </span>
                    </div>
                    <div className={styles.iconWrapper}>
                        <WithLoveSVG  />
                        <span className={styles.iconDescribtion}>
                            made with love
                        </span>
                    </div>
                    <div className={styles.iconWrapper}>
                        <NoAnimalTestingSVG  />
                        <span className={styles.iconDescribtion}>
                            cruelty free
                        </span>
                    </div>
                </div>
                <div className={styles.partners}>
                    <WBLogo />
                </div>
            </div>
        </div>
    );
}