import styles from "../styles/skeletons.module.css"
import { CloseSearchListButton } from "../ui/buttons"
import commonStyles from "../styles/common.module.css"
import headerStyles from "../styles/header.module.css"
import Image from "next/image"
import background from "../../../public/salt-body-scrub-1140w.png"
import allPng from "../../../public/all-1200w.png"
import { Wave } from "./header/Wave"
import { Icons } from "./header/Icons"

export const LoadningSkeleton = () => {
    return (
        <div className={styles.loadning}>
            <div className={styles.searchListWrapper}>
                    <ul className={styles.searchList}>
                        { 
                            [1, 2, 3, 4, 5].map((product, index) => (
                                <li key={index} className={styles.searchRow} >
                                    { index === 0 && <CloseSearchListButton /> }
                                    <div className={styles.imgWrapper}>
                                    </div>
                                    <div className={styles.name}>
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
        </div>
    )
}

export const MainHeaderSkeleton = () => {
    return (
        <>
            <div className={headerStyles.headerWrapper}>
                <Image
                    className={headerStyles.image}
                    src={background}
                    alt="pretty salt body scrab text on background"
                    quality={50}
                    sizes="100vw"
                    priority
                />
                <div className={`${commonStyles.container} ${headerStyles.headerBody}` }>
                    
                    <div className={headerStyles.textHeader} style={{opacity:0}}>
                        <h1 className={headerStyles.h1Header}>НАСТОЯЩИЙ СПА-РИТУАЛ<br />
                            <span className={headerStyles.spanHeader}>ОБНОВЛЕНИЯ<br/> И СИЯНИЯ</span>
                        </h1>
                        <p className={headerStyles.pHeader}>Познакомьтесь с нашими натуральными солевыми скрабами, доступными в разнообразии ароматов, которые подарят вашей коже мягкость и гладкость, словно после спа-процедур!</p>
                        <div className={headerStyles.icons} style={{opacity:0}}>
                            <Icons />
                        </div>
                    </div>
                    <div className={headerStyles.imgWrapper}>
                        <Image className={headerStyles.imgAll}
                            src={allPng} 
                            alt="piramyd of all scrubs with raspberry on top of some cans"
                            quality={100}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </div >
            <Wave />
        </>
        
    )
}