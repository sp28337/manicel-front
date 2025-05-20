import { CatalogProductsSchema, BestsellersSchema, ProductSchema } from "./definitions"

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
            `${protocol}://${host}:${port}/products/search_products?query=${query}`,
            { cache: dataCache()}
        )
        const filteredProducts: CatalogProductsSchema[] = await data.json()
        console.log(`[+] fetching search products`)
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
        console.log(`[+] fetching catalog products`)
        return products

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch products.");
    }
}

export async function getBestsellers() {
    
    try {
        const data = await fetch(
            `${protocol}://${host}:${port}/products/bestsellers`,
            { cache: dataCache()}
        )
        const bestsellers: BestsellersSchema[] = await data.json()
        console.log(`[+] fetching bestsellers`)
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
        console.log(`[+] fetching product`)
        return product

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch product.");
      }
}