import "../styles/globals.css"
import { TopBar } from "../ui/top-bar"

import { montserrat } from "../ui/fonts"

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