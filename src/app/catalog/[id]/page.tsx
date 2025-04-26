import { fetchProduct } from "../../data";
import { Header } from "../../ui/main/catalog/id/Header";
import { Body } from "../../ui/main/catalog/id/Body";
import { ProductSchema } from "../../definitions";

export function generateStaticParams() {
    return [
        { id: '1' }, { id: '2' }, { id: '3' },
        { id: '4' }, { id: '5' }, { id: '6' },
        { id: '7' }, { id: '8' }, { id: '9' },
        { id: '10' }, { id: '11' }, { id: '12' },
        { id: '13' }, { id: '14' }, { id: '15' }, 
        { id: '16' },
    ]
  }

  export default async function Product({ params }: {params: Promise<{ id: string }>}) {
    
    const { id } = await params
    const product: ProductSchema = await fetchProduct(id)

    return (
      <div>
        <Header product={product} />
        <Body product={product} />
      </div>
    )
  }