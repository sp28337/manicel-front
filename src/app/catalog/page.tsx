import { HeaderCatalog } from "../ui/main/catalog/HeaderCatalog";
import { BodyCatalog } from "../ui/main/catalog/BodyCatalog";
import styles from "../styles/catalog.module.css";

interface Data {
    id: number,
    name: string,
    name_ru: string,
    articule: number
    type: string, 
}

export default async function Catalog () {

    const data = await fetch(`http://127.0.0.1:8000/products/catalog_products`)
    const products: [Data] = await data.json()
    console.log(products)

    return (
        <>
            <div className={styles.catalogWrapper}>
                <HeaderCatalog />
                <BodyCatalog products={products}/>
            </div>
        </>
    );
}