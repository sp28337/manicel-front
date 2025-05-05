import { CatalogProductsSchema, BestsellersSchema, ProductSchema } from "./definitions"

const protocol = {
    http: "http",
    https: "https"
}

const host = {
    local: "localhost",
}

const port = {
    local: "8000", 
}


const timeout = async (duration=1000, toggle=false) => {
    if (toggle) {
        return await new Promise((resolve) => setTimeout(resolve, duration))
    }
}

const dataCache = (toggle=false) => {
    if (toggle) return "force-cache"
    else return "no-store"
}


export async function fetchFilteredProducts(query: string) {

    try {
        const data = await fetch(
            `${protocol.http}://${host.local}:${port.local}/products/search_products?query=${query}`,
            { cache: dataCache()}
        )
        const filteredProducts: CatalogProductsSchema[] = await data.json()
        
        // timeout for testing
        await timeout()
    
        return filteredProducts
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch filtered products.");
      }
}

export async function fetchCatalogProducts() {
    
    try {
        const data = await fetch(
            `${protocol.http}://${host.local}:${port.local}/products/catalog_products`,
            { cache: dataCache()}
        )
        const products: CatalogProductsSchema[] = await data.json()

        // timeout for testing
        await timeout()

        return products

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch products.");
    }
}

export async function fetchBestsellers() {
    
    try {
        const data = await fetch(
            `${protocol.http}://${host.local}:${port.local}/products/bestsellers`,
            { cache: dataCache()}
        )
        const bestsellers: BestsellersSchema[] = await data.json()

        // timeout for testing
        // await timeout()

        return bestsellers

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch bestsellers.");
      }
}

export async function fetchProduct(id: string) {

    try {
        const data = await fetch(
            `${protocol.http}://${host.local}:${port.local}/products/${id}`,
            { cache: dataCache()}
        )
        const product: ProductSchema = await data.json()

        // timeout for testing
        await timeout()

        return product
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch product.");
      }
}