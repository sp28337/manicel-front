import { HeaderCatalog } from "../ui/catalog/header";
import { BodyCatalog } from "../ui/catalog/body";
import styles from "../styles/catalog.module.css";
import { fetchCatalogProducts } from "../lib/data";
import { SearchList } from "../ui/search-list";

export default async function Page (props: {searchParams?: Promise<{query?: string}>}) {

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    
    const products =  await fetchCatalogProducts()

    return (
        <div className={styles.catalogWrapper}>
            <SearchList query={query} />
            <HeaderCatalog />
            <BodyCatalog products={products}/>
        </div>
    );
}