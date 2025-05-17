import { getProduct } from "../../lib/data"
import { Header } from "../../ui/product/header"
import { Body } from "../../ui/product/body"
import { notFound } from "next/navigation"

export async function generateStaticParams(){
    return [
        { id: "1" }, { id: "2" }, { id: "3" },
        { id: "4" }, { id: "5" }, { id: "6" },
        { id: "7" }, { id: "8" }, { id: "9" },
        { id: "10" }, { id: "11" }, { id: "12" },
        { id: "13" }, { id: "14" }, { id: "15" }, 
        { id: "16" },
    ]
  }

type PageProps = {
    params: Promise<{ id: string }>,
}

export default async function Page(props: PageProps)
{

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