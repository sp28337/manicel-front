import styles from '../../styles/text-block.module.css';

export const Block3 = () => {
    return (
        <div className={`${styles.blockWrapper} ${styles.block3}`}>
            <h2 className={styles.h2}>КАЧЕСТВО</h2>
            <p className={styles.p}>MANICEL использует только лучшие ингредиенты, чтобы вы могли наслаждаться превосходным результатом</p>        
        </div>
    );
};