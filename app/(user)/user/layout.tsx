import "../../styles/globals.css"
import { TopBar } from "../../ui/layout/top-bar"
import { Navigation } from "../../ui/layout/navigation"
import { Footer } from "../../ui/footer"
import { montserrat } from "../../lib/fonts"
import { cookies } from "next/headers"

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const cookieStore = await cookies()
    const loggedIn = cookieStore.has("session")

    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <TopBar />
                <Navigation isLoggedIn={loggedIn} />
                {children}
                <Footer />
            </body>
        </html>
    )
}