import getCategories from "@/app/lib/categories";
import ProductForm from "./productForm";
import Link from "next/link";


export default async function AdminPage() {

  const categories = await getCategories();
  return (
    <section className="grid place-items-center p-8 gap-4">
      <ProductForm categories={categories} />
      <Link href="/admin/products" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
        See Products
      </Link>
    </section>
  )

}