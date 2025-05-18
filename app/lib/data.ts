import { CatalogProductsSchema, BestsellersSchema, ProductSchema } from "./definitions"

const protocol = {
    http: "http",
    https: "https"
}

const hosts = {
    local: "127.0.0.1",
    prod: "back"
}

const host = hosts.prod

const port = {
    local: "8000", 
}


const dataCache = (toggle=true) => {
    if (toggle) return "force-cache"
    else return "no-store"
}


export async function getSearchProducts(query: string) {

    try {
        const data = await fetch(
            `${protocol.http}://${host}:${port.local}/products/search_products?query=${query}`,
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
            `${protocol.http}://${host}:${port.local}/products/catalog_products`,
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
            `${protocol.http}://${host}:${port.local}/products/bestsellers`,
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
            `${protocol.http}://${host}:${port.local}/products/${id}`,
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