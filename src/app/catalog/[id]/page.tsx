import { HeaderId } from "../../ui/main/catalog/id/HeaderId";

export function generateStaticParams() {
    return [
        { id: '1' }, { id: '2' }, { id: '3' },
        { id: '4' }, { id: '5' }, { id: '6' },
        { id: '7' }, { id: '8' }, { id: '9' },
        { id: '10' }, { id: '11' }
    ]
  }

  export default async function Product({params,}: {params: Promise<{ id: string }>}) {
    const { id } = await params
    
    const data = await fetch(`http://0.0.0.0:8000/products/${id}`)
    const product = await data.json()

    console.log(product)

    return (
      <div>
        <HeaderId product={product} />
      </div>
    )
  }