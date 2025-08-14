import styles from "../../styles/homepage/text-block.module.css"
import { TextBlockLogoSVG } from "../vectors"

export const TextBlock = () => {

    return (
        <article className={styles.textBlockWrapper}>
            <div className={styles.textHeaderWrapper}>
                <h2 className={styles.h2}>
                    что ты получишь,<br/>выбрав
                    <div className={styles.logoSvgWrapper}>
                        <TextBlockLogoSVG />
                    </div>
                </h2>                
            </div>

            <div className={styles.blocks}>
                <section className={styles.blockWrapper}>
                    <h3 className={styles.h3}>БЕЗОПАСНОСТЬ</h3>
                    <span className={styles.pBackground}>
                        <p className={styles.p}>
                            Все продукты MANICEL проходят строгий контроль качества, 
                            гарантируя безопасность и эффективность каждого скраба
                        </p>
                    </span>
                </section>
                <section className={styles.blockWrapper}>
                    <h3 className={styles.h3}>ЭФФЕКТИВНОСТЬ</h3>
                    <span className={styles.pBackground}>
                        <p className={styles.p}>
                            Наши скрабы глубоко очищают, увлажняют и питают кожу, 
                            оставляя её мягкой и бархатистой
                        </p>        
                    </span>
                </section>
                <section className={styles.blockWrapper}>
                    <h3 className={styles.h3}>КАЧЕСТВО</h3>
                    <span className={styles.pBackground}>
                        <p className={styles.p}>
                            MANICEL использует только лучшие ингредиенты, 
                            чтобы вы могли насладиться превосходным результатом
                        </p>        
                    </span>
                </section>
            </div>
        </article>
    )
}