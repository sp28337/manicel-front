import Image from "next/image"
import backgroundImg from "@/public/salt-body-scrub-500w.png"
import headerStyles from "../styles/header.module.css"
import textBlockStyles from "../styles/skeletons/text-block.module.css"
import bestsellersStyles from "../styles/skeletons/bestsellers.module.css"
import storeBlokStyles from "../styles/skeletons/store-block.module.css"
// import commonStyles from "../styles/common.module.css"
import { 
    WaveSVG 
} from "./vectors"

export const HeaderSkeleton = () => {
    return (
        <div className={headerStyles.headerWrapper}>
            <Image
                className={headerStyles.backgroundImage}
                src={backgroundImg}
                alt="pretty salt body scrab text on background"
                quality={0}
                sizes="100vw"
                priority
            />
            <div className={headerStyles.wave}>
                <WaveSVG />
            </div>
        </div>
    )
}

export const TextBlockSkeleton = () => {
    return (
        <div className={`${textBlockStyles.textBlockWrapper}`}>
            <div className={textBlockStyles.textHeaderWrapper}></div>
            <div className={textBlockStyles.blocks}>
                <div className={`${textBlockStyles.blockWrapper} ${textBlockStyles.block1}`}>
                </div>
                <div className={`${textBlockStyles.blockWrapper} ${textBlockStyles.block2}`}>
                </div>
                <div className={`${textBlockStyles.blockWrapper} ${textBlockStyles.block3}`}>
                </div>
            </div>
            <div className={textBlockStyles.aboutUsButtonWrapper}>
            </div>
        </div>
    )
}

export const BestsellersSkeleton = () => {
    return (
        <div className={`${bestsellersStyles.bestsellersWrapper}`} >
            <div className={bestsellersStyles.h1}>
            </div>
            <div className={`${bestsellersStyles.bestsellersGrid} ${bestsellersStyles.bestsellersFlex}`}>
                <div className={`${bestsellersStyles.productItem}`}></div>
                <div className={`${bestsellersStyles.productItem}`}></div>
                <div className={`${bestsellersStyles.productItem}`}></div>
                <div className={`${bestsellersStyles.productItem}`}></div>
                <div className={`${bestsellersStyles.productItem}`}></div>
            </div>
        </div>
    )
}

export const StoreBlockSkeleton = () => {
    return (
        <div className={storeBlokStyles.wrapper}>
            <Image
                className={storeBlokStyles.image}
                src={backgroundImg}
                alt=""
                quality={0}
                sizes="100vw"
            />
        </div>
    )
}