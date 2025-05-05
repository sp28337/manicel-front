import "./styles/globals.css"
import styles from "./styles/common.module.css"
import { Suspense } from "react"
import { Header } from "./ui/header"
import { TextBlock } from "./ui/text-block"
import { Bestsellers } from "./ui/bestsellers"
import { StoreBlock } from "./ui/store-block"
import { fetchBestsellers } from "./lib/data"
import { SearchList } from "./ui/search-list"
import { 
    MainHeaderSkeleton,
    TextBlockSkeleton,
    BestsellersSkeleton,
    StoreBlockSkeleton,
} from "./ui/skeletons"

export default async function Page(props: { searchParams?: Promise<{ query?: string }>}) {
    
    const searchParams = await props.searchParams
    const query = searchParams?.query || ""

    const bestsellers = await fetchBestsellers()
    
    return (
        <>
            <Suspense>
                <SearchList query={query} />
            </Suspense>
            <Suspense fallback={<MainHeaderSkeleton />}>
                <Header />
            </Suspense>
            <main className={styles.container}>
                <Suspense fallback={<TextBlockSkeleton />}>
                    <TextBlock />
                </Suspense>
                <hr />
                <Suspense fallback={<BestsellersSkeleton />}>
                    <Bestsellers products={bestsellers}/>
                </Suspense>
                <hr />
                <Suspense fallback={<StoreBlockSkeleton />}>
                    <StoreBlock />
                </Suspense>
            </main>
        </>
    )
}
