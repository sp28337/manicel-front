import styles from "../../../../../styles/elements/bubblegum.module.css"
import Image from "next/image"
import { StaticImageData } from "next/image"

import elem1 from "@/public/bubblegum/bubble-1.png"
import elem2 from "@/public/bubblegum/bubble-2.png"
import elem3 from "@/public/bubblegum/bubble-1.png"
import elem4 from "@/public/bubblegum/bubble-1.png"
import elem5 from "@/public/bubblegum/bubble-2.png"
import elem6 from "@/public/bubblegum/bubble-2.png"
import elem7 from "@/public/bubblegum/bubble-2.png"


export const Bubblegum = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: styles.elem1,
        2: styles.elem2,
        3: styles.elem3,
        4: styles.elem4,
        5: styles.elem5,
        6: styles.elem6,
        7: styles.elem7,
    }
    
    const elements: StaticImageData[]  = [
        elem1,
        elem2,
        elem3,
        elem4,
        elem5,
        elem6,
        elem7,
    ]

    return (
        <div className={styles.wrapper}>
            {elements.map((element, index) => (
                <Image
                    key={index}
                    className={elemStyles[index + 1]}
                    alt="scrub ingredients spread around the header background"
                    src={element}
                    quality={100}
                    sizes="100vw"
                    priority
                />
            ))}
        </div>
    )
}