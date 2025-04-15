import { Icons } from './Icons';
import { Nav } from './nav/Nav';
import { Wave } from './Wave';
import commonStyles from '../../styles/common.module.css';
import headerStyles from '../../styles/header.module.css';
import Image from "next/image";
import allPng from "../../../../public/all-1200w.png";
import styles from '../../styles/header.module.css'
import background from "../../../../public/salt-body-scrub-1140w.png"

export const Header = () => {
    return (
        <>
            <header className={headerStyles.headerWrapper}>
                <div>
                    <div className={`${commonStyles.container} ${headerStyles.headerBody}` }>
                        <Image
                            className={styles.image}
                            alt="salt body scrab"
                            src={background}
                        />
                        <div className={headerStyles.textHeader}>
                            <h1 className={headerStyles.h1Header}>НАСТОЯЩИЙ СПА-РИТУАЛ<br />
                                <span className={headerStyles.spanHeader}>ОБНОВЛЕНИЯ<br/> И СИЯНИЯ</span>
                            </h1>
                            <p className={headerStyles.pHeader}>Познакомьтесь с нашими натуральными солевыми скрабами, доступными в разнообразии ароматов, которые подарят вашей коже мягкость и гладкость, словно после спа-процедур!</p>
                            <div className={styles.icons}>
                                <Icons  />
                            </div>
                        </div>
                        <div className={headerStyles.imgWrapper}>
                            <Image className={styles.imgAll}
                                src={allPng} 
                                alt="piramyd of all scrubs with raspberry on top of some cans"
                                sizes="
                                (max-width: 1248px) 100vw,
                                1200px"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <Wave />
        </>
    );
};