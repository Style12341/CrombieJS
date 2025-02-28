import Link from "next/link";
import { getProductsPaginated } from "../../lib/products";
import ProductCard from "./productCard";
import SearchProduct from "./SearchProduct";
import getCategories from "@/app/lib/categories";
export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ page: string; limit: string, search: string, categoryId: string }>;
}) {
    const { page = "1", limit = "4", search, categoryId } = await searchParams;
    let CurrPage = Number(page);
    CurrPage = Math.max(1, CurrPage);
    let CurrLimit = Number(limit);
    CurrLimit = Math.max(1, CurrLimit);
    const { pages, products } = await getProductsPaginated(CurrPage, CurrLimit, { name: search, categoryId });
    const categories = await getCategories();
    return (
        <section className="">
            <h1 className="text-4xl text-center">Products</h1>
            <SearchProduct page={CurrPage} limit={CurrLimit} categories={categories}></SearchProduct>
            <ul className="grid grid-cols-4 px-10 justify-center gap-4 p-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ul>
            <div className="flex justify-center space-x-4">
                {(CurrPage > 1) && <Link href={`/products?page=${CurrPage - 1}&limit=${limit}`} prefetch={true} className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                    Anterior
                </Link>}
                {((CurrPage + 1) <= pages) && <Link href={`/products?page=${CurrPage + 1}&limit=${limit}`} prefetch={true} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                    Siguiente
                </Link>}
            </div>
            <br />
        </section >
    )



}