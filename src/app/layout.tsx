import './styles/globals.css';
import { TopBar } from './ui/TopBar';
import { Footer } from './ui/footer/Footer';
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <TopBar />
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  )
}