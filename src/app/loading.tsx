import commonStyles from "./styles/common.module.css"
import { 
    MainHeaderSkeleton, 
    TextBlockSkeleton, 
    BestsellersSkeleton
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
            </div>
        </>
    )
}