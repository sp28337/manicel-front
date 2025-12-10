import "../styles/globals.css"
import "../styles/variables.css"
import { TopBar } from "../ui/layout/top-bar"
import { Navigation } from "../ui/layout/navigation"
import { Footer } from "../ui/footer"
import { montserrat } from "../lib/fonts"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <meta name="google-site-verification" content="jN8ZNiuOopX9gft1BkrYh3GVkf_7YjACmJdHFCOhgNo" />
            <body className={`${montserrat.className}`}>
                <TopBar />
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}