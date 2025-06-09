"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import styles from "../../../styles/homepage/header.module.css"
import textBlockStyles from "../../../styles/homepage/text-block.module.css"
import commonStyles from "../../../styles/common.module.css"
import React, { useEffect } from "react"
import { WaveSVG } from "../../../ui/vectors"
import backgroundImg from "@/public/salt-body-scrub-500w.png"
import all from "@/public/all-800w.png"

export default function Error({error}: {error: Error & { digest?: string } }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    const { replace } = useRouter()
 
    return (
        <>
            <div className={styles.headerWrapper}>
                <Image
                    className={styles.backgroundImage}
                    src={backgroundImg}
                    alt="pretty salt body scrab text on background"
                    quality={0}
                    sizes="100vw"
                    priority
                />
                <div className={`${commonStyles.container} ${styles.header}` }>
                    
                    <div className={styles.textBlock} style={{gap: "30px"}}>
                        <h1 className={styles.h1}>
                            <span className={styles.span}>
                                УПС . . . 
                            </span>
                            что-то пошло не так
                        </h1>
                        <button
                            type="button"
                            className={textBlockStyles.aboutUsButton}
                            style={{margin: "0 auto"}}
                            onClick={
                                () => replace("/catalog", { scroll: false })
                            }
                        >
                            в каталог
                        </button>
                    </div>
                    <div className={styles.imgWrapper}>
                        <Image className={styles.mainImage}
                            src={all} 
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
            </div >
            <div style={{height: "100dvh"}}></div>
        </>
    )
}