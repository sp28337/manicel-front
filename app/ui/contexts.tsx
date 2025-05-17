"use client"
 
import { createContext, useContext, useCallback, useState } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"

type ContextType = {
    open: boolean, 
    switchOpen: () => void
}

type SearchContextType = {
    open: boolean, 
    switchOpen: () => void,
    searchParams: URLSearchParams,
    pathname: string,
    replace: (url: string, options?: { scroll?: boolean }) => void
}

export const PopupContext = createContext<ContextType | null>(null)
export const SearchContext = createContext<SearchContextType | null>(null)


export function PopupContextProvider(
    { children }: { children: React.ReactNode }
) {
    const [open, setOpen] = useState(false)
    const switchOpen = useCallback(() => setOpen((open) => !open), [])

    return (
        <PopupContext.Provider value={{ open, switchOpen }}>
            {children}
        </PopupContext.Provider>
    )
}

export function SearchContextProvider(
    { children }: { children: React.ReactNode }
) {
    const [open, setOpen] = useState(false)
    const switchOpen = useCallback(() => setOpen((open) => !open), [])
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    return (
        <SearchContext.Provider 
            value={{ 
                open, 
                switchOpen,
                searchParams,
                pathname,
                replace,
            }}
        >
            {children}
        </SearchContext.Provider>
    )
}


export const useMySearchContext = () => {
    const context = useContext(SearchContext)
    if (!context) {
        throw new Error("SearchContext is not available")
    }
    return context
}


export const useMyPopupContext = () => {
    const context = useContext(PopupContext)
    if (!context) {
        throw new Error("PopupContext is not available")
    }
    return context
}