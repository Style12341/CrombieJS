import Link from "next/link";
import { getProductsPaginated } from "../../lib/products";
import ProductCard from "./productCard";
export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ page: string; limit: string }>;
}) {
    let { page, limit } = await searchParams;
    page = page ?? 1;
    limit = limit ?? 5;
    const { pages, products } = await getProductsPaginated(Number(page), Number(limit));
    return (
        <section className="">
            <h1 className="text-4xl text-center">Products</h1>
            <ul className="grid grid-cols-4 px-10 justify-center gap-4 p-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
            <div className="flex justify-center space-x-4">
                {Array.from({ length: pages }).map((_, i) => (
                    <Link key={i} href={`/products?page=${i + 1}&limit=${limit}`} prefetch={true}>
                        {i + 1}
                    </Link>
                ))}
            </div>
            <br />
        </section>
    )



}