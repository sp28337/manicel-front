"use server"

import { cookies } from "next/headers"

export async function checkCookie() {
    const cookieStore = await cookies()
    const hasCookie = cookieStore.has('theme')
    return hasCookie
}