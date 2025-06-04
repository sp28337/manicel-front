import "../styles/globals.css"
import styles from "../styles/common.module.css"
import { Header } from "../ui/header"
import { TextBlock } from "../ui/text-block"
import { Bestsellers } from "../ui/bestsellers"
import { StoreBlock } from "../ui/store-block"
import { getBestsellers } from "../lib/data"
import { SearchList } from "../ui/search-list"
import { notFound } from "next/navigation"

export default async function Page(props: { searchParams?: Promise<{ query?: string }>}) {
    
    const searchParams = await props.searchParams
    const query = searchParams?.query || ""

    const bestsellers = await getBestsellers()

    if (!bestsellers) {
        notFound()
    }
    
    return (
        <>
            <SearchList query={query} />
            <Header />
            <main className={styles.container}>
                <TextBlock />
                <hr />
                <Bestsellers products={bestsellers}/>
                <hr />
                <StoreBlock />
            </main>
        </>
    )
}
