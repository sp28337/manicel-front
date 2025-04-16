import { Header } from "../../ui/main/catalog/id/Header";
import { BodyId } from "../../ui/main/catalog/id/BodyId";

export function generateStaticParams() {
    return [
        { id: '1' }, { id: '2' }, { id: '3' },
        { id: '4' }, { id: '5' }, { id: '6' },
        { id: '7' }, { id: '8' }, { id: '9' },
        { id: '10' }, { id: '11' }, { id: '12' },
        { id: '13' }, { id: '14' }, { id: '15' },
    ]
  }

  export default async function Product({params,}: {params: Promise<{ id: string }>}) {
    const { id } = await params
    
    const data = await fetch(`http://0.0.0.0:8000/products/${id}`)
    const product = await data.json()

    console.log(product)

    return (
      <div>
        <Header product={product} />
        <BodyId product={product} />
      </div>
    )
  }