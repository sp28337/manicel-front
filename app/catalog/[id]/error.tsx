"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "../../styles/product/error.module.css"
import commonStyles from "../../styles/common.module.css"
import React, { useEffect } from "react"
import { WaveSVG } from "../../ui/vectors"
import backgroundImg from "@/public/404.png"
import all from "@/public/all-800w.png"

 
export default function Error({error, reset,}: {error: Error & { digest?: string } 
    reset: () => void}
) {
    useEffect(() => {
        console.error(error)
    }, [error])
 
    return (
        <>
            <header className={styles.header}>
                <Image
                    className={styles.backgroundImage}
                    src={backgroundImg}
                    alt="pretty salt body scrab text on background"
                    quality={0}
                    sizes="100vw"
                    priority
                />
                <div className={`${styles.wrapper} ${commonStyles.container}`}>
                    <div className={styles.imgDefaultWrapper}>
                        <Image 
                            className={`${styles.mainImage}`}
                            src={all} 
                            alt={""}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    <div className={styles.text}>
                        <h1 className={styles.h1}>упс . . .<br />
                            <span className={styles.span}>что-то пошло не так</span>
                        </h1>
                        <button>
                            <Link 
                                href="/"
                                className={styles.buttonText}
                                onClick={() => reset()}
                            >
                                обновить
                            </Link>
                        </button>
                    </div>
                </div>
                <div className={styles.wave}>
                    <WaveSVG />
                </div>
            </header>
            <div className={styles.body}></div>
        </>
    )
    }