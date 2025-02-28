"use client"
import Image from "next/image";
import Card from "../ui/card";
import Button from "../ui/button";
interface ProductCardProps {
    product: ProductDTO
}
export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card header={product.name} description={product.description} key={product.id}>
            {product.image && <Image src={product.image} alt={product.name} width={70} height={70} className="w-full h-48 object-cover" />}
            <div className="flex justify-between mb-4">
                <p className="text-white">Category: {product.category.name}</p>
                <p className="text-white">Price: {product.price}</p>
            </div>
            <Button func={() => alert(`Compro ${product.name} por ${product.price}`)} >Comprar</Button>
        </Card>
    )
}