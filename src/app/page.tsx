import './styles/globals.css';
import styles from './styles/common.module.css';
import { Header } from './ui/header/Header';
import { TextBlock } from './ui/main/TextBlock';
import { Bestsellers } from './ui/main/Bestsellers';
import { StoreBlock } from './ui/main/StoreBlock';
import { fetchBestsellers } from './data';
import { Suspense } from "react";
import { SearchList } from "./ui/SearchList";
import { LoadningSkeleton } from "./ui/skeletons"

export default async function Page(props: { searchParams?: Promise<{ query?: string }>}) {

    // await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';

    const bestsellers = await fetchBestsellers()
    
    return (
        <>
            <Suspense key={query} fallback={query !== '' ? <LoadningSkeleton /> : <></> } >
                <SearchList query={query} />
            </Suspense>
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
