"use client"

import Image from "next/image";
import styles from "../../../../styles/body-id.module.css";
import { StaticImageData } from "next/image";
import { useState, useRef } from "react";

import mango from "@/public/mango/mango-chilli-pocket-600w.jpg";
import mango1 from "@/public/mango/mango-chilli-pocket-600w-1.jpg";
import mango2 from "@/public/mango/mango-chilli-pocket-600w-2.jpg";
import lavender from "@/public/lavender/lavender-black-currant-pocket-600w.jpg";
import lavender1 from "@/public/lavender/lavender-black-currant-pocket-600w-1.jpg";
import lavender2 from "@/public/lavender/lavender-black-currant-pocket-600w-2.jpg";
import coconut from "@/public/coconut/coconut-pocket-600w.jpg";
import coconut1 from "@/public/coconut/coconut-pocket-600w-1.jpg";
import coconut2 from "@/public/coconut/coconut-pocket-600w-2.jpg";
import mint from "@/public/mint/mint-cucumber-pocket-600w.jpg";
import mint1 from "@/public/mint/mint-cucumber-pocket-600w-1.jpg";
import mint2 from "@/public/mint/mint-cucumber-pocket-600w-2.jpg";
import peach from "@/public/peach/peach-pocket-600w.jpg";
import peach1 from "@/public/peach/peach-pocket-600w-1.jpg";
import peach2 from "@/public/peach/peach-pocket-600w-2.jpg";
import inzhir from "@/public/inzhir/inzhir-pocket-600w.jpg";
import inzhir1 from "@/public/inzhir/inzhir-pocket-600w-1.jpg";
import inzhir2 from "@/public/inzhir/inzhir-pocket-600w-2.jpg";
import citrus from "@/public/citrus/citrus-pocket-600w.jpg";
import citrus1 from "@/public/citrus/citrus-pocket-600w-1.jpg";
import citrus2 from "@/public/citrus/citrus-pocket-600w-2.jpg";
import apple from "@/public/apple/apple-pocket-600w.jpg";
import apple1 from "@/public/apple/apple-pocket-600w-1.jpg";
import apple2 from "@/public/apple/apple-pocket-600w-2.jpg";
import trio from "@/public/trio-600w.jpg";
import trio1 from "@/public/trio-600w-1.jpg";
import trio2 from "@/public/trio-600w-2.jpg";


const images: { [key: number]: StaticImageData[] } = {
    1: [mango, mango1, mango2,],
    2: [mango, mango1, mango2,],
    3: [inzhir, inzhir1, inzhir2],
    4: [mango, mango1, mango2,],
    5: [coconut, coconut1, coconut2,],
    6: [citrus, citrus1, citrus2],
    7: [mango, mango1, mango2,],
    8: [peach, peach1, peach2,],
    9: [apple, apple1, apple2],
    10: [lavender, lavender1, lavender2,],
    11: [mint, mint1, mint2,], 
    12: [mint, mint1, mint2, mango, mango1, mango2,],
    13: [lavender, lavender1, lavender2, coconut, coconut1, coconut2,],
    14: [peach, peach1, peach2, coconut, coconut1, coconut2,],
    15: [lavender, lavender1, lavender2, peach, peach1, peach2,],
    16: [trio, trio1, trio2,],  
}

export const ProductImages = (props: { id: number }) => {

    const id = props.id
    const [ imgIndex, setImgIndex ] = useState(0);

    // const containerRef = useRef(null);
    // const isDown = useRef(false);
    // const startX = useRef(0);
    // const scrollLeft = useRef(0);

    // const onMouseDown = (e: any) => {
    //     isDown.current = true;
    //     containerRef.current.classList.add("active");
    //     startX.current = e.pageX - containerRef.current.offsetLeft;
    //     scrollLeft.current = containerRef.current.scrollLeft;
    // }

    // const onMouseLeave = () => {
    //     isDown.current = false;
    //     containerRef.current.classList.remove("active");
    // }

    // const onMouseUp = () => {
    //     isDown.current = false;
    //     containerRef.current.classList.remove("active");
    // }

    // const onMouseMove = (e: any) => {
    //     if (!isDown.current) return;
    //     e.preventDefault();
    //     const x = e.pageX - containerRef.current.offsetLeft;
    //     const walk = (x - startX.current) * 2; //scroll-fast
    //     containerRef.current.scrollLeft = scrollLeft.current - walk;
    // }

    return (
        <div className={styles.imgWrapper}>
            {/* <div className={styles.imgSliderWrapper}>
                <div className={styles.gradientLeft}></div>
                <div className={styles.gradientRight}></div>
            </div> */}
            <div 
                className={styles.imgSlider}
                // ref={containerRef}
                // onMouseDown={onMouseDown}
                // onMouseLeave={onMouseLeave}
                // onMouseUp={onMouseUp}
                // onMouseMove={onMouseMove}
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
            {/* <div className={styles.background}></div> */}
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

