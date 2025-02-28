import getCategories from "../../lib/categories";
import Card from "../ui/card";
import Link from "next/link";

export default async function Home() {
    const categories = await getCategories();
    return (
        <section>
            <h1 className="text-4xl text-center">Categories</h1>
            <ul className="flex justify-center gap-4 p-4">
                {categories.map(category => (
                    <Card key={category.id} header={category.name} className="p-4">
                        <Link href={`/products/category/${category.name}`} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
                            See Products
                        </Link>
                    </Card>
                ))}
            </ul>
        </section>
    )
}