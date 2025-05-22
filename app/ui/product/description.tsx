"use client"

import styles from "../../styles/product/body.module.css"
import { useState } from "react"
import { ProductSchema } from "../../lib/definitions"



export const Description = (props: { product: ProductSchema }) => {
    
    const [openCloseButton, setOpenCloseButton] = useState("больше");

    const handleClick = () => {
        if (openCloseButton === "больше") {
            setOpenCloseButton("скрыть");
        } else {
            setOpenCloseButton("больше");
        }
    }


    return (
        <section className={styles.description}>
            <h2 className={`${styles.h2} ${styles.h2Description}`}>описание</h2>
            <p className={styles.firstDesc}>
                <span className={styles.saltBodyScrub}>salt body scrab - </span>{props.product.description}
            </p>
            {openCloseButton === "скрыть" && <p className={styles.secondDesc}>
                {props.product.flavor.description}
            </p>}
            <button className={styles.openCloseButton} onClick={handleClick}>{openCloseButton}</button>
        </section>
    )
}