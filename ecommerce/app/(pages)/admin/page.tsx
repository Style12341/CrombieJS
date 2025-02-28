import getCategories from "@/app/lib/categories";
import ProductForm from "./productForm";
import getProducts from "@/app/lib/products";
import ProductTable from "./productTable";


export default async function AdminPage() {
  const categories = await getCategories();
  const products = await getProducts();

  return (<section>
    <ProductForm categories={categories} />
    <ProductTable products={products} />
  </section>
  )

}