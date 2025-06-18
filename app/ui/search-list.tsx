import Image from "next/image"
import styles from "../styles/search-list.module.css"
import commonStyles from "../styles/common.module.css"
import { getSearchProducts } from "../lib/data"
import { CloseSearchListButton } from "./buttons"
import Link from "next/link"
import { ShopSVG } from "./vectors"
import { searchImages } from "../lib/images"
import { notFound } from "next/navigation"

const images = searchImages


export async function SearchList({ query }: { query: string }) {

    const products = await getSearchProducts(query)

    if (!products) {
        notFound()
    }
  
    return (
        <>
            { products.length > 0 &&
                <>
                    <div className={styles.background}>
                    </div>
                    <section className={`${styles.searchListWrapper}`}>
                        <ul className={`${styles.searchList} ${commonStyles.container}`}>
                            { 
                                products.map((product) => (
                                    <li key={product.id} className={styles.searchRow} >
                                        <Link href={`/catalog/${product.id}`} className={styles.link}>
                                            <div className={styles.imgWrapper}>
                                                <Image 
                                                    src={images[product.id]}
                                                    className={`${styles.image}`}
                                                    alt={`${product.name}"s profile picture`}
                                                    sizes="100vw"
                                                />
                                            </div>
                                            <div className={styles.name}>
                                                {product.name}
                                            </div>
                                        </Link>

                                        <div className={styles.buttonWrapper}>
                                            <a 
                                                href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                                            >
                                                <ShopSVG color="#00000080" w={20} h={20} />
                                            </a>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <CloseSearchListButton />
                    </section>
                </>
            }
        </>
    )
}
