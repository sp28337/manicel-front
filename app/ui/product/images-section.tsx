"use client"

import Image from "next/image"
import styles from "../../styles/product/body.module.css"
import { useState } from "react"
import { productImages } from "../../lib/images"

const images = productImages

export const ImagesSection = ({ id }: { id: number }) => {

    const [ bigImgIndex, setBigImgIndex ] = useState(0);

    return (
        <section className={styles.imagesSection}>
            <Image 
                className={styles.bigImage}
                src={images[id][bigImgIndex]} 
                alt="основное фото продукта"
                width={520}
                sizes="100vw"
            />
            <div className={styles.images}>
                {images[id].map((image, index) => (
                    <Image 
                        onClick={() => setBigImgIndex(index)}
                        key={index} 
                        className={styles.smallImage}
                        src={image} 
                        alt="дополнительное фото продукта"
                        width={81}
                        sizes="100vw"
                        draggable={false}
                    />
                ))}
            </div>
        </section>
    )
}

