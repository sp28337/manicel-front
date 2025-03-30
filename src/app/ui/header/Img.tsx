import Image from "next/image";
import allWebp from "../../../../public/all.webp";
import styles from '../../styles/header.module.css'


export const ImgAll = () => {
    return (
        <Image className={styles.imgAll}
            src={allWebp} 
            alt="piramyd of all scrubs with raspberry on top of some cans" 
        />
    );
}