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
                { algorithms: ["HS256"], }
            )
            return payload
        } 
    catch (error) {
        console.log(`Failed to verify session: ${error}`)
    }
}
    
export async function createSession(userData: {user_id: number, access_token: string}) {
        
    const tokenData = await decrypt(userData.access_token)
    const cookieStore = await cookies()
    
    
    cookieStore.set("session", userData.access_token, {
        httpOnly: true,
        secure: true,
        expires: tokenData?.exp,
        sameSite: "lax",
        path: "/",
    })
}

export async function deleteSession(name: string) {
    const cookieStore = await cookies()
    cookieStore.delete(name)
}