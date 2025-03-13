import getCategories from "@/app/lib/categories";
import ProductForm from "./productForm";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { checkRole } from "@/utils/roles";
import { redirect } from "next/navigation";


export default async function AdminPage() {

  const categories = await getCategories();
  const user = await currentUser();
  if (!user) redirect("/login")
  const isAdmin = await checkRole('ADMIN')
  if (!isAdmin) {
    redirect("/")
  }
  return (
    <>

      <section className="grid place-items-center p-8 gap-4">
        <section>
          <h1 className="text-4xl text-center">Profile</h1>
          <div className="p-4 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4 m-auto ">
              {user.imageUrl && <Image src={user.imageUrl} alt={user.fullName ?? ""} width={50} height={50} className="rounded-full w-24 h-24 mx-auto" />}
              <p>Name: {user.fullName}</p>
              <p>Email: {user.emailAddresses[0].emailAddress}</p>
            </div>
          </div>
        </section>
        <ProductForm categories={categories} />
        <Link href="/admin/products" className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
          See Products
        </Link>
      </section>
    </>
  )

}