import React from "react"
import Image from "next/image"
import Link from "next/link"
import commonStyles from "../../styles/common.module.css"
import styles from "../../styles/product/header.module.css"
import { ProductSchema } from "../../lib/definitions"
import { mainCardImages } from "../../lib/images"
import backgroundImg from "@/public/salt-body-scrub-500w.png"

export const Header = ({ product }: { product: ProductSchema }) => {

    const mainImages = mainCardImages

    return (
        <>
            <header className={styles.headerWrapper}>
                <Image 
                    className={styles.backgroundImage}
                    src={backgroundImg} 
                    alt="salt body scrub written with beautiful font on background"
                    quality={0}
                    sizes="100vw"
                />
                <div className={`${styles.header} ${commonStyles.container}`}>
                    <div className={styles.imgWrapper}>
                        <Image 
                            className={styles.mainImage}
                            src={mainImages[product.id]} 
                            alt={product.category.name}
                            sizes="100vw"
                            priority
                        />
                    </div>
                    <div className={styles.textBlock}>
                        <h1 className={styles.h1}>
                            <span className={styles.span}>
                                
                                {product.name}
                            </span>
                            {product.category.name}
                        </h1>
                        <ul className={styles.list}>
                            {product.effects.map((item, index) => (
                                <li key={index} className={styles.listItem}>
                                    {item.description}
                                </li>
                            ))}
                        </ul>
                        <Link 
                            href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                            className={styles.buyLink}
                        >
                            купить
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}