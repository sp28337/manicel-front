"use client"

import { useEffect } from "react"

export default function ClientBoundary({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const header = document.getElementById("main-header");

        const handleScroll = () => {
            if (!header) return;
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                // Прокрутка вниз — скрыть хедер
                header.style.transform = "translateY(-100%)";
                header.style.transition = "transform 0.3s";
            } else {
                // Прокрутка вверх — показать хедер
                header.style.transform = "translateY(0)";
                header.style.transition = "transform 0.3s";
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            {children}
        </>
    )
}