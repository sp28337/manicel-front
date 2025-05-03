import commonStyles from "../../styles/common.module.css"
import headerStyles from "../../styles/header.module.css"
import Image from "next/image"
import allPng from "@/public/all-1200w.png"
import styles from "../../styles/header.module.css"
import background from "@/public/salt-body-scrub-1140w.png"
import { IconsSVG, WaveSVG } from "../vectors"

export const Header = () => {
    return (
        <>
            <header>
                <div className={headerStyles.headerWrapper}>
                    <Image
                        className={styles.image}
                        src={background}
                        alt="pretty salt body scrab text on background"
                        quality={50}
                        sizes="100vw"
                        priority
                    />
                    <div className={`${commonStyles.container} ${headerStyles.headerBody}` }>
                        
                        <div className={headerStyles.textHeader}>
                            <h1 className={headerStyles.h1Header}>НАСТОЯЩИЙ СПА-РИТУАЛ<br />
                                <span className={headerStyles.spanHeader}>ОБНОВЛЕНИЯ<br/> И СИЯНИЯ</span>
                            </h1>
                            <p className={headerStyles.pHeader}>Познакомьтесь с нашими натуральными солевыми скрабами, доступными в разнообразии ароматов, которые подарят вашей коже мягкость и гладкость, словно после спа-процедур!</p>
                            <div className={styles.icons}>
                                <IconsSVG  />
                            </div>
                        </div>
                        <div className={headerStyles.imgWrapper}>
                            <Image className={styles.imgAll}
                                src={allPng} 
                                alt="piramyd of all scrubs with raspberry on top of some cans"
                                quality={100}
                                sizes="100vw"
                                priority
                            />
                        </div>
                    </div>
                </div >
            </header>
            <WaveSVG />
        </>
    );
};