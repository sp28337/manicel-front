import './styles/globals.css';
import styles from './styles/common.module.css';
import { Header } from './ui/header/Header';
import { TextBlock } from './ui/text-block/TextBlock';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
          <TextBlock />
          <hr />
      </main>
    </>
  );
}
