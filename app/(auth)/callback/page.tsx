import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Callback() {
    const coockieStore = await cookies()
    const userId = coockieStore.get("id")?.value
    const accessToken = coockieStore.get("session")?.value

    if (!userId || !accessToken) {
        throw new Error("No user id or access token")
    }

    redirect(`/user/${userId}`) 
}