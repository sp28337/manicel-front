import Image from "next/image"
import backgroundImg from "@/public/salt-body-scrub-500w.png"
import headerStyles from "../styles/skeletons/header.module.css"

export const HeaderSkeleton = ({ children }: { children?: React.ReactNode }) => {
    return (
        <header className={headerStyles.headerWrapper}>
            <Image
                className={headerStyles.backgroundImage}
                src={backgroundImg}
                alt=""
                quality={0}
                sizes="100vw"
                priority
            />
            {children}
        </header>
    )
}