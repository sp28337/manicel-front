import Link from "next/link"
import Image from "next/image"
import { ReviewsStarsSVG, QuestionSVG, ShopSVG } from "../vectors"
import { BestsellersSchema } from "../../lib/definitions"
import { bestsellersImages } from "../../lib/images"
import styles from "../../styles/homepage/bestsellers.module.css"

export const Bestsellers = ({ products }: { products: BestsellersSchema[] }) => {

    const images = bestsellersImages

    return (
        <section className={styles.bestsellersWrapper}>
            <h2 className={styles.h2}>
                бестселлеры
            </h2>
            <div className={styles.bestsellersFlex}>
            {products && Array.isArray(products) && products.map((product, index) => (
                <article key={index} className={styles.productItem}>
                    <Link 
                        className={styles.link} 
                        key={index} 
                        href={`/catalog/${product.id}`}
                    >
                        <div className={styles.scrubWrapper}>
                            <Image 
                                className={`${styles.scrub}`} 
                                src={images[product.id]} 
                                alt={product.type}
                                sizes="100vw"
                                width={400}
                            />
                        </div>
                    </Link >
                    <section className={styles.infoContainer}>
                        <h3 
                            className={styles.h3}
                            style={product.name_ru.length > 10 ? {letterSpacing: 0} : {}} 
                        >
                            {product.name_ru}
                        </h3>
                        <p className={styles.p}>{product.type}</p>
                        <div className={styles.svgWrapper}>
                            <ReviewsStarsSVG />
                            <QuestionSVG articule={product.articule} />
                        </div>
                    </section>
                    <Link 
                        className={styles.buyButtonLink} 
                        href={`https://www.wildberries.ru/catalog/${product.articule}/detail.aspx`}
                    >
                        <div className={styles.buyButton} title="купить">
                            <span className={styles.iconButtonWrapper}>
                                <ShopSVG color="#fff" h={30} w={30}/>
                            </span>
                            <span className={styles.textButtonWrapper}>
                                купить
                            </span>
                        </div>
                    </Link>
                </article>
            ))}
            </div>
        </section>
    )
}