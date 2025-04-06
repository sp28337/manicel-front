import styles from '../../styles/store-block.module.css';
import background from "../../../../public/salt-body-scrub-1140w.png"
import wbLogo from "../../../../public/wildberries-logo.svg"

import Image from 'next/image';

export const StoreBlock = () => {
    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.image}
                alt="salt body scrab"
                src={background}
            />
            <div className={styles.content}>
                <h2 className={styles.h2}>
                    закажите сегодня
                </h2>
                <p className={styles.p}>
                    Подарите себе или своим близким возможность насладиться уходом за телом на высшем уровне. 
                </p>
                <div className={styles.aWrapper}>
                    <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.a}>
                        в магазин
                    </a>
                </div>
            </div>
            
            <div className={styles.partners}>
                <Image 
                    className={styles.wbLogo}
                    priority
                    src={wbLogo}
                    alt="Wildberries logo"
                />
                {/* <Image 
                    className={styles.wbLogo}
                    priority
                    src={wbLogo}
                    alt="Wildberries logo"
                />
                <Image 
                    className={styles.wbLogo}
                    priority
                    src={wbLogo}
                    alt="Wildberries logo"
                /> */}

            </div>
        </div>
    );
};
