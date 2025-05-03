"use client"
import { useState, useEffect } from "react";
import styles from "../styles/top-bar.module.css";

const messages = [
  "БЕСПЛАТНАЯ ДОСТАВКА ЧЕРЕЗ ИНТЕРНЕТ-МАГАЗИН WILDBERRIES",
  "Скидки на мыло до 30% только сегодня!",
  "Бесплатный возврат товара в течение 7 дней",
];

export const TopBar = () => {

  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const flipTimeout = setTimeout(() => setFlip(true), 5000);

    return () => clearTimeout(flipTimeout);
  }, [index]);

  useEffect(() => {
    if (!flip) return;
    const changeTimeout = setTimeout(() => {
      setIndex((i) => (i + 1) % messages.length);
      setFlip(false);
    }, 600); // Время анимации

    return () => clearTimeout(changeTimeout);
  }, [flip]);

  return (
    <div className={styles.topbar}>
        <div
            className={`${
            flip ? styles.flipOut : styles.flipIn
            }`}
            key={index}
        >
            {messages[index]}
        </div>
    </div>
  );
};