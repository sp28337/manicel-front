import { getUserProfile } from "@/app/lib/data"
import { cookies } from 'next/headers'
import { Profile } from "../../../ui/profile/profile"

export default async function Page({ id }: { id: number }) {

    const cookieStore = await cookies()
    const token = cookieStore.get('session')
    console.log(`token: ${token?.value}`)
    const userProfile = await getUserProfile({userId: id, authToken: token?.value || ""})

    console.log(userProfile)

    return (
        <Profile userProfile={userProfile} />
    )
}