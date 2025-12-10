import Link from "next/link"
import styles from "../../styles/layout/navigation.module.css"
import commonStyles from "../../styles/common.module.css"
import { Search } from "./search"
import { PopupMenu } from "../popup"
import { Suspense } from "react"

export const Navigation = () => {
    return (
        <nav id="main-header" className={styles.navWrapper}>
            <div className={styles.backgroundNav}></div>
            <div className={`${styles.nav} ${commonStyles.container}`}>
                <Link 
                    className={styles.logo}
                    href="/"
                    title="MANICEL"
                    aria-label="MANICEL"
                >
                </Link>
                <div className={styles.links}>
                    <a 
                        href="https://www.wildberries.ru/brands/310747490-manicel" 
                        className={styles.navLink}
                    >
                        <p>МАГАЗИН</p>
                    </a>
                    <Link href="/catalog" className={styles.navLink}>
                        <p>КАТАЛОГ</p>
                    </Link>
                </div>
                <div className={styles.svgWrapper}>
                    <Suspense>
                        <Search placeholder="Поиск..."/>
                    </Suspense>
                </div>
                <PopupMenu />
            </div>
        </nav>
    )
}