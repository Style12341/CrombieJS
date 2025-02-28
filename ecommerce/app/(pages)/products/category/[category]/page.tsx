import getProducts from "@/app/lib/products";
import ProductCard from "../../productCard";
export default async function Home({ params, }: { params: Promise<{ category: string }> }) {
    const categoryParam = (await params).category;
    const products = await getProducts(categoryParam);
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