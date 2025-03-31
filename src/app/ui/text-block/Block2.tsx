import styles from '../../styles/text-block.module.css';

export const Block2 = () => {
    return (
        <div className={`${styles.blockWrapper} ${styles.block2}`}>
            <h2 className={styles.h2}>ЭФФЕКТИВНОСТЬ</h2>
            <p className={styles.p}>наши скрабы глубоко очищают, увлажняют и питают кожу, оставляя её мягкой и бархатистой</p>        
        </div>
    );
};