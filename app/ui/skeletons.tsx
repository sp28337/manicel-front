import skeletonStyles from "../styles/skeletons.module.css"
import textBlockStyles from "../styles/text-block.module.css"
import storeBlokStyles from "../styles/store-block.module.css"
import catalogStyles from "../styles/catalog.module.css"
import { CloseSearchListButton } from "./buttons"
import commonStyles from "../styles/common.module.css"
import headerStyles from "../styles/header.module.css"
import Image from "next/image"
import background from "@/public/salt-body-scrub-1140w.png"
import allPng from "@/public/all-1200w.png"
import allFront from "@/public/all-front-1200w.png"
import { WBLogo } from "./logotips"
import { IconsSVG, WaveSVG, ReviewsStarsSVG} from "./vectors"
import bestsellersStyles from "../styles/bestsellers.module.css"
import inzhirPng from "@/public/inzhir/inzhir-main-790w.png"
import mango from "@/public/mango/mango-1200w.png"

export const LoadningSkeleton = () => {
    return (
        <div className={skeletonStyles.loadning}>
            <div className={skeletonStyles.searchListWrapper}>
                    <ul className={skeletonStyles.searchList}>
                        { 
                            [1, 2, 3, 4, 5].map((_, index) => (
                                <li key={index} className={skeletonStyles.searchRow} >
                                    { index === 0 && <CloseSearchListButton /> }
                                    <div className={skeletonStyles.imgWrapper}>
                                    </div>
                                    <div className={skeletonStyles.name}>
                                    </div>
                                    <div className={skeletonStyles.buttonWrapper}>
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
                            <IconsSVG />
                        </div>
                    </div>
                    <div className={headerStyles.imgWrapper} style={{opacity:0}}>
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
            <WaveSVG />
        </>
        
    )
}

export const TextBlockSkeleton = () => {
    return (
        <div className={textBlockStyles.textBlockWrapper}>
            <div className={textBlockStyles.textHeaderWrapper} style={{opacity:0}}>
                <h1 className={textBlockStyles.h1}>что ты получишь,<br/>выбрав</h1>
                <div className={textBlockStyles.logoSvgWrapper}>
                    <svg className={textBlockStyles.logoSvg} width="218" height="53" viewBox="0 0 218 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.73228 50.9099H0V49.1409C2.24761 48.5611 3.53884 48.2773 4.24028 45.6028L16.4623 7.94815C16.4977 7.05039 16.3743 6.61178 15.9634 5.92642C15.2238 5.17122 14.735 4.89727 13.7186 4.66284H11.2243V2.64111H16.9611C18.3759 3.11081 18.7405 3.65553 18.9566 4.91556L29.682 44.592L40.9062 7.94815C40.2618 5.36008 39.2194 4.54474 35.6683 4.66284V2.64111H41.6545C42.7913 3.18389 43.1784 4.1419 43.65 6.43185L55.872 46.6137C56.157 47.3417 56.3339 47.7438 56.8697 48.3827C57.4179 48.8021 57.6799 48.8714 58.1168 48.8881H59.1145V50.9099H51.1328V49.1409C52.2075 48.9086 52.6434 48.6557 52.6294 47.6246L52.629 47.5245C52.6274 47.1658 52.6264 46.9362 52.6294 46.361C52.6326 45.7341 42.1534 11.4862 42.1534 11.4862L29.682 50.9099H27.936L17.46 11.4862L5.98628 46.6137V47.6246C6.02645 48.82 6.70446 48.8744 7.73228 49.1409V50.9099Z" fill="#EAA233"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M60.3622 50.9099V48.8881H61.8588C62.8112 48.5023 63.2358 48.1685 63.8542 47.3718L76.0762 8.95901C75.2774 5.82602 74.1379 4.81716 70.5887 4.66284V2.64111H76.3256C77.4509 2.79897 77.9336 3.45439 78.5705 5.42099L91.7902 46.8664C92.2669 47.9406 92.638 48.399 93.5362 48.8881H94.7833V50.9099H87.051V48.8881H88.5476C88.8158 48.4112 88.7987 48.0738 88.5476 47.3718L82.0624 26.9018H72.5842L66.099 47.3718C65.8896 48.3707 65.9687 48.7714 66.8473 48.8881H67.5956V50.9099H60.3622ZM73.3325 24.6274L77.3233 12.497L81.3142 24.6274H73.3325Z" fill="#EAA233"/>
                        <path d="M96.2792 48.8881V50.9099H103.513V48.8881H102.265C101.433 48.6321 101.223 48.2391 101.018 47.3718V10.4753L114.238 50.9099H116.233V6.43185C116.466 5.09755 117.094 4.71571 118.728 4.41013V2.64111H111.494V4.66284C112.868 4.74825 113.54 4.94459 113.989 6.43185V38.5268L101.767 2.64111H96.2792V4.41013C97.9441 4.60514 98.5275 5.01658 98.7735 6.43185V47.3718C98.1278 48.7275 97.502 48.8754 96.2792 48.8881Z" fill="#EAA233"/>
                        <path d="M128.705 50.9099H119.975V49.1409C121.915 49.0145 122.483 48.5481 122.719 47.1191V6.43185C122.532 4.8424 121.817 4.5031 119.975 4.41013V2.64111H128.705V4.41013C127.07 4.63239 126.406 4.9735 126.211 6.43185V47.1191C126.44 48.6412 127.069 49.0044 128.705 49.1409V50.9099Z" fill="#EAA233"/>
                        <path d="M165.621 9.21157L164.624 3.14638C162.841 1.79259 161.469 1.28023 158.637 0.619222C153.352 -0.45282 150.528 -0.143477 145.667 1.63009C140.185 4.21957 137.903 6.08121 134.443 9.717C131.184 13.5101 129.912 16.03 128.456 21.0892C127.625 25.9268 127.548 28.5969 128.706 33.2196C130.087 37.2571 131.045 39.4278 133.694 42.8228C136.225 45.4156 137.583 46.8913 140.928 48.888C146.091 51.6457 149.075 52.3435 154.148 52.1733C162.876 51.1933 166.796 49.4275 171.857 43.8337C175.843 39.5153 177.073 36.7838 178.592 31.7033C179.58 27.0604 179.432 24.7409 178.592 20.8365C177.394 17.3686 176.484 15.9712 174.85 13.5077L173.354 15.024C175.059 17.2934 175.786 18.6715 176.596 21.3419C177.53 25.5969 177.544 27.8657 176.596 31.7033C175.159 36.3233 173.704 38.606 170.36 42.3174C165.16 47.643 161.643 49.2328 154.397 49.6461C149.148 49.0623 146.615 48.2567 142.923 45.8554C140.038 44.0844 138.731 42.8156 136.688 40.2956C134.235 37.4492 133.368 35.6733 131.948 32.4615C130.438 28.1355 130.346 25.6253 130.701 21.0892C131.808 16.6502 133.048 14.3942 136.189 10.7279C139.69 7.14923 141.901 5.45861 146.415 3.14638C150.972 1.85025 153.537 1.66696 158.138 2.64095C159.157 2.89516 159.716 3.07254 160.633 3.65181C162.363 5.57554 163.012 6.82546 163.875 9.21157H165.621Z" fill="#EAA233"/>
                        <path d="M196.581 10.6522L198.327 10.1467L196.331 4.83969C195.917 3.72785 195.487 3.32972 194.336 3.07068H179.62V5.09241C181.178 5.15111 181.759 5.50319 182.114 6.86142V47.296C181.775 48.928 181.275 49.4796 179.62 49.5704V51.3394H194.087C195.516 51.0395 195.964 50.6209 196.331 49.5704L198.077 44.5161L196.581 43.5052C195.324 45.4456 194.539 46.5082 192.839 48.3068C192.308 48.9835 191.784 49.2441 190.595 49.5704H185.357V20.5081C189.743 20.5704 191.408 21.4983 192.839 24.8043L194.835 24.2988L193.588 20.5081C192.876 18.8466 192.312 18.4654 191.093 18.4864H185.357V5.09241H191.093C192.429 5.57985 193.143 6.17115 194.336 7.87228L196.581 10.6522Z" fill="#EAA233"/>
                        <path d="M205.03 2.38867H199.043V4.66312C200.6 4.54192 201.084 4.88382 201.538 6.17941V46.8667C201.439 48.4722 200.929 48.9043 199.293 48.8884V51.1629H213.261C215.072 50.9691 215.697 50.4888 216.005 48.8884L218 43.5814H216.005L213.261 47.1194C212.31 48.4076 211.448 48.8065 209.27 48.8884H205.03V2.38867Z" fill="#EAA233"/>
                    </svg>
                </div>
            </div>

            <div className={textBlockStyles.blocks}>
                <div className={`${textBlockStyles.blockWrapper} ${textBlockStyles.block1}`}>
                    <h2 className={textBlockStyles.h2} style={{opacity:0}}>БЕЗОПАСНОСТЬ</h2>
                    <p className={textBlockStyles.p} style={{opacity:0}}>Все продукты MANICEL проходят строгий контроль качества, гарантируя безопасность и эффективность каждого скраба</p>        
                </div>
                <div className={`${textBlockStyles.blockWrapper} ${textBlockStyles.block2}`}>
                    <h2 className={textBlockStyles.h2} style={{opacity:0}}>ЭФФЕКТИВНОСТЬ</h2>
                    <p className={textBlockStyles.p} style={{opacity:0}}>наши скрабы глубоко очищают, увлажняют и питают кожу, оставляя её мягкой и бархатистой</p>        
                </div>
                <div className={`${textBlockStyles.blockWrapper} ${textBlockStyles.block3}`}>
                    <h2 className={textBlockStyles.h2} style={{opacity:0}}>КАЧЕСТВО</h2>
                    <p className={textBlockStyles.p} style={{opacity:0}}>MANICEL использует только лучшие ингредиенты, чтобы вы могли наслаждаться превосходным результатом</p>        
                </div>
            </div>
            <div className={textBlockStyles.aboutUsButtonWrapper} style={{opacity:0}}>
                <div className={textBlockStyles.aboutUsButton}>
                    узнать больше
                </div>
            </div>
        </div>
    )
}

export const BestsellersSkeleton = () => {
    return (
        <div className={bestsellersStyles.bestsellersWrapper}>
            <h1 className={bestsellersStyles.h1} style={{opacity:0}}>
                бестселлеры
            </h1>
            <div className={`${bestsellersStyles.bestsellersGrid} ${bestsellersStyles.bestsellersFlex}`}>
            {[1, 2, 3, 4, 5].map((product, index) => (
                <div key={index}>
                    <div className={`${bestsellersStyles.productItem}`}>
                        <div className={`${bestsellersStyles.gradient}`}></div>
                        <div className={bestsellersStyles.background}></div>
                        <div className={`${bestsellersStyles.scrubWrapper}`} style={{opacity:0}}>
                            <Image 
                                className={`${bestsellersStyles.scrub}`} 
                                src={inzhirPng} 
                                alt={""}
                                sizes="100vw"
                                width={400}
                            />
                        </div>
                        <div className={bestsellersStyles.infoContainer}>
                            <h3 className={`${bestsellersStyles.h3}`}></h3>
                            <p className={bestsellersStyles.p}></p>
                            {/* <ReviewsStars /> */}
                        </div>
                        <div className={bestsellersStyles.composition} >
                            <h3 className={`${bestsellersStyles.h3}`}></h3>
                            <div className={bestsellersStyles.ingredientsWrapper} style={{opacity:0}}>
                                {
                                    [1, 2, 3, 4, 5].map((ingredient: number, index: number) => (
                                        <span className={bestsellersStyles.infoItem} key={index}>
                                            {ingredient}
                                        </span>)
                                    )
                                }
                            </div>  
                        </div>
                    </div>
                </div >
            ))}
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
                quality={50}
                sizes="100vw"
            />
            <div className={storeBlokStyles.content} style={{opacity:0}}>
                <h2 className={storeBlokStyles.h2}>
                    закажите сегодня
                </h2>
                <p className={storeBlokStyles.p}>
                    Подарите себе или своим близким возможность насладиться уходом за телом на высшем уровне. 
                </p>
                <div className={storeBlokStyles.aWrapper}>
                    <div className={storeBlokStyles.a}>
                        в магазин
                    </div>
                </div>
            </div>
            
            <div className={storeBlokStyles.partners} style={{opacity:0}}>
                <WBLogo />
            </div>
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