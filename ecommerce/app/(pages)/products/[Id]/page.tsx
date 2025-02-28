import { getProductById } from "@/app/lib/products";
import ProductCard from "../productCard";

export default async function ProductPage({ params, }: { params: Promise<{ Id: string }> }) {
    const productId = (await params).Id;
    const p = await getProductById(productId);
    return (
        <section className="grid place-items-center p-8 gap-4">
            <h1 className="text-4xl text-center">Product</h1>
            {p && <ProductCard product={p} complete={true}>
            </ProductCard>}
        </section>
    )
}