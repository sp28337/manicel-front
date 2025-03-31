import styles from '../../styles/text-block.module.css';

export const Block1 = () => {
    return (
        <div className={`${styles.blockWrapper} ${styles.block1}`}>
            <h2 className={styles.h2}>БЕЗОПАСНОСТЬ</h2>
            <p className={styles.p}>Все продукты MANICEL проходят строгий контроль качества, гарантируя безопасность и эффективность каждого скраба</p>        
        </div>
    );
};