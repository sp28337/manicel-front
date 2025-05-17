import Link from "next/link"
import styles from "../styles/nav.module.css"
import commonStyles from "../styles/common.module.css"
import { Search } from "./search"
import { ManicelLogoSVG } from "./vectors"
import { PopupMenu } from "./popup"
import { PopupContextProvider, SearchContextProvider } from "./contexts"
import { SearchList } from "../ui/search-list"
import { Suspense } from "react"


export const Navigation = () => {
    return (
        <nav className={`${styles.navWrapper}`}>
            <div className={`${styles.backgroundNav}`}></div>
            <div className={`${styles.nav} ${commonStyles.container}`}>
                <Link className={styles.logo} href="/">
                    <ManicelLogoSVG />
                </Link>
                <div className={styles.links}>
                    <p style={{color: "#747474"}}>
                        O НАС
                    </p>
                    <Link href="/catalog" className={styles.navLink}>
                        <p>КАТАЛОГ</p>
                    </Link>
                    <Link href="#contacts" className={styles.navLink}>
                        <p>КОНТАКТЫ</p>
                    </Link>
                </div>
                <a 
                    className={styles.wblink} 
                    href="https://www.wildberries.ru/brands/310747490-manicel"
                >
                    МАГАЗИН
                </a>
                <Suspense>
                    <SearchContextProvider>
                        <Search />
                        <SearchList />
                    </SearchContextProvider>
                </Suspense>           
                <PopupContextProvider>
                    <PopupMenu />
                </PopupContextProvider>
            </div>
        </nav>
    )
}