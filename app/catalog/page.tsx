import { HeaderCatalog } from "../ui/catalog/header"
import { BodyCatalog } from "../ui/catalog/body"
import styles from "../styles/catalog.module.css"
import { fetchCatalogProducts } from "../lib/data"
import { SearchList } from "../ui/search-list"
import { Suspense } from "react"
import { 
    CatalogHeaderSkeleton,
    CatalogBodySkeleton
} from "../ui/skeletons"

export default async function Page (props: {searchParams?: Promise<{query?: string}>}) {

    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    
    const products =  await fetchCatalogProducts()

    return (
        <div className={styles.catalogWrapper}>
            <SearchList query={query} />
            <Suspense fallback={<CatalogHeaderSkeleton />}>
                <HeaderCatalog />
            </Suspense>
            <Suspense fallback={<CatalogBodySkeleton />}>
                <BodyCatalog products={products}/>
            </Suspense>
        </div>
    );
}