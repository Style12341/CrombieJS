import getProducts from "@/app/lib/products";
import ProductTable from "../productTable";


export default async function Products() {
    const products = await getProducts();

    return (
        <section>
            <ProductTable products={products} />
        </section>
    )

}