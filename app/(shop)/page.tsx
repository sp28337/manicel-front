import "../styles/globals.css"
import styles from "../styles/common.module.css"
import { Header } from "../ui/homepage/header"
import { TextBlock } from "../ui/homepage/text-block"
import { Bestsellers } from "../ui/homepage/bestsellers"
import { StoreBlock } from "../ui/homepage/store-block"
import { getBestsellers } from "../lib/data"
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
