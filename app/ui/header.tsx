import commonStyles from "../styles/common.module.css"
import styles from "../styles/header.module.css"
import Image from "next/image"
import mainImg from "@/public/all-800w.png"
import backgroundImg from "@/public/salt-body-scrub-500w.png"
import { 
    EcoFriendlySVG, 
    WithLoveSVG, 
    NoAnimalTestingSVG, 
    WaveSVG 
} from "./vectors"

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
            <div className={`${commonStyles.container} ${styles.header}` }>
                
                <div className={styles.textBlock}>
                    <h1 className={styles.h1}>НАСТОЯЩИЙ СПА-РИТУАЛ<br />
                        <span className={styles.span}>ОБНОВЛЕНИЯ<br/> И СИЯНИЯ</span>
                    </h1>
                    <p className={styles.p}>Познакомьтесь с нашими натуральными солевыми скрабами, доступными в разнообразии ароматов, которые подарят вашей коже мягкость и гладкость, словно после спа-процедур!</p>
                    <div className={styles.icons}>
                        <div className={styles.iconWrapper}>
                            <EcoFriendlySVG  />
                            <span className={styles.iconDescribtion}>
                                eco friendly
                            </span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <WithLoveSVG  />
                            <span className={styles.iconDescribtion}>
                                made with love
                            </span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <NoAnimalTestingSVG  />
                            <span className={styles.iconDescribtion}>
                                cruelty free
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.imgWrapper}>
                    <Image className={styles.mainImage}
                        src={mainImg} 
                        alt="piramyd of all scrubs with raspberry on top of some cans"
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
            <div className={styles.wave}>
                <WaveSVG />
            </div>
        </header >
    )
}