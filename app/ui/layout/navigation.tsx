import Link from "next/link"
import styles from "../../styles/layout/navigation.module.css"
import commonStyles from "../../styles/common.module.css"
import { Search } from "./search"
import { ProfileSVG } from "../vectors"
import { PopupMenu } from "../popup"

export const Navigation = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  
    return (
        <nav id="main-header" className={`${styles.navWrapper}`}>
            <div className={`${styles.backgroundNav}`}></div>
            <div className={`${styles.nav} ${commonStyles.container}`}>
                <Link 
                    className={styles.logo}
                    href="/"
                    title="MANICEL"
                    aria-label="MANICEL"
                >
                </Link>
                <div className={styles.links}>
                    <Link 
                        href="https://www.wildberries.ru/brands/310747490-manicel" 
                        className={styles.navLink}
                    >
                        <p>МАГАЗИН</p>
                    </Link>
                    <Link href="/catalog" className={styles.navLink}>
                        <p>КАТАЛОГ</p>
                    </Link>
                    <Link href="#" className={styles.navLink}>
                        <p>КОНТАКТЫ</p>
                    </Link>
                </div>
                <div className={styles.svgWrapper}>
                    <Search placeholder="Поиск..."/>
                    { isLoggedIn            ? 
                    
                        <Link
                            href="/user/1"
                            className={styles.profileIcon} 
                        >
                            <ProfileSVG color="#fff" h={20} w={20}/>
                        </Link>    
                                            :
                        <Link
                            href="/login"
                            className={styles.profileIcon} 
                        >
                            Вход
                        </Link>
                    }
                </div>
                <PopupMenu isLoggedIn={isLoggedIn}/>
            </div>
        </nav>
    )
}