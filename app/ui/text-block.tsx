import styles from "../styles/text-block.module.css"
import Link from "next/link"
import { TextBlockLogoSVG } from "./vectors"

export const TextBlock = () => {

    return (
        <div className={styles.textBlockWrapper}>
            <div className={styles.textHeaderWrapper}>
                <h1 className={styles.h1}>что ты получишь,<br/>выбрав</h1>                
                <div className={styles.logoSvgWrapper}>
                    <TextBlockLogoSVG />
                </div>
            </div>

            <div className={styles.blocks}>
                <div className={`${styles.blockWrapper} ${styles.block1}`}>
                    <h2 className={styles.h2}>БЕЗОПАСНОСТЬ</h2>
                    <p className={styles.p}>Все продукты MANICEL проходят строгий контроль качества, гарантируя безопасность и эффективность каждого скраба</p>        
                </div>
                <div className={`${styles.blockWrapper} ${styles.block2}`}>
                    <h2 className={styles.h2}>ЭФФЕКТИВНОСТЬ</h2>
                    <p className={styles.p}>наши скрабы глубоко очищают, увлажняют и питают кожу, оставляя её мягкой и бархатистой</p>        
                </div>
                <div className={`${styles.blockWrapper} ${styles.block3}`}>
                    <h2 className={styles.h2}>КАЧЕСТВО</h2>
                    <p className={styles.p}>MANICEL использует только лучшие ингредиенты, чтобы вы могли наслаждаться превосходным результатом</p>        
                </div>
            </div>
            <div className={styles.aboutUsButtonWrapper}>
                <Link className={styles.aboutUsButton} href="/catalog">
                    каталог
                </Link>
            </div>
        </div>
    )
}