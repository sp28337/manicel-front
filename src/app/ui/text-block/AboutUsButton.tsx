import styles from '../../styles/text-block.module.css';

export const AboutUsButton = () => {
    return (
        <div className={styles.aboutUsButtonWrapper}>
            <a className={styles.aboutUsButton} href="localhost:3000/about">
                    узнать больше
            </a>
        </div>
    );
};