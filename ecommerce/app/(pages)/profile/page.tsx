import Image from "next/image";
import getUser from "../../lib/users";
import ProductCard from "../products/productCard";

export default function Home() {
    const user = getUser();
    return (
        <section>
            <h1 className="text-4xl text-center">Profile</h1>
            <div className="p-4 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-4 m-auto ">
                    {user.image && <Image src={user.image} alt={user.name} width={50} height={50} className="rounded-full w-24 h-24 mx-auto" />}
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <h2>Favorites</h2>
                </div>
                <ul className="flex justify-center gap-4 p-4">
                    {user.favorites.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </ul>
            </div>
        </section>
    )

}