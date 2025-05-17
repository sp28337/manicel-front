"use client"

import Image from "next/image"
import { useEffect, useState} from "react"
import styles from "../styles/search-list.module.css"
import { getSearchProducts } from "../lib/data"
import { CloseSearchListButton } from "./buttons"
import { ReviewsStarsSVG, ChartBagSVG } from "./vectors"
import { searchImages } from "../lib/images"
import { notFound } from "next/navigation"
import { createPortal } from "react-dom"
import { useMySearchContext } from "./contexts"
import { CatalogProductsSchema } from "../lib/definitions"

const images = searchImages


export function SearchList() {

    const [products, setProducts] = useState<CatalogProductsSchema[]>([])
    const context = useMySearchContext()
    const { searchParams } = context

    useEffect(() => {
        const query = searchParams.get("query") || ""
        
        async function fetchProducts() {
            const fetchedProducts = await getSearchProducts(query)
            setProducts(fetchedProducts)
        }
        fetchProducts()
    }, [searchParams])

    if (!products) {
        notFound()
    }
  
    return (
        <>
            { products.length > 0 && createPortal(
                <div className={styles.searchListWrapper}>
                    <ul className={styles.searchList}>
                        { 
                            products.map((product) => (
                                <li key={product.id} className={styles.searchRow} >
                                    <a href={`/catalog/${product.id}`} className={styles.link}>
                                        <div className={styles.rowBackground}></div>
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
                                    </a>
                                    <div className={styles.reviews}>
                                        <ReviewsStarsSVG />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <a 
                                            href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                                        >
                                            <ChartBagSVG />
                                        </a>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <CloseSearchListButton />
                </div>, document.getElementById("searchList")!)
            }
        </>
    )
}
