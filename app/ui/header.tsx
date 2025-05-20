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
                    <h1 className={styles.h1}>
                        <span className={styles.span}>
                            SALT BODY SCRUB
                        </span>
                        забота в каждом мгновении
                        <br />
                    </h1>
                    <p className={styles.p}>
                        специально для тебя мы создали ароматы, 
                        превращающие заботу о коже в райское наслаждение
                        <br />
                        Собери всю коллекцию и получи подарок от <span style={{textTransform: "uppercase"}}>MANICEL</span>
                    </p>
                    <div className={styles.icons}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.svgWrapper}>                        
                                <EcoFriendlySVG  />
                            </div>
                            <span className={styles.iconDescribtion}>
                                eco friendly
                            </span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <div className={styles.svgWrapper}>                        
                                <WithLoveSVG  />
                            </div>
                            <span className={styles.iconDescribtion}>
                                made with love
                            </span>
                        </div>
                        <div className={styles.iconWrapper}>
                            <div className={styles.svgWrapper}>                        
                                <NoAnimalTestingSVG  />
                            </div>
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