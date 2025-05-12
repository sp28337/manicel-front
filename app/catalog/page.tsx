import { HeaderCatalog } from "../ui/catalog/header"
import { BodyCatalog } from "../ui/catalog/body"
import styles from "../styles/catalog.module.css"
import { getCatalogProducts } from "../lib/data"
import { SearchList } from "../ui/search-list"

export default async function Page (props: {searchParams?: Promise<{query?: string}>}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    
    const products =  await getCatalogProducts()

    return (
        <div className={styles.catalogWrapper}>
            <SearchList query={query} />
            <HeaderCatalog />
            <BodyCatalog products={products}/>
        </div>
    );
}