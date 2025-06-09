import { 
    CatalogProductsSchema, 
    BestsellersSchema, 
    ProductSchema,
    UserProfileSchema,
} from "./definitions"
import { redirect } from "next/navigation"

const protocol = process.env.NEXT_PUBLIC_API_PROTOCOL
const host = process.env.NEXT_PUBLIC_API_HOST
const port = process.env.NEXT_PUBLIC_API_PORT

const dataCache = (toggle=true) => {
    if (toggle) return "force-cache"
    else return "no-store"
}


export async function getSearchProducts(query: string) {

    try {
        const data = await fetch(
            `${protocol}://${host}:${port}/search/search_products?query=${query}`,
            { cache: dataCache()}
        )
        const filteredProducts: CatalogProductsSchema[] = await data.json()
        return filteredProducts
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch search products.");
      }
}

export async function getCatalogProducts() {
    
    try {
        const data = await fetch(
            `${protocol}://${host}:${port}/products/catalog_products`,
            { cache: dataCache()}
        )
        const products: CatalogProductsSchema[] = await data.json()
        return products

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch products.");
    }
}

export async function getBestsellers() {
    
    try {
        const data = await fetch(
            `${protocol}://${host}:${port}/bestsellers/bestsellers`,
            { cache: dataCache()}
        )
        const bestsellers: BestsellersSchema[] = await data.json()
        return bestsellers

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch bestsellers.");
      }
}

export async function getProduct(id: string) {

    try {
        const data = await fetch(
            `${protocol}://${host}:${port}/products/${id}`,
            { cache: dataCache()}
        )
        const product: ProductSchema = await data.json()
        return product

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch product.");
      }
}

export async function createUser(formData: FormData) {
    try {
        const response = await fetch(
            `${protocol}://${host}:${port}/user`, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    password: formData.get("password"),
                }),        
            }
        )

        const userData = await response.json()
        return userData

    } catch (error) {
        console.error("Backend Error:", error);
        throw new Error("Failed to create user.");
    }
}

export async function loginUser(formData: FormData) {
    try {
        const response = await fetch(
            `${protocol}://${host}:${port}/auth/login`, 
            {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.get("username"),
                    password: formData.get("password"),
                }),        
            }
        )
        if (response.ok) {
            const userData = await response.json()
            return userData
        } else {
            return response.status
        }

    } catch (error) {
        console.error("Backend Error:", error);
    }
}

export async function getUserProfile({ userId, authToken }: { userId: string, authToken: string }) {
    try {
        const response = await fetch(
            `${protocol}://${host}:${port}/user/profile/${userId}`, 
            { 
                cache: dataCache(),
                headers: {
                    "Authorization": `Bearer ${authToken}`,
                }
            }
        )
        
        if (response.ok) {
            const userProfile: UserProfileSchema = await response.json()
            return userProfile
        } else {
            return response.status
        }

    } catch (error) {
        console.error("Backend Error:", error);
        redirect("/sign-up")
    }
}

export async function changeUsername(formData: FormData, authToken: string | undefined, userId: number | unknown) {
    try {
        const response = await fetch(
            `${protocol}://${host}:${port}/user/update_username/${userId}`, 
            {
                method: "PATCH",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.get("username"),
                }),        
            }
        )
        if (response.ok) {
            const userData = await response.json()
            return userData
        } else {
            return response.status
        }

    } catch (error) {
        console.error("Backend Error:", error);
    }
}

export async function updatePassword(formData: FormData, authToken: string | undefined, userId: number | unknown) {
    try {
        const response = await fetch(
            `${protocol}://${host}:${port}/user/update_password/${userId}`, 
            {
                method: "PATCH",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    old_password: formData.get("oldPassword"),
                    new_password: formData.get("newPassword"),
                    repeat_new_password: formData.get("repeatedPassword"),
                }),        
            }
        )
        console.log(response.status, response.statusText)
        if (response.ok) {
            const userData = await response.json()
            return userData
        } else {
            return response.status
        }

    } catch (error) {
        console.error("Backend Error:", error);
    }
}

export async function changeName(formData: FormData, authToken: string | undefined, userId: string | unknown) {
    try {
        const response = await fetch(
            `${protocol}://${host}:${port}/user/update_name/${userId}`, 
            {
                method: "PATCH",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.get("name"),
                }),        
            }
        )
        if (response.ok) {
            const userData = await response.json()
            return userData
        } else {
            return response.status
        }

    } catch (error) {
        console.error("Backend Error:", error);
    }
}

export async function changeEmail(formData: FormData, authToken: string | undefined, userId: string | unknown) {
    try {
        const response = await fetch(
            `${protocol}://${host}:${port}/user/update_email/${userId}`, 
            {
                method: "PATCH",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.get("email"),
                }),        
            }
        )
        if (response.ok) {
            const userData = await response.json()
            return userData
        } else {
            return response.status
        }

    } catch (error) {
        console.error("Backend Error:", error);
    }
}