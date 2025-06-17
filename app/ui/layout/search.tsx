"use client"

import styles from "../../styles/layout/search.module.css"
import { useDebouncedCallback } from "use-debounce"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useRef } from "react"

export function Search(
    { placeholder }: { placeholder: string }
) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSearch = useDebouncedCallback((term) =>  {
        
        console.log(`Searching... ${term}`)
        const params = new URLSearchParams(searchParams)
        
        if (term) {
            params.set("query", term)
        } else {
            params.delete("query")
        }
        
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }, 300)

    return (
        <div className={styles.search}>
            <label htmlFor="input">   
            </label>
            <input
                id="input"
                ref={inputRef} 
                defaultValue={searchParams.get("query")?.toString()} 
                onChange={e => handleSearch(e.target.value)}
                className={styles.input} 
                placeholder={placeholder}
            />
        </div>
    )
}
