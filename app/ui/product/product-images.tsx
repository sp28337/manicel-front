"use client"

import Image from "next/image"
import styles from "../../styles/product/body.module.css"
import { useState } from "react"
import { productImages } from "../../lib/images"


const images = productImages

export const ProductImages = (props: { id: number }) => {

    const id = props.id
    const [ imgIndex, setImgIndex ] = useState(0);

    return (
        <section className={styles.imgWrapper}>
            <div 
                className={styles.imgSlider}
            >
                {
                    images[id].map((image, index) => (
                        <div 
                            key={index} 
                            className={styles.imgSliderItem}
                            onClick={() => setImgIndex(index)}
                        >
                            <Image 
                                className={`${styles.scrubPhotoMini}`}
                                src={image} 
                                alt="дополнительное фото продукта"
                                width={81}
                                sizes="100vw"
                                draggable={false}
                            />
                        </div>
                    ))
                }
            </div>
            <Image 
                className={`${styles.scrubPhoto}`}
                src={images[id][imgIndex]} 
                alt="основное фото продукта"
                width={520}
                sizes="100vw"
            />
        </section>
    )
}

