import "../styles/globals.css"
import { TopBar } from "../ui/layout/top-bar"

import { montserrat } from "../lib/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className}`}>
                <TopBar />
                {children}
            </body>
        </html>
    )
}