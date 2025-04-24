import './styles/globals.css';
import styles from './styles/common.module.css';
import { Header } from './ui/header/Header';
import { TextBlock } from './ui/main/TextBlock';
import { Bestsellers } from './ui/main/Bestsellers';
import { StoreBlock } from './ui/main/StoreBlock';


interface Data {
  id: number,
  name: string,
  name_ru: string,
  type: string,
  reviews: number,
  ingredients: [],
}


export default async function Home() {

    const data = await fetch('http://0.0.0.0:8000/products/bestsellers')
    const bestsellers: [Data] = await data.json()
    {console.log(bestsellers)}

  return (
    <>
      <Header />
      <main className={styles.container}>
          <TextBlock />
          <hr />
          <Bestsellers products={bestsellers}/>
          <hr />
          <StoreBlock />
      </main>
    </>
  );
}
