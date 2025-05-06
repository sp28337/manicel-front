import homepageHeaderStyles from "../styles/skeletons/header.module.css"
import searchListStyles from "../styles/skeletons/search-list.module.css"
import textBlockStyles from "../styles/skeletons/text-block.module.css"
import storeBlokStyles from "../styles/skeletons/store-block.module.css"
import catalogStyles from "../styles/catalog.module.css"
import bestsellersStyles from "../styles/skeletons/bestsellers.module.css"
import productHeaderStyles from "../styles/skeletons/product-header.module.css"
import productBodyStyles from "../styles/skeletons/product-body.module.css"
import commonStyles from "../styles/common.module.css"
import headerStyles from "../styles/header.module.css"
import Image from "next/image"
import allFront from "@/public/all-front-1200w.png"
import { WaveSVG, ReviewsStarsSVG} from "./vectors"
import mango from "@/public/mango/mango-1200w.png"
import background from "@/public/salt-body-scrub-500w.png"

export const SearchListSkeleton = () => {
    return (
        <div className={searchListStyles.loadning}>
            <div className={searchListStyles.searchListWrapper}>
                    <ul className={searchListStyles.searchList}>
                        { 
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <li key={index} className={searchListStyles.searchRow} >
                                    <div className={searchListStyles.imgWrapper}>
                                    </div>
                                    <div className={searchListStyles.name}>
                                    </div>
                                    <div className={searchListStyles.buttonWrapper}>
                                    </div>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
        </div>
    )
}

export const HomepageHeaderSkeleton = () => {
    return (
        <>
            <div className={homepageHeaderStyles.headerWrapper}>
                <Image
                    className={headerStyles.image}
                    src={background}
                    alt=""
                    quality={0}
                    sizes="100vw"
                    priority
                />
                <div className={`${commonStyles.container} ${headerStyles.headerBody}` }>
                    <div className={homepageHeaderStyles.textHeader}>
                        <div className={homepageHeaderStyles.h1}></div>
                        <div className={homepageHeaderStyles.p}></div>
                        <div className={homepageHeaderStyles.icons}></div>
                    </div>
                    <div className={homepageHeaderStyles.imgWrapper}></div>
                </div>
            </div >
            <WaveSVG />
        </>
        
    )
}

export const TextBlockSkeleton = () => {
    return (
        <div className={textBlockStyles.textBlockWrapper}>
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
        <div className={bestsellersStyles.bestsellersWrapper}>
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
                src={background}
                alt=""
                quality={0}
                sizes="100vw"
            />
        </div>
    )
}

export const CatalogHeaderSkeleton = () => {
    return (
        <>
            <div className={catalogStyles.headerWrapper} >
                <Image 
                    className={catalogStyles.saltBodyScrub} 
                    src={background} 
                    alt="pretty salt body scrab text on background"
                    quality={0}
                    sizes="100vw"
                    priority
                />
                <div className={`${commonStyles.container}`}>
                    <div className={catalogStyles.headerBody}>
                        <div className={catalogStyles.textHeader}>
                            <div className={catalogStyles.h1Header}><br />
                                <span className={catalogStyles.spanHeader}></span>
                            </div>
                        </div>
                        <div className={catalogStyles.saltBodyScrubWrapper}>
                        </div>
                        <div className={catalogStyles.imgWrapper} style={{opacity:0}}>
                            <Image 
                                className={`${catalogStyles.scrub}`}
                                src={allFront} 
                                alt="scrab"
                                width={800}
                                sizes="100vw"
                                priority
                            />
                        </div>
                        <div className={catalogStyles.bottomText} style={{opacity:0}}>
                            <div>
                                Наши средства для ухода за кожей состоят на 98% из натуральных ингредиентовна, на 30% из растительных масел, включая в себя натуральные баттеры кокоса, ши, масло миндаля, а также витамин Е.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WaveSVG />
        </>
    )
}

export const CatalogBodySkeleton = () => {
    return (
        <div className={`${commonStyles.container} ${catalogStyles.bodyWrapper}`}>
            <div className={catalogStyles.urlPath} style={{opacity:0}}>
                <div className={catalogStyles.pathLink}> главная </div>
                &gt;
                <div className={catalogStyles.activePath}> каталог </div>
            </div>
            <p className={catalogStyles.description} style={{opacity:0}}>Скрабы для тела SALT BODY SCRUB от российского бренда MANICEL — это эффективное средство для очищения и ухода за кожей рук, ног, живота, ягодиц и других участков тела. Скраб мягко отшелушивает ороговевшие клетки, стимулирует обновление кожи и придаёт ей здоровый сияющий вид.</p>
            <h1 className={catalogStyles.h1Body} style={{opacity:0}}>каталог</h1>
            <ul className={catalogStyles.catalogList}>
                {[...Array(16).keys()].map(
                    (index) => (
                    <div key={index} className={`${catalogStyles.cardItem}`}>
                        <div className={`${catalogStyles.gradient}`}></div>
                            <div className={catalogStyles.cardLink}>
                                <Image 
                                    className={`${catalogStyles.img}`}
                                    style={{opacity:0}}
                                    src={mango} 
                                    alt={"scrub image"}
                                    sizes="100vw"
                                    width={210}
                                />
                            </div>
                            <div className={catalogStyles.cardContent}>
                                <h3 className={catalogStyles.h3Body}>{}</h3>
                                <span className={catalogStyles.descScrab}>{}</span>
                                <span style={{opacity:0}}>
                                    <ReviewsStarsSVG />
                                </span>
                                {/* <div className={styles.price}>{"357 P"}<span className={styles.oldPrice}>{"675 P"}</span></div> */}
                            </div>
                            <div className={catalogStyles.infoButtonWrapper} style={{opacity:0}}>                            
                                <div 
                                    className={catalogStyles.infoButton} 
                                >
                                    КУПИТЬ
                                </div>
                            </div>  
                    </div>

                ))}
            </ul>
            <div className={catalogStyles.bottomWrapper}>
                <div className={catalogStyles.iconsWrapper}>
                </div>
                <div className={catalogStyles.partners}>
                </div>
            </div>
        </div>
    )
}

export const ProductHeaderSkeleton= () => {
    return (
        <>
            <div className={productHeaderStyles.background}>
                <Image 
                    className={productHeaderStyles.backgroundText}
                    src={background} 
                    alt=""
                    quality={0}
                    sizes="100vw"
                    priority
                />
            </div>
            <WaveSVG />
        </>
    )
}

export const ProductBodySkeleton= () => {
    return (
        <div className={productBodyStyles.wrapper}></div>
    )
}