import { CatalogProductsSchema, BestsellersSchema, ProductSchema } from "./definitions"

const protocol = {
    http: 'http',
    https: 'https'
}

const host = {
    local: '0.0.0.0',
    dev: '0.0.0.0',
    prod: '0.0.0.0',
    test: '0.0.0.0'
}

const port = {
    local: '8000', 
    dev: '8000', 
    prod: '8000', 
    test: '8000'
}


export async function fetchCatalogProducts() {
    
    const data = await fetch(`${protocol.http}://${host.local}:${port.local}/products/catalog_products`)
    const products: CatalogProductsSchema[] = await data.json()    

    return products
}

export async function fetchBestsellers() {
    const data = await fetch(`${protocol.http}://${host.local}:${port.local}/products/bestsellers`)
    const bestsellers: BestsellersSchema[] = await data.json()

    return bestsellers
}

export async function fetchProduct(id: string) {
    const data = await fetch(`${protocol.http}://${host.local}:${port.local}/products/${id}`)
    const product: ProductSchema = await data.json()

    return product
}