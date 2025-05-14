import { Header } from "../ui/catalog/header"
import { BodyCatalog } from "../ui/catalog/body"
import { getCatalogProducts } from "../lib/data"
import { SearchList } from "../ui/search-list"

export default async function Page (props: {searchParams?: Promise<{query?: string}>}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    
    const products =  await getCatalogProducts()

    return (
        <div>
            <SearchList query={query} />
            <Header />
            <BodyCatalog products={products}/>
        </div>
    );
}