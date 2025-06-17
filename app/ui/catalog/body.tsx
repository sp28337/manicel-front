
import styles from "../../styles/catalog/body.module.css"
import Link from "next/link"
import Image from "next/image"
import { CatalogProductsSchema } from "../../lib/definitions"
import { 
    ReviewsStarsSVG,
    QuestionSVG
 } from "../vectors"
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

    const setStyles = (id: number) => {
        if ([3, 6, 9].includes(id)) {
            return styles.pocketLink
        } else if (id === 8) {
            return styles.peachLink
        } else {
            return styles.link
        }
    }

    return (
        <main className={styles.catalogWrapper}>
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
                                    <div className={styles.productCard}>
                                        {product.name_ru && 
                                        <h3 className={styles.h3}>
                                            {product.name_ru}
                                        </h3>}
                                        <p className={styles.p}>
                                            {product.type}
                                        </p>
                                        <div className={styles.svgWrapper}>
                                            <ReviewsStarsSVG />
                                            <QuestionSVG articule={product.articule} />
                                        </div>
                                    </div>
                                    <a
                                        className={styles.buyButton} 
                                        href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                                    >
                                        купить
                                    </a>
                                </>
                            }
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}