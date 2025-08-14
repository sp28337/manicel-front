"use client"

import { useState, useEffect } from "react"
import styles from "../../styles/layout/top-bar.module.css"

const messages = [
    "САЙТ РАБОТАЕТ В ТЕСТОВОМ РЕЖИМЕ",
    // "БЕСПЛАТНАЯ ДОСТАВКА ЧЕРЕЗ ИНТЕРНЕТ-МАГАЗИН WILDBERRIES",
    // "Вы можете приобрести наши скрабы на маркет-плейсе WILDBERRIES",
    "MANICEL",
]

export const TopBar = () => {

    const [index, setIndex] = useState(0);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        const flipTimeout = setTimeout(() => setFlip(true), 5000)

        return () => clearTimeout(flipTimeout)
    }, [index])

    useEffect(() => {
        if (!flip) return;
            const changeTimeout = setTimeout(() => {
            setIndex((i) => (i + 1) % messages.length)
            setFlip(false);
        }, 600) // Время анимации

        return () => clearTimeout(changeTimeout)
    }, [flip])

    return (
        <section className={styles.topbar}>
            <div
                className={`${
                    flip ? styles.flipOut : styles.flipIn
                }`}
                key={index}
            >
                {messages[index]}
            </div>
        </section>
    )
}