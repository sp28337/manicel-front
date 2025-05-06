import "./styles/globals.css"
import styles from "./styles/common.module.css"
import { 
    HomepageHeaderSkeleton,
    TextBlockSkeleton,
    BestsellersSkeleton,
    StoreBlockSkeleton,
} from "./ui/skeletons"

export default function Loading() {
    return (
        <>
         <HomepageHeaderSkeleton/>
         <div className={styles.container}>
            <TextBlockSkeleton/>
            <hr />
            <BestsellersSkeleton/>
            <hr />
            <StoreBlockSkeleton/>
         </div>
        </>
    )
}