"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import styles from "../styles/skeletons/header.module.css"
import headerStyles from "../styles/homepage/header.module.css"
import commonStyles from "../styles/common.module.css"
import React, { useEffect } from "react"
import backgroundImg from "@/public/salt-body-scrub-500w.png"
import all from "@/public/all-800w.png"
 
export default function Error({ error }: { error: Error & { digest?: string } }) {
   
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
                <div className={`${commonStyles.container} ${headerStyles.header}` }>
                    
                    <div className={headerStyles.textBlock} style={{gap: "30px"}}>
                        <h1 className={headerStyles.h1}>
                            <span className={headerStyles.span}>
                                УПС . . . 
                            </span>
                            что-то пошло не так
                        </h1>
                        <button
                            type="button"
                            className={headerStyles.catalogLink}
                            onClick={
                                () => replace("/catalog", { scroll: false })
                            }
                        >
                            в каталог
                        </button>
                    </div>
                    <div className={headerStyles.imgWrapper}>
                        <Image className={headerStyles.mainImage}
                            src={all} 
                            alt="piramyd of all scrubs with raspberry on top of some cans"
                            quality={100}
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </div >
            <div style={{height: "100dvh"}}></div>
        </>
    )
}