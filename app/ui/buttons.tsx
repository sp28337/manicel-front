"use client"

import styles from "../styles/buttons.module.css"
import { usePathname, useRouter } from "next/navigation"

export const CloseSearchListButton = () => {
    
    const pathname = usePathname()
    const { replace } = useRouter()
    
    return (
        <button 
            className={styles.closeSearchListButton}
            onClick={() => {replace(`${pathname}`)}}
        >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z" fill="black"/>
            </svg>
        </button> 
    )
}