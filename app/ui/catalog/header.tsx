import Image from "next/image"
import styles from "../../styles/catalog/header.module.css"
import commonStyles from "../../styles/common.module.css"
import mainImg from "@/public/all-front-1200w.png"
import backgroundImg from "@/public/salt-body-scrub-500w.png"

export const Header = () => {

    return (
        <header className={styles.headerWrapper}>
            <Image 
                className={styles.backgroundImage}
                src={backgroundImg} 
                alt="pretty salt body scrab text on background"
                quality={0}
                sizes="100vw"
                priority
            />
            <div className={`${commonStyles.container} ${styles.header}`}>
                <div className={styles.text}>
                    <h1 className={styles.h1}>
                        соляные скрабы
                        <br />
                        <span className={styles.span}>
                            и наборы для тела
                        </span>
                    </h1>
                </div>
                <div className={styles.imgWrapper}>
                    <Image
                        className={styles.mainImage}
                        src={mainImg} 
                        alt="scrab"
                        width={1000}
                        sizes="100vw"
                        priority
                    />
                </div>
                <section className={styles.descriptionWrapper}>
                    <p className={styles.description}>
                        <span className={styles.uppercase}>&emsp;&emsp;SALT BODY SCRUB</span> — это 
                        эффективное средство для очищения и ухода за кожей рук, ног, живота, 
                        ягодиц и других участков тела, от 
                        российского бренда <span className={styles.uppercase}>MANICEL</span>
                    </p>
                    <p className={styles.description}>
                        &emsp;&emsp;Скраб мягко отшелушивает ороговевшие клетки, 
                        стимулирует обновление кожи и придаёт ей здоровый сияющий вид.
                    </p>
                </section>
            </div>
        </header>
    )
}