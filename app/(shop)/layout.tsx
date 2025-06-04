import "../styles/globals.css"
import { TopBar } from "../ui/top-bar"
import { Navigation } from "../ui/navigation"
import { Footer } from "../ui/footer"
import { montserrat } from "../ui/fonts"
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
                <hr />
                <Footer />
            </body>
        </html>
    )
}