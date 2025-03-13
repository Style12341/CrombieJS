"use client"
import Link from "next/link";
import Card from "../../ui/card";
import Button from "../../ui/button";
import Image from "next/image";
interface ProductCardProps {
    product: ProductDTO
    complete?: boolean
    children?: React.ReactNode
}
export default function ProductCard({ product, complete = false, children }: ProductCardProps) {
    return (
        <Card header={product.name} key={product.id}>
            <div className="flex justify-between mb-4 gap-4">
                <p className="text-white">Category: {product.category.name}</p>
                <p className="text-white">Price: {product.price}</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                {complete && product.image && <Image src={product.image} alt={product.name} width={200} height={200} />}
                {complete && <p className="pb-4">{product.description}</p>}
            </div>
            {children}
            <div className="flex justify-between">
                {!complete && <Link className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded`} href={`/products/${product.id}`}>See more...</Link>}
                <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    func={() => alert(`Compro ${product.name} por ${product.price}`)} >Comprar</Button>
            </div>

        </Card >
    )
}