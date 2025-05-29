import { WBLogo } from "../logotips"
import styles from "../../styles/catalog/body.module.css"
import commonStyles from "../../styles/common.module.css"
import Link from "next/link"
import Image from "next/image"
import { CatalogProductsSchema } from "../../lib/definitions"
import { EcoFriendlySVG, WithLoveSVG, NoAnimalTestingSVG, ReviewsStarsSVG } from "../vectors"
import { catalogImages } from "@/app/lib/images"

export const BodyCatalog = ({ products }: { products: CatalogProductsSchema[] }) => {

    const images = catalogImages
    
    const backgroundStyles: { [key: number]: string } = {
        1: styles.item1,
        2: styles.item2,
        3: styles.item3,
        4: styles.item4,
        5: styles.item5,
        6: styles.item6,
        7: styles.item7,
        8: styles.item8,
        9: styles.item9,
        10: styles.item10,
        11: styles.item11,
        12: styles.item12,
        13: styles.item13,
        14: styles.item14,
        15: styles.item15,
        16: styles.item16,
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

    // const setWidth = (id: number) => {
    //     if ([3, 6, 9].includes(id)) {
    //         return 210
    //     } else {
    //         return 210
    //     }
    // }

    const setStyles = (id: number) => {
        if ([3, 6, 9].includes(id)) {
            return styles.pocketLink
        } else if (id === 8) {
            return styles.peachLink
        } else {
            return styles.link
        }
    }

    const setFontSize = (id: number) => {
        if ([10, 12, 13, 15, 16].includes(id)) {
            return 14
        } else {
            return 16
        }
    }

    return (
        <div className={`${commonStyles.container}`}>
            <div className={styles.catalogWrapper}>
                {/* <div className={styles.urlPath}>
                    <Link className={styles.pathLink} href="/">главная </Link>
                    &gt;
                    <Link className={styles.activePath} href="/catalog"> каталог </Link>
                </div> */}
                <section>
                    <p className={styles.description}>
                        Скрабы для тела SALT BODY SCRUB от российского бренда MANICEL — это 
                        эффективное средство для очищения и ухода за кожей рук, ног, живота, 
                        ягодиц и других участков тела. Скраб мягко отшелушивает ороговевшие клетки, 
                        стимулирует обновление кожи и придаёт ей здоровый сияющий вид.
                    </p>
                </section>
                <section>
                    <h2 className={styles.h2}>
                        каталог
                    </h2>
                    <div className={styles.list}>
                        {products && products.map((product) => (
                            <article 
                                key={product.id} 
                                className={`${styles.item} ${backgroundStyles[product.id]}`}
                            >
                                <Link  
                                    href={`/catalog/${product.id}`} 
                                    className={`${styles.gradient} ${gradientStyles[product.id]}`}
                                >

                                </Link>
                                <Link 
                                    className={setStyles(product.id)} 
                                    href={`/catalog/${product.id}`}
                                >
                                    {
                                        images[product.id] && 
                                        <Image 
                                            className={`${styles.img}`} 
                                            src={images[product.id]} 
                                            alt={"фотография продукта на прозрачном фоне с ингридиентами"}
                                            sizes="100vw"
                                            width={210}
                                        />
                                    }
                                </Link>
                                {product.name_ru && 
                                    <>  
                                        <div 
                                            className={styles.productCard} 
                                            // href={`/catalog/${product.id}`}
                                        >
                                            {   
                                                product.name_ru && 
                                                <h3 
                                                    className={styles.h3} 
                                                    style={{
                                                        fontSize: `${setFontSize(product.id)}px`
                                                    }}
                                                >
                                                    {product.name_ru}
                                                </h3>
                                            }
                                            <p className={styles.productDescription}>
                                                {product.type}
                                            </p>
                                            <span>
                                                <ReviewsStarsSVG />
                                            </span>
                                        </div>
                                        <div className={styles.buttonWrapper}>                            
                                            <Link
                                                type="button"
                                                className={styles.button} 
                                                href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                                            >
                                                купить
                                            </Link>
                                        </div>  
                                    </>
                                }
                            </article>
                        ))}
                    </div>
                </section>

                <section className={styles.iconsWrapper}>
                    <div className={styles.iconWrapper}>
                        <div className={styles.swgWrapper}>
                            <EcoFriendlySVG  />
                        </div>
                        <span className={styles.iconDescribtion}>
                            eco friendly
                        </span>
                    </div>
                    <div className={styles.iconWrapper}>
                        <div className={styles.swgWrapper}>
                            <WithLoveSVG  />
                        </div>
                        <span className={styles.iconDescribtion}>
                            made with love
                        </span>
                    </div>
                    <div className={styles.iconWrapper}>
                        <div className={styles.swgWrapper}>
                            <NoAnimalTestingSVG  />
                        </div>
                        <span className={styles.iconDescribtion}>
                            cruelty free
                        </span>
                    </div>
                </section>

                <section className={styles.partners}>
                    <WBLogo />
                </section>
            </div>
        </div>
    )
}