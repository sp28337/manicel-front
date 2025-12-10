import styles from "../../styles/skeletons/spinner.module.css"

export default function Loading() {
    return (
        <div className={styles.preloader}>
            <span className={styles.spinner}></span>
        </div>
    )
}