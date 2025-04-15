import styles from '../../../styles/popup-menu.module.css'

export const PopupMenu = () => {
    return (
        <div className={styles.links}>
            <a href="/" className={styles.navLink}>
                <p>ГЛАВНАЯ</p>
            </a>
            <a href="/about" className={styles.navLink}>
                <p>O НАС</p>
            </a>
            <a href="/catalog" className={styles.navLink}>
                <p>КАТАЛОГ</p>
            </a>
            <a href="#contacts" className={styles.navLink}>
                <p>КОНТАКТЫ</p>
            </a>
            <a href="" className={styles.navLink}>
                <p>ПОИСК</p>
            </a>
            <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.navLink}>
                <p>КУПИТЬ</p>
            </a>
            <a href="https://www.wildberries.ru/brands/310747490-manicel" className={styles.navLink}>
                <p>В МАГАЗИН</p>
            </a>
        </div>
    )
}