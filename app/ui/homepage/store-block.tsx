import styles from "../../styles/homepage/store-block.module.css"
import Link from "next/link"

export const StoreBlock = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2 className={styles.h2}>
                        закажите сегодня
                    </h2>
                    <p className={styles.p}>
                        Вы можете приобрести официальную продукцию MANICEL на маркетплейсах&emsp;
                        <Link className={styles.wb} href="https://www.wildberries.ru/brands/310747490-manicel">
                            Wildberries
                        </Link>
                    </p>
                </div>
                <Link href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.wbStore}>
                    в магазин
                </Link>
            </div>
        </section>
    );
};
