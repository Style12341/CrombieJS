"use client"
import getProducts from "../lib/products";
import ProductCard from "./productCard";
export default function Home() {
    const products = getProducts();
    return (
        <section className="">
            <h1 className="text-4xl text-center">Products</h1>
            <ul className="flex justify-center gap-4 p-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </section>
    )



}