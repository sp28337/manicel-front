import "../styles/globals.css"
import { TopBar } from "../ui/top-bar"
import { Navigation } from "../ui/navigation"
import { Footer } from "../ui/footer"
import { montserrat } from "../ui/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <TopBar />
                <Navigation />
                {children}
                <hr />
                <Footer />
            </body>
        </html>
    )
}