import './styles/globals.css';
import styles from './styles/common.module.css';
import { Header } from './ui/header/Header';
import { TextBlock } from './ui/main/TextBlock';
import { Bestsellers } from './ui/main/Bestsellers';
import { StoreBlock } from './ui/main/StoreBlock';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
          <TextBlock />
          <hr />
          <Bestsellers />
          <hr />
          <StoreBlock />
      </main>
    </>
  );
}
