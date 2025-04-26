import { HeaderCatalog } from "../ui/main/catalog/HeaderCatalog";
import { BodyCatalog } from "../ui/main/catalog/BodyCatalog";
import styles from "../styles/catalog.module.css";
import { fetchCatalogProducts } from "../data";

export default async function Catalog () {
    
    const products =  await fetchCatalogProducts()
    
    return (
        <div className={styles.catalogWrapper}>
            <HeaderCatalog />
            <BodyCatalog products={products}/>
        </div>
    );
}