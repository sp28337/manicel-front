import styles from '../../styles/text-block.module.css';
import { TextHeader } from './TextHeader';
import { Block1 } from './Block1';
import { Block2 } from './Block2';
import { Block3 } from './Block3';
import { AboutUsButton } from './AboutUsButton';

export const TextBlock = () => {
    return (
        <div className={styles.textBlockWrapper}>
            <TextHeader />
            <div className={styles.blocks}>
                <Block1 />
                <Block2 />
                <Block3 />
            </div>
            <AboutUsButton />
        </div>
    )
}