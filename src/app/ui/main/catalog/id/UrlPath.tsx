
import styles from '../../../../styles/body-id.module.css';

export const UrlPath = ({ name }: { name: string}) => {

    return (
        <div className={styles.urlPath}>
            <a className={styles.pathLink} href="/">главная </a>
            &gt;
            <a className={styles.pathLink} href="/catalog"> каталог </a>
            &gt;
            <a className={styles.activePath}> {name}</a>
        </div>

    )
}