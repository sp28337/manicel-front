"use client";

import styles from "../../../../styles/body-id.module.css";
import { useState } from "react";
import { ProductSchema } from "../../../../lib/definitions"


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
        <div className={styles.description}>
            <h2 className={`${styles.h2} ${styles.h2Description}`}>описание</h2>
            <div className={styles.firstDesc}>
                <span className={styles.saltBodyScrub}>salt body scrab - </span>{props.product.description}
            </div>
            {openCloseButton === "скрыть" && <div className={styles.secondDesc}>
                {props.product.flavor.description}
            </div>}
            <button className={styles.openCloseButton} onClick={handleClick}>{openCloseButton}</button>
        </div>
    )
}