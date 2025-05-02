import Image from 'next/image';
import commonStyles from '../../../styles/common.module.css';
import styles from '../../../styles/catalog.module.css';
import { Wave } from '../../header/Wave';
import allFront from "../../../../../public/all-front-1200w.png";

import background from "../../../../../public/salt-body-scrub-1140w.png"

export const HeaderCatalog = () => {

    return (
        <>
            <header className={styles.headerWrapper}>
                <Image 
                    className={styles.saltBodyScrub}
                    src={background} 
                    alt="pretty salt body scrab text on background"
                    quality={50}
                    sizes="100vw"
                    priority
                />
                <div className={`${commonStyles.container}`}>
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
                                sizes="100vw"
                                priority
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