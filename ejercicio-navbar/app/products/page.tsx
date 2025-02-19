"use client"
import getProducts from "../lib/products";
import { useSearchParams } from "next/navigation";
import ProductCard from "./productCard";
export default function Home() {
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("category");
    const products = getProducts(categoryId);
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