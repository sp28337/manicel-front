import './styles/globals.css';
import styles from './styles/common.module.css';
import { Header } from './ui/header/Header';
import { TextBlock } from './ui/text-block/TextBlock';
import { Bestsellers } from './ui/main/Bestsellers';

export default async function Home() {
  return (
    <>
      <Header />
      <main className={styles.container}>
          <TextBlock />
          <hr />
          <Bestsellers />
          <hr />
      </main>
    </>
  );
}
