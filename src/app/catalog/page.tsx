import { HeaderCatalog } from "../ui/main/catalog/HeaderCatalog";
import { BodyCatalog } from "../ui/main/catalog/BodyCatalog";
import styles from "../styles/catalog.module.css";

export default function Catalog () {
    return (
        <>
            <div className={styles.catalogWrapper}>
                <HeaderCatalog />
                <BodyCatalog />
            </div>
        </>
    );
}