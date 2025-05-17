import "./styles/globals.css"
import { TopBar } from "./ui/top-bar"
import { Navigation } from "./ui/navigation"
import { Footer } from "./ui/footer"
import { montserrat } from "./ui/fonts"
import styles from "./styles/modals.module.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <TopBar />
                <Navigation />
                {children}
                <hr />
                <Footer />
                <div className={styles.modalsWrapper}>
                    <div id="menu" className={styles.menuModal}></div>
                    <div id="search" className={styles.searchModal}></div>
                    <div id="searchList" className={styles.searchModal}></div>
                </div>
            </body>
        </html>
    )
}