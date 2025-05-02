import { HeaderCatalog } from "../ui/main/catalog/HeaderCatalog";
import { BodyCatalog } from "../ui/main/catalog/BodyCatalog";
import styles from "../styles/catalog.module.css";
import { fetchCatalogProducts } from "../data";
import { Suspense } from "react";
import { SearchList } from "../ui/SearchList";
import { LoadningSkeleton } from "../ui/skeletons"

export default async function Page (props: {searchParams?: Promise<{query?: string}>}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    
    const products =  await fetchCatalogProducts()

    return (
        <div className={styles.catalogWrapper}>
            <Suspense key={query} fallback={query !== '' ? <LoadningSkeleton /> : <></> }>
                <SearchList query={query} />
            </Suspense>
            <HeaderCatalog />
            <BodyCatalog products={products}/>
        </div>
    );
}