import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { decrypt } from "./sessions"
import { getUserProfile } from "./data"

type AdminSession = {
    userId: string
    token: string
}

export async function requireAdminSession(): Promise<AdminSession> {
    const cookieStore = await cookies()
    const cookie = cookieStore.get("session")

    if (!cookie?.value) {
        redirect("/sign-up")
    }

    const payload = await decrypt(cookie.value)
    const userId = String(payload?.user_id ?? "")

    if (!userId) {
        redirect("/sign-up")
    }

    const profile = await getUserProfile({ userId, authToken: cookie.value })

    if (profile === 401) {
        redirect("/sign-up")
    }

    if (profile === 403) {
        redirect("/?adminError=forbidden")
    }

    if (typeof profile === "number" || !profile.admin) {
        redirect("/?adminError=forbidden")
    }

    return { userId, token: cookie.value }
}
