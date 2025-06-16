import styles from "../../styles/product/body.module.css"
import { ProductSchema } from "../../lib/definitions"

export const Description = (props: { product: ProductSchema }) => {

    return (
        <section className={`${styles.blockWrapper}`}>
            <h2 className={`${styles.h2} ${styles.h2Description}`}>описание</h2>
            <span className={styles.pBackground}>
                <p className={styles.p}>
                    <div>
                        <span className={styles.saltBodyScrub}>&emsp;salt body scrab</span> - {props.product.description}
                    </div>
                    <br/>
                    <div>
                        &emsp;{props.product.flavor.description}
                    </div>
                </p>
            </span>
        </section>
    )
}