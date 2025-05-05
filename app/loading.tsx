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
         <TextBlockSkeleton/>
         <BestsellersSkeleton/>
         <StoreBlockSkeleton/>
        </>
    )
}