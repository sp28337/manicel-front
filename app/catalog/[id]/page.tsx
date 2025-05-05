import { fetchProduct } from "../../lib/data";
import { Header } from "../../ui/main/catalog/id/Header";
import { Body } from "../../ui/main/catalog/id/Body";
import { SearchList } from "../../ui/SearchList";

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

export default async function Page(
    props: {
        params: Promise<{ id: string }>, 
        searchParams?: Promise<{ query?: string }>
    })
{

    const params = await props.params
    const id = params?.id || ""

    const searchParams = await props.searchParams
    const query = searchParams?.query || ""

    const product = await fetchProduct(id)

    return (
        <>
            <SearchList query={query} />
            <Header product={product} />
            <Body product={product} />
        </>
    )
}