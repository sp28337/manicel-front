import { Nav } from '../../header/nav/Nav';
import commonStyles from '../../../styles/common.module.css';
import styles from '../../../styles/catalog.module.css';
import { Wave } from '../../header/Wave';
import allFront from "../../../../../public/all-front-1200w.png";

import Image from 'next/image';
import background from "../../../../../public/salt-body-scrub-1140w.png"

export const HeaderCatalog = () => {

    // const images = [
    //     raspberry,
    //     mango,
    //     mint,
    //     bubblegum,
    //     caramel,
    // ]

    // const data = [
    //     {
    //         name: "raspberry",
    //         img: raspberry,
    //     },
    //     {
    //         name: "mango",
    //         img: mango,
    //     },
    //     {
    //         name: "mint",
    //         img: mint,
    //     },
    //     {
    //         name: "bubblegum",
    //         img: bubblegum,
    //     },
    //     {
    //         name: "caramel",
    //         img: caramel,
    //     },  
    // ]

    return (
        <>
            <header className={styles.headerWrapper}>
                <Image 
                    className={styles.saltBodyScrub}
                    src={background} 
                    alt="scrab"
                    placeholder="blur"
                    quality={100}
                    // fill
                    sizes="100vw"
                />
                <div className={`${commonStyles.container}`}>
                    <Nav />
                    <div className={styles.headerBody}>
                        <div className={styles.textHeader}>
                            <h1 className={styles.h1Header}>соляные скрабы<br />
                                <span className={styles.spanHeader}>и наборы для тела</span>
                            </h1>
                        </div>
                        <div className={styles.saltBodyScrubWrapper}>
                        </div>
                        <div className={styles.imgWrapper}>
                            <Image 
                                className={`${styles.scrub}`}
                                src={allFront} 
                                alt="scrab"
                                width={800}
                                sizes="(max-width: 1248px) 100vw, 1200px"
                            />
                        </div>
                        <div className={styles.bottomText}>
                            <p>
                                Наши средства для ухода за кожей состоят на 98% из натуральных ингредиентовна, на 30% из растительных масел, включая в себя натуральные баттеры кокоса, ши, масло миндаля, а также витамин Е.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <Wave />
        </>
    );
};