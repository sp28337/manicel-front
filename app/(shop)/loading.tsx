import commonStyles from "../styles/common.module.css"
import { 
    HeaderSkeleton, 
    TextBlockSkeleton,
    BestsellersSkeleton,
    StoreBlockSkeleton
 } from "../ui/skeletons"


export default function Loading() {
    return (
         <>
            <HeaderSkeleton />
            <div className={commonStyles.container}>
                <TextBlockSkeleton />
                <hr />
                <BestsellersSkeleton />
                <hr />
                <StoreBlockSkeleton/>
            </div>
         </>
    )
}