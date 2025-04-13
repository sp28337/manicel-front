import Image from "next/image";
import wave from "../../../../public/wave.png";
import styles from '../../styles/header.module.css'

export const Wave = () => {
    return (
        <Image className={styles.wave}
            src={wave} 
            alt="wave"
            sizes="
            (max-width: 1248px) 100vw"
        />
    );
}