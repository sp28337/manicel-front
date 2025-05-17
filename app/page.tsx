import "./styles/globals.css"
import styles from "./styles/common.module.css"
import { Header } from "./ui/header"
import { TextBlock } from "./ui/text-block"
import { Bestsellers } from "./ui/bestsellers"
import { StoreBlock } from "./ui/store-block"
import { getBestsellers } from "./lib/data"
import { notFound } from "next/navigation"

export default async function Page() {

    const bestsellers = await getBestsellers()

    if (!bestsellers) {
        notFound()
    }
    
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
    )
}
