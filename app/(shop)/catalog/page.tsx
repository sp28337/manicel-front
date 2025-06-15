import styles from "../../styles/common.module.css"
import { Header } from "../../ui/catalog/header"
import { BodyCatalog } from "../../ui/catalog/body"
import { getCatalogProducts } from "../../lib/data"
import { SearchList } from "../../ui/search-list"
import { StoreBlock } from "../../ui/homepage/store-block"
import { notFound } from "next/navigation"

export default async function Page (props: {searchParams?: Promise<{query?: string}>}) {

    const searchParams = await props.searchParams
    const query = searchParams?.query || ""
    
    const products =  await getCatalogProducts()

    if (!products) {
        notFound()
    }
        
    return (
        <>
            <SearchList query={query} />
            <Header />
            <div className={styles.container}> 
                <BodyCatalog products={products}/>
                <hr />
                <StoreBlock />
            </div>
        </>
    );
}