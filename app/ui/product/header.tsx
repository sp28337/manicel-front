import React from "react"
import Image from "next/image"
import commonStyles from "../../styles/common.module.css"
import styles from "../../styles/product-header.module.css"
import { ProductSchema } from "../../lib/definitions"
import { 
    Lavender,
    Fig,
    Mango,
    Bubblegum,
    Caramel,
    Coconut,
    Citrus,
    Raspberry,
    Peach,
    Apple,
    Mint,
    MintMango,
    LavenderCoconut,
    LavenderPeach,
    PeachCoconut,
    Trio,
 } from "./elements"
import { getMainCardImages } from "../../lib/images"
import background from "@/public/salt-body-scrub-500w.png"
import { LeaveSVG, WaveSVG } from "../vectors"

export const Header = (props: { product: ProductSchema }) => {

    const { product } = props

    const backgroundElements: {[key: number]: React.ReactElement} = {
        1: <Mango />,
        2: <Bubblegum />,
        3: <Fig />,
        4: <Caramel />,
        5: <Coconut />,
        6: <Citrus />,
        7: <Raspberry />,
        8: <Peach />,
        9: <Apple />,
        10: <Lavender />,
        11: <Mint />,
        12: <MintMango />,
        13: <LavenderCoconut />,
        14: <PeachCoconut />,
        15: <LavenderPeach />,
        16: <Trio />,
    }

    const mainImages = getMainCardImages()

    const handleH1SetsName = (name: string): React.ReactElement => {
        const splitNames = name.split("+")

        if (splitNames.length === 2) {
            return (
                <div className={styles.h1Sets}>
                    <div>{splitNames[0].trim()}</div>
                    <div className={styles.plus}>+</div>
                    <div>{splitNames[1].trim()}</div>
                </div>
            )
        } else {
            return (
                <div className={styles.h1Sets}>
                    <div>{splitNames[0].trim()}</div>
                    <div style={{marginLeft: "-33%"}} className={styles.plus}>+</div>
                    <div style={{textAlign: "center"}}>{splitNames[1].trim()}</div>
                    <div style={{marginLeft: "33%"}} className={styles.plus}>+</div>
                    <div style={{textAlign: "right"}}>{splitNames[2].trim()}</div>
                </div>
            )
        }
    }

    const checkId = (productId: number): number => {
        const setsId = [12, 13, 14, 15, 16]
        const pocketsId = [3, 6, 9]
        
        for (const id of setsId) {
            if (id === productId) {
                return 1
            }
        }

        for (const id of pocketsId) {
            if (id === productId) {
                return 2
            }
        }

        return 0
    }

    return (

        <header className={styles.header}>
            <div className={styles.background}>
                <Image 
                    className={styles.backgroundText}
                    src={background} 
                    alt="salt body scrub written with beautiful font on background"
                    quality={0}
                    sizes="100vw"
                />

                <>
                    {checkId(product.id) === 0 &&  backgroundElements[product.id]}
                    {checkId(product.id) === 2 &&  backgroundElements[product.id]}
                </>

                <div className={`${styles.content} ${commonStyles.container}`}>
                    <div className={styles.wrapper}>
                        <div className={
                            checkId(product.id) === 1      ? 
                            `${styles.imgSetsWrapper}`     : 
                            `${styles.imgDefaultWrapper}`
                            }>
                            <Image 
                                className={`${styles.mainImg}`}
                                src={mainImages[product.id]} 
                                alt={product.category.name}
                                sizes="100vw"
                                priority
                            />
                            <p className={styles.note}>
                                {product.note}
                            </p>
                        </div>

                        <div className={
                            checkId(product.id) === 1      ? 
                            `${styles.textSets}`           : 
                            checkId(product.id) === 2      ?
                            `${styles.textPockets}`        : 
                            `${styles.text}`
                            }>

                            <h1 className={styles.h1Wrapper}>
                               {    
                                    checkId(product.id) === 1         ? 
                                    handleH1SetsName(product.name)    : 
                                    <span className={`${styles.h1}`}>
                                        {product.name}
                                    </span> 
                                }
                                <span className={styles.span}>
                                    {product.category.name}
                                </span>
                            </h1>

                            <ul className={styles.list}>
                                
                                {product.effects.map((item, index) => (
                                    <li key={index} className={
                                        checkId(product.id) === 1      ? 
                                        `${styles.listSetsItem}`       : 
                                        `${styles.listItem}`
                                        }
                                    >
                                        <span className={styles.liItemWrapper}>
                                            <LeaveSVG />
                                        </span>
                                        <span className={styles.liItemWrapper}>
                                            {item.description}
                                        </span>
                                    </li>
                                ))}

                            </ul>
                        </div>

                    </div>
                </div>

            </div>
            <WaveSVG />
        </header>
    );
};