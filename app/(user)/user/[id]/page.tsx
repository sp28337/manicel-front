import { getUserProfile } from "@/app/lib/data"
import { cookies } from "next/headers"
import { Profile } from "../../../ui/user/profile"
import { UserProfileSchema } from "@/app/lib/definitions"
import { redirect } from "next/navigation"
import { SearchList } from "@/app/ui/search-list"

interface PageProps {
    searchParams?: Promise<{ query?: string }>;
    params: Promise<{ userId: string }>;
}

export default async function Page({
       searchParams,
       params,
}: PageProps) {
    const query = (await searchParams)?.query || "";
    const { userId } = await params
    const cookieStore = await cookies()
    const token = cookieStore.get("session")?.value
    const userProfile: UserProfileSchema | number = await getUserProfile({userId: userId, authToken: token || ""})
    if (typeof userProfile === "number")  {
        redirect("/login")
    }

    return (
      <>
        <SearchList query={query} />
        <Profile userProfile={userProfile} />
      </>
    )
}