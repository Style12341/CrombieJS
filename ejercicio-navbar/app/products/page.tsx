"use client"
import Image from "next/image";
import getProducts from "../lib/products";
import Card from "../ui/card";
import Button from "../ui/button";
import { useSearchParams } from "next/navigation";
export default function Home() {
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("category");
    const products = getProducts(categoryId);
    return (
        <section className="">
            <h1 className="text-4xl text-center">Products</h1>
            <ul className="flex justify-center gap-4 p-4">
                {products.map(product => (
                    <Card header={product.name} description={product.description} key={product.id}>
                        {product.image && <Image src={product.image} alt={product.name} className="w-full h-48 object-cover" />}
                        <div className="flex justify-between mb-4">
                            <p className="text-white">Category: {product.category.name}</p>
                            <p className="text-white">Price: {product.price}</p>
                        </div>
                        <Button func={() => alert(`Compro ${product.name} por ${product.price}`)} >Comprar</Button>
                    </Card>
                ))}
            </ul>
        </section>
    )



}