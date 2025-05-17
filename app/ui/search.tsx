"use client"

import styles from "../styles/search.module.css"
import commonStyles from "../styles/common.module.css"
import { useDebouncedCallback } from "use-debounce"
import { useEffect, useRef, useCallback } from "react"
import { useMySearchContext } from "./contexts"
import { SearchSVG } from "./vectors"
import { createPortal } from "react-dom"


export function Search() {
    const context = useMySearchContext()

    const { 
        open, 
        switchOpen, 
        searchParams,
        pathname,
        replace
    } = context

    const inputRef = useRef<HTMLInputElement>(null)

    const closeSearch = useCallback(() => {
        switchOpen()
        replace(`${pathname}`, { scroll: false } )
    }, [switchOpen, replace, pathname])

    const createQueryString = useDebouncedCallback(
        (name: string, value: string) =>  {
            console.log(`Searching... ${value}`)
            const params = new URLSearchParams(searchParams.toString())
            
            if (value) {
                params.set(name, value)
            } else {
                params.delete(name)
            }
            replace(`${pathname}?${params}`, { scroll: false })
        }, 300
    )

    // Фокус на input при открытии

    useEffect(() => {
        if (open) {
            inputRef.current?.focus()
        }
    }, [open])

    // Обработчик Escape на весь документ

    useEffect(() => {
        if (open) {
            function handleKeyDown(e: KeyboardEvent) {
                if (e.key === "Escape") {
                    closeSearch();
                }
            }
        
            document.addEventListener("keydown", handleKeyDown)
            return () => {
                document.removeEventListener("keydown", handleKeyDown)
            }
        }
    
    }, [open, closeSearch])


    return (
        <>
            <button 
                className={styles.searchButton}
                onClick={switchOpen}
            >
                <SearchSVG />
            </button> 
            { open && 
                createPortal(
                    <div className={styles.searchWrapper}>
                        <div 
                            className={styles.searchBackground} 
                            onClick={() => {closeSearch()}}
                        >    
                        </div>
                        <div className={`${styles.search} ${commonStyles.container}`}>
                            <label htmlFor="input"></label>
                            <input
                                id="input"
                                ref={inputRef} 
                                onClick={() => {inputRef.current?.focus();}}
                                defaultValue={searchParams.get("query")?.toString()} 
                                onChange={e => createQueryString("query", e.target.value)} 
                                onKeyDown={e => {
                                    if (e.key === "Escape") {
                                        closeSearch();
                                    }
                                }} 
                                className={styles.input} 
                                placeholder={"Поиск..."}
                            />
                        </div>
                    </div>, document.getElementById("search")!
                )
            }
        </>
    )
}
