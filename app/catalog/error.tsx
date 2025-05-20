"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "../styles/header.module.css"
import textBlockStyles from "../styles/text-block.module.css"
import commonStyles from "../styles/common.module.css"
import React, { useEffect } from "react"
import { WaveSVG } from "../ui/vectors"
import backgroundImg from "@/public/salt-body-scrub-500w.png"
import all from "@/public/all-800w.png"
 
export default function Error({error, reset,}: {error: Error & { digest?: string } 
    reset: () => void}
) {
    useEffect(() => {
        console.error(error)
    }, [error])
 
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
                        <Link href="/" 
                            className={textBlockStyles.aboutUsButton}
                            style={{margin: "0 auto"}}
                            onClick={
                                () => reset()
                            }
                        >
                            на главную
                        </Link>
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