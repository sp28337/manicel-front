import "server-only"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"
 
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
 
export async function decrypt(token: string | undefined = "") {
    try {
            const { payload } = await jwtVerify(
                token, 
                encodedKey, 
                { algorithms: ['HS256'], }
            )
            return payload.exp
        } 
    catch (error) {
        console.log('Failed to verify session')
    }
}
 
export async function createSession(userData: {user_id: number, access_token: string}) {

    const expiration = await decrypt(userData.access_token)
    const cookieStore = await cookies()
    
    cookieStore.set('session', userData.access_token, {
        httpOnly: true,
        secure: true,
        expires: expiration,
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}