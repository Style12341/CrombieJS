"use client"
import Image from "next/image";
import getProducts from "../lib/products";
import Card from "../ui/card";
import Button from "../ui/button";
export default function Home() {
    const products = getProducts();
    return (
        <div className="flex justify-center flex-wrap gap-4 p-4 mx-8">
            {products.map(product => (
                <Card header={product.name} description={product.description} key={product.id}>
                    {product.image && <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />}
                    <div className="flex justify-between">
                        <p className="text-white">Category: {product.category.name}</p>
                        <p className="text-white">Price: {product.price}</p>
                    </div>
                    <Button func={() => alert(`Compro ${product.name} por ${product.price}`)} >Comprar</Button>
                </Card>
            ))}
        </div>
    )



}