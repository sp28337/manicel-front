import "../styles/globals.css"
import "../styles/variables.css"
import { TopBar } from "../ui/layout/top-bar"
import { Navigation } from "../ui/layout/navigation"
import { Footer } from "../ui/footer"
import { montserrat } from "../lib/fonts"
import { cookies } from "next/headers"

export default async function RootLayout({ children }: { children: React.ReactNode }) {

    const cookieStore = await cookies()
    const loggedIn = cookieStore.has("session")

    return (
        <html lang="en">
            <meta name="google-site-verification" content="jN8ZNiuOopX9gft1BkrYh3GVkf_7YjACmJdHFCOhgNo" />
            <body className={`${montserrat.className}`}>
                <TopBar />
                <Navigation isLoggedIn={loggedIn} />
                {children}
                <Footer />
            </body>
        </html>
    )
}