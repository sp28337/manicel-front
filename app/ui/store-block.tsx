import styles from "../styles/store-block.module.css"
import background from "@/public/salt-body-scrub-500w.png"
import { WBLogo } from "./logotips"
import Image from "next/image"

export const StoreBlock = async () => {

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.image}
                src={background}
                alt="pretty salt body scrab text on background"
                quality={0}
                sizes="100vw"
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
                <WBLogo />
            </div>
        </div>
    );
};
