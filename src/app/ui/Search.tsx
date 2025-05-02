'use client';

import styles from '../styles/search.module.css';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from "react";

export function Search({ placeholder, isOpen, onClose }: { placeholder: string, isOpen: boolean, onClose: () => void }) {
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const closeSearch = (inputRef: any) => {
        onClose();
        inputRef.current.value = '';
        replace(`${pathname}`);
    }

    const handleSearch = useDebouncedCallback((term) =>  {
        
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        // params.set('page', '1');
        
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
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
            replace(`${pathname}`);
        };
    
        function handleKeyDown(e: KeyboardEvent) {
          if (e.key === "Escape") {
            closeSearch(inputRef);
          }
        }
    
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
          
        };
      }, [isOpen, onClose]);


    return (
        <div className={isOpen ? styles.searchWrapperOn : styles.searchWrapperOff}>    
            <div 
                className={isOpen ? styles.searchBackground : styles.searchBackgroundOff} 
                onClick={() => closeSearch(inputRef)}
            >    
            </div>
            <div className={isOpen ? styles.searchOn : styles.searchOff}>
                <label htmlFor="input">
                    <button 
                        className={isOpen ? styles.searchButtonOn : styles.searchButtonOff} 
                        onClick={onClose}
                    >
                        <svg 
                            className={styles.search} 
                            width="13" height="14" 
                            viewBox="0 0 13 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6.08735 1C4.78373 1 3.48102 1.49602 2.48931 2.48777C0.505898 4.47125 0.502401 7.70525 2.4858 9.68878C4.326 11.529 7.24392 11.6585 9.23998 10.084L11.9799 12.824C12.092 12.9367 12.2443 13 12.4031 13C12.562 13 12.7143 12.9367 12.8264 12.824C13.0579 12.5912 13.0579 12.2151 12.8264 11.9822L10.0841 9.23984C11.6592 7.24407 11.5271 4.32843 9.68652 2.48777C8.69482 1.49602 7.39092 1 6.08735 1ZM6.08854 2.18695C7.08401 2.18695 8.07887 2.56832 8.84242 3.33192C10.3696 4.85915 10.3731 7.31737 8.84595 8.84461C7.31884 10.3718 4.85715 10.3718 3.33 8.84461C1.80283 7.31737 1.80632 4.85915 3.33352 3.33192C4.09711 2.56832 5.09308 2.18695 6.08854 2.18695Z" fill="#1A1A1A" stroke="#0D0C10" strokeWidth="0.110526"/>
                        </svg>
                    </button>
                </label>
                <input
                    id="input"
                    ref={inputRef} 
                    onClick={() => {inputRef.current?.focus();}}
                    defaultValue={searchParams.get('query')?.toString()} 
                    onChange={e => handleSearch(e.target.value)} 
                    onKeyDown={e => {
                        if (e.key === "Escape") {
                            closeSearch(inputRef);
                        }
                    }} 
                    className={isOpen ? styles.inputOn : styles.inputOff} 
                    placeholder={placeholder}
                />
                
            </div>
        </div>
    );
}
