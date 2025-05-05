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


export async function fetchFilteredProducts(query: string) {

    try {
        const data = await fetch(
            `${protocol.http}://${host.local}:${port.local}/products/search_products?query=${query}`,
            { cache: "force-cache"}
        )
        const filteredProducts: CatalogProductsSchema[] = await data.json()
        
        // timeout for testing
        await timeout()
    
        return filteredProducts
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch invoices.");
      }
}

export async function fetchCatalogProducts() {
    
    try {
        const data = await fetch(
            `${protocol.http}://${host.local}:${port.local}/products/catalog_products`,
            { cache: "force-cache"}
        )
        const products: CatalogProductsSchema[] = await data.json()

        // timeout for testing
        await timeout()

        return products

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch invoices.");
    }
}

export async function fetchBestsellers() {
    
    try {
        const data = await fetch(`${protocol.http}://${host.local}:${port.local}/products/bestsellers`)
        const bestsellers: BestsellersSchema[] = await data.json()

        // timeout for testing
        await timeout()

        return bestsellers

    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch invoices.");
      }
}

export async function fetchProduct(id: string) {

    try {
        const data = await fetch(`${protocol.http}://${host.local}:${port.local}/products/${id}`)
        const product: ProductSchema = await data.json()

        // timeout for testing
        await timeout()

        return product
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch invoices.");
      }
}