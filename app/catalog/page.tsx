import { HeaderCatalog } from "../ui/main/catalog/HeaderCatalog";
import { BodyCatalog } from "../ui/main/catalog/BodyCatalog";
import styles from "../styles/catalog.module.css";
import { fetchCatalogProducts } from "../lib/data";
import { SearchList } from "../ui/SearchList";

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