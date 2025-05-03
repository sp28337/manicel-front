import Image from "next/image";
import styles from "../styles/search-list.module.css"
import { StaticImageData } from "next/image";
import { fetchFilteredProducts } from "../data";
import { CloseSearchListButton } from "./buttons";
import { ReviewsStars } from "./reviews"

import raspberry from "@/public/raspberry/raspberry-main-1200w.png";
import mango from "@/public/mango/mango-main-1200w.png";
import mint from "@/public/mint/mint-main-no-mint-1200.png";
import bubblegum from "@/public/bubblegum/bubblegum-main-1200w.png";
import caramel from "@/public/caramel/caramel-main-1200w.png";
import coconut from "@/public/coconut/coconut-main-1200w.png";
import lavender from "@/public/lavender/lavender-main-1200w.png";
import peach from "@/public/peach/peach-letual.png";
import inzhir from "@/public/inzhir/inzhir-320w.png"
import citrus from "@/public/citrus/citrus-320w.png"
import apple from "@/public/apple/apple-320w.png"

import mintMango from "@/public/mango-chilli-1200w-1.png"
import coconutLavender from "@/public/lavender-coconut-1200w-1.png"
import peachLavender from "@/public/lavender-peach-1200w-1.png"
import coconutPeach from "@/public/peach-coconut-1200w-1.png"
import trio from "@/public/trio.png"


const images: { [key: number]: StaticImageData } = {
    1: mango,
    2: bubblegum,
    3: inzhir,
    4: caramel,
    5: coconut,
    6: citrus,
    7: raspberry,
    8: peach,
    9: apple,
    10: lavender,
    11: mint,
    12: mintMango,
    13: coconutLavender,
    14: coconutPeach,
    15: peachLavender,
    16: trio,
}


export async function SearchList({ query }: { query: string }) {

    const products = await fetchFilteredProducts(query);  
  
    const chooseClassName = (id: number) => {
        // выбираем стиль для картинок, так как они требуют разных размеров for better UI
        if ([3, 6, 9].includes(id)) {
            return styles.pocketImg
        } else if ([12, 13, 14, 15, 16].includes(id)) {
            return styles.setsImg
        } else {
            return styles.scrabImg
        }
    }

    return (
        <>
            { products.length > 0 &&
                <div className={styles.searchListWrapper}>
                    <ul className={styles.searchList}>
                        { 
                            products.map((product, index) => (
                                <li key={product.id} className={styles.searchRow} >
                                    <a href={`/catalog/${product.id}`} className={styles.link}>
                                        <div className={styles.rowBackground}></div>
                                        
                                        <div className={styles.imgWrapper}>
                                            <Image 
                                                src={images[product.id]}
                                                className={`${styles.image} ${chooseClassName(product.id)}`}
                                                alt={`${product.name}"s profile picture`}
                                                sizes="100vw"
                                                width={120}
                                        />
                                        </div>
                                        <div className={styles.name}>
                                            {product.name}
                                        </div>
                                    </a>
                                    <div className={styles.reviews}>
                                        <ReviewsStars />
                                    </div>
                                    <div className={styles.buttonWrapper}>
                                        <a 
                                            // className={styles.button} 
                                            href={`https://www.wildberries.ru/catalog/${product.articule.toString()}/detail.aspx`}
                                        >
                                            {/* купить */}
                                            <svg  
                                                version="1.0" 
                                                xmlns="http://www.w3.org/2000/svg"  
                                                width="20pt" height="20pt" 
                                                viewBox="0 0 43.000000 54.000000"  
                                                preserveAspectRatio="xMidYMid meet"
                                            >  
                                                <g  
                                                    transform="translate(0.000000,54.000000) scale(0.050000,-0.050000)" 
                                                    fill="#9CA3AF" 
                                                    stroke="3px"
                                                > 
                                                    <path d="M347 1051 c-74 -32 -91 -56 -106 -150 -10 -61 -20 -71 -65 -71 -30 0 -63 -9 -75 -21 -29 -29 -99 -753 -75 -784 27 -36 781 -36 808 0 24 31 -46 755 -75 784 -12 12 -45 21 -75 21 -45 0 -55 10 -65 71 -24 146 -137 209 -272 150z m139 -54 c138 -72 106 -169 -56 -171 -127 -1 -130 0 -130 52 1 107 95 167 186 119z m-250 -285 c8 -65 50 -59 64 10 9 44 19 48 130 48 111 0 121 -4 130 -48 14 -69 56 -75 64 -10 6 52 96 92 96 44 0 -33 60 -586 69 -641 l10 -55 -369 0 -369 0 10 55 c9 55 69 608 69 641 0 48 90 8 96 -44z"/>
                                                </g> 
                                            </svg> 
                                        </a>




                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                    <CloseSearchListButton />
                </div>
            }
        </>
    );
}
