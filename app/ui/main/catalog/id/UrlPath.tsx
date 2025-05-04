import Link from "next/link"
import styles from "../../../../styles/body-id.module.css";

export const UrlPath = ({ name }: { name: string}) => {

    return (
        <div className={styles.urlPath}>
            <Link className={styles.pathLink} href="/">главная </Link>
            &gt;
            <Link className={styles.pathLink} href="/catalog"> каталог </Link>
            &gt;
            <div className={styles.activePath}> {name}</div>
        </div>

    )
}