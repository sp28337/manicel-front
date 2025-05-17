import { Header } from "../ui/catalog/header"
import { BodyCatalog } from "../ui/catalog/body"
import { getCatalogProducts } from "../lib/data"
import { notFound } from "next/navigation"

export default async function Page () {

    const products =  await getCatalogProducts()

    if (!products) {
        notFound()
    }
        
    return (
        <div>
            <Header />
            <BodyCatalog products={products}/>
        </div>
    )
}