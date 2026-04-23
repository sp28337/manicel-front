import styles from "../../styles/common.module.css"
import { Header } from "../../ui/catalog/header"
import { BodyCatalog } from "../../ui/catalog/body"
import { getCatalogProducts } from "../../lib/data"
import { StoreBlock } from "../../ui/homepage/store-block"
import { notFound } from "next/navigation"

export default async function Page () {
    const products =  await getCatalogProducts()

    if (!products) {
        notFound()
    }
        
    return (
        <>
            <Header />
            <div className={styles.container}> 
                <BodyCatalog products={products}/>
                <hr />
                <StoreBlock />
            </div>
        </>
    );
}