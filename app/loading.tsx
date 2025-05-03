import commonStyles from "./styles/common.module.css"
import { 
    MainHeaderSkeleton, 
    TextBlockSkeleton, 
    BestsellersSkeleton,
    StoreBlockSkeleton
} from "./ui/skeletons"

export default function Loading () {
    return (
        <>        
            <MainHeaderSkeleton />
            <div className={commonStyles.container}>
                <TextBlockSkeleton />
                <hr />
                <BestsellersSkeleton />            
                <hr />
                <StoreBlockSkeleton />
            </div>
        </>
    )
}