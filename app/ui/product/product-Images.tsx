"use client"

import Image from "next/image"
import styles from "../../styles/body-id.module.css"
import { useState } from "react"
import { getProductImages } from "../../lib/images"


const images = getProductImages()

export const ProductImages = (props: { id: number }) => {

    const id = props.id
    const [ imgIndex, setImgIndex ] = useState(0);

    return (
        <div className={styles.imgWrapper}>
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
                                alt="scrub photo"
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
                alt="scrub photo"
                width={520}
                sizes="100vw"
            />
        </div>
    )
}

