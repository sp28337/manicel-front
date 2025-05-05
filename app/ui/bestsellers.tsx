import Link from "next/link"
import Image from "next/image"
import { ReviewsStarsSVG } from "./vectors"
import { BestsellersSchema } from "../lib/definitions"
import { getBestsellersImages } from "../lib/images"
import styles from "../styles/bestsellers.module.css"

export const Bestsellers = async ({ products }: { products: BestsellersSchema[] }) => {

    await new Promise((resolve) => setTimeout(resolve, 1500))

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

    const images = getBestsellersImages()

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
                            <ReviewsStarsSVG />
                        </div>
                        <div className={styles.composition}>
                            <h3 className={`${styles.h3}  ${index !== 0 && styles.h3Hide}`}>Состав</h3>
                            <div className={styles.ingredientsWrapper}>
                                {
                                    product.ingredients?.map((ingredient: string, index: number) => (
                                        <span className={styles.infoItem} key={index}>
                                            {ingredient}
                                        </span>)
                                    )
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
