import styles from "../../../../../styles/elements/peach.module.css"
import Image from "next/image"
import { StaticImageData } from "next/image"

import elem1 from "@/public/peach/peach-1.png"
import elem2 from "@/public/peach/peach-2.png"
import elem3 from "@/public/peach/peach-3.png"
import elem4 from "@/public/peach/peach-4.png"
import elem5 from "@/public/peach/peach-5.png"
import elem6 from "@/public/peach/peach-6.png"
import elem7 from "@/public/peach/peach-1.png"
import elem8 from "@/public/peach/peach-2.png"
import elem9 from "@/public/peach/peach-3.png"
import elem10 from "@/public/peach/peach-4.png"


export const Peach = () => {
    
    const elemStyles: { [key: number]: string} = {
        1: styles.elem1,
        2: styles.elem2,
        3: styles.elem3,
        4: styles.elem4,
        5: styles.elem5,
        6: styles.elem6,
        7: styles.elem7,
        8: styles.elem8,
        9: styles.elem9,
        10: styles.elem10,
    }
    
    const elements: StaticImageData[]  = [
        elem1,
        elem2,
        elem3,
        elem4,
        elem5,
        elem6,
        elem7,
        elem8,
        elem9,
        elem10,
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