import Image from "next/image"
import styles from "../../styles/catalog/header.module.css"
import commonStyles from "../../styles/common.module.css"
import { WaveSVG } from "../vectors"
import mainImg from "@/public/all-front-1200w.png"
import backgroundImg from "@/public/salt-body-scrub-500w.png"

export const Header = () => {

    return (
        <header className={styles.headerWrapper}>
            <Image 
                className={styles.backgroundImage}
                src={backgroundImg} 
                alt="pretty salt body scrab text on background"
                quality={0}
                sizes="100vw"
                priority
            />
            <div className={`${commonStyles.container} ${styles.header}`}>
                <div className={styles.text}>
                    <h1 className={styles.h1}>
                        соляные скрабы
                        <br />
                        <span className={styles.span}>
                            и наборы для тела
                        </span>
                    </h1>
                </div>
                <div className={styles.imgWrapper}>
                    <Image
                        className={styles.mainImage}
                        src={mainImg} 
                        alt="scrab"
                        width={800}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <div className={styles.wave}>
                <WaveSVG />
            </div>
        </header>
    )
}