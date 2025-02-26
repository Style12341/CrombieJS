import getProducts from "../../lib/products";
import ProductCard from "./productCard";
export default async function Home() {
    const products = await getProducts();
    return (
        <section className="">
            <h1 className="text-4xl text-center">Products</h1>
            <ul className="grid grid-cols-4 px-10 justify-center gap-4 p-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
        </section>
    )



}