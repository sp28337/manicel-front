"use client";

import styles from "../styles/search.module.css";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function Search({ placeholder, isOpen, onClose }: { placeholder: string, isOpen: boolean, onClose: () => void }) {
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const closeSearch = (inputRef: any) => {
        onClose();
        inputRef.current.value = null;
        replace(`${pathname}`);
    }

    const handleSearch = useDebouncedCallback((term) =>  {
        
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        // params.set("page", "1");
        
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    // Фокус на input при открытии

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    // Обработчик Escape на весь документ

    useEffect(() => {
        if (!isOpen) {
            function handleKeyDown(e: KeyboardEvent) {
                if (e.key === "Escape") {
                    closeSearch(inputRef);
                }
            }
        
            document.addEventListener("keydown", handleKeyDown);
            return () => {
                document.removeEventListener("keydown", handleKeyDown);
              
            };

        };
    
    }, [isOpen, onClose]);


    return (
        <>

            { isOpen &&
                <div className={styles.searchWrapper}>
                    <>
                        <div 
                            className={styles.searchBackground} 
                            onClick={() => {closeSearch(inputRef)}}
                        >    
                        </div>
                        <div className={styles.search}>
                            <label htmlFor="input">   
                            </label>
                            <input
                                id="input"
                                ref={inputRef} 
                                onClick={() => {inputRef.current?.focus();}}
                                defaultValue={searchParams.get("query")?.toString()} 
                                onChange={e => handleSearch(e.target.value)} 
                                onKeyDown={e => {
                                    if (e.key === "Escape") {
                                        closeSearch(inputRef);
                                    }
                                }} 
                                className={styles.input} 
                                placeholder={placeholder}
                            />
                            
                        </div>
                    </>
                </div>
            }
        </>
    );
}
