import { getUserProfile } from "@/app/lib/data"
import { cookies } from "next/headers"
import { Profile } from "../../../ui/user/profile"
import { UserProfileSchema } from "@/app/lib/definitions"
import { redirect } from "next/navigation"

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
    const { userId } = await params
    const cookieStore = await cookies()
    const token = cookieStore.get("session")?.value
    const userProfile: UserProfileSchema | number = await getUserProfile({userId: userId, authToken: token || ""})
    if (typeof userProfile === "number")  {
        redirect("/login")
    }

    return (
        <Profile userProfile={userProfile} />
    )
}