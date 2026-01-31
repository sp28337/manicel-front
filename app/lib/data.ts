import { 
    CatalogProductsSchema, 
    BestsellersSchema, 
    ProductSchema,
    UserProfileSchema,
} from "./definitions"
import { redirect } from "next/navigation"

const isBuilding = process.env.NEXT_PHASE === 'phase-production-build'
const apiAvailable = process.env.NEXT_PUBLIC_API_PROTOCOL && process.env.NEXT_PUBLIC_API

export async function getSearchProducts(query: string) {
    if (isBuilding || !apiAvailable) {
        console.warn("Failed to fetch search products (OK in CI/build): API not available")
        return []
    }

    try {
        const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/search/search_products?query=${query}`,
        )
        if (!data.ok) return []
        const filteredProducts: CatalogProductsSchema[] = await data.json()
        return filteredProducts
    } catch (error) {
        console.warn("Failed to fetch search products:", error instanceof Error ? error.message : String(error))
        return []
    }
}

export async function getCatalogProducts() {
    if (isBuilding || !apiAvailable) {
        console.warn("Failed to fetch catalog products (OK in CI/build): API not available")
        return []
    }
    
    try {
        const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/products/catalog_products`
        )
        if (!data.ok) return []
        const products: CatalogProductsSchema[] = await data.json()
        return products

    } catch (error) {
        console.warn(
            "Failed to fetch catalog products (OK in CI/build):",
            error instanceof Error ? error.message : String(error)
        )
        return []
    }
}

export async function getBestsellers() {
    if (isBuilding || !apiAvailable) {
        console.warn("Failed to fetch bestsellers (OK in CI/build): API not available")
        return []
    }
    
    try {
        const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/bestsellers/bestsellers`,
        )
        if (!data.ok) return []
        const bestsellers: BestsellersSchema[] = await data.json()
        return bestsellers

    } catch (error) {
        console.warn("Failed to fetch bestsellers:", error instanceof Error ? error.message : String(error))
        return []
    }
}

export async function getProduct(id: string) {
    if (isBuilding || !apiAvailable) {
        console.warn("Failed to fetch product (OK in CI/build): API not available")
        return null
    }

    try {
        const data = await fetch(
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/products/${id}`,
        )
        if (!data.ok) return null
        const product: ProductSchema = await data.json()
        return product

    } catch (error) {
        console.warn("Failed to fetch product:", error instanceof Error ? error.message : String(error))
        return null
    }
}

export async function createUser(formData: FormData) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/user`, 
            {
                method: "POST",
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.get("username"),
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
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/auth/login`, 
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
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/user/profile/${userId}`, 
            { 
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
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/user/update_username/${userId}`, 
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
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/user/update_password/${userId}`, 
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
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/user/update_name/${userId}`, 
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
            `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API}/user/update_email/${userId}`, 
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
