import "./styles/globals.css"
import { TopBar } from "./ui/TopBar"
import { Navigation } from "./ui/header/nav/Nav"
import { Footer } from "./ui/Footer"
import { montserrat } from "./ui/fonts"

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