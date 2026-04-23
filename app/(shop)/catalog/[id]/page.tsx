import { getCatalogProducts, getProduct } from "../../../lib/data"
import { Header } from "../../../ui/product/header"
import { Body } from "../../../ui/product/body"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const products = await getCatalogProducts()
  
  if (!products || products.length === 0) {
    return []
  }

  return products.map((product) => ({ id: product.id.toString() }))
}

type PageProps = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ query: string }>
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const id = params?.id || ""

  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header product={product} />
      <Body product={product} />
    </>
  )
}
