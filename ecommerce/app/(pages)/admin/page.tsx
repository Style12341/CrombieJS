import getCategories from "@/app/lib/categories";
import ProductForm from "./productForm";


export default async function AdminPage() {
  const categories = await getCategories();


  return (
    <ProductForm categories={categories} />
  )

}