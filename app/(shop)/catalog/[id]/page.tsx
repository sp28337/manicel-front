import { getCatalogProducts, getProduct } from "../../../lib/data"
import { Header } from "../../../ui/product/header"
import { Body } from "../../../ui/product/body"
import { SearchList } from "../../../ui/search-list"
import { notFound } from "next/navigation"


export async function generateStaticParams() {
    const products = await getCatalogProducts()

    return products.map(
        (product) => ({id: product.id.toString()})
    )
}

type PageProps = {
    params: Promise<{ id: string }>,
    searchParams: Promise<{ query: string }>
}

export default async function Page(props: PageProps)
{

    const params = await props.params
    const id = params?.id || ""

    const searchParams = await props.searchParams
    const query = searchParams?.query || ""

    const product = await getProduct(id)

    if (!product) {
        notFound()
    }

    return (
        <>
            <SearchList query={query} />
            <Header product={product} />
            <Body product={product} />
        </>
    )
}