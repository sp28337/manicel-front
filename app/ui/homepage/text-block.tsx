import styles from "../../styles/homepage/text-block.module.css"
import Link from "next/link"
import { TextBlockLogoSVG } from "../vectors"

export const TextBlock = () => {

    return (
        <article className={styles.textBlockWrapper}>
            <div className={styles.textHeaderWrapper}>
                <h2 className={styles.h1}>
                    что ты получишь,<br/>выбрав
                <div className={styles.logoSvgWrapper}>
                    <TextBlockLogoSVG />
                </div>
                </h2>                
            </div>

            <div className={styles.blocks}>
                <section className={`${styles.blockWrapper} ${styles.block1}`}>
                    <h3 className={styles.h2}>БЕЗОПАСНОСТЬ</h3>
                    <p className={styles.p}>Все продукты MANICEL проходят строгий контроль качества, гарантируя безопасность и эффективность каждого скраба</p>        
                </section>
                <section className={`${styles.blockWrapper} ${styles.block2}`}>
                    <h3 className={styles.h2}>ЭФФЕКТИВНОСТЬ</h3>
                    <p className={styles.p}>наши скрабы глубоко очищают, увлажняют и питают кожу, оставляя её мягкой и бархатистой</p>        
                </section>
                <section className={`${styles.blockWrapper} ${styles.block3}`}>
                    <h3 className={styles.h2}>КАЧЕСТВО</h3>
                    <p className={styles.p}>MANICEL использует только лучшие ингредиенты, чтобы вы могли наслаждаться превосходным результатом</p>        
                </section>
            </div>
            <div className={styles.aboutUsButtonWrapper}>
                <Link className={styles.aboutUsButton} href="/catalog">
                    каталог
                </Link>
            </div>
        </article>
    )
}