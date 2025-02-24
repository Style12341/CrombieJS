import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-6 items-center p-4">
            <Link href="/products" className="text-white font-bold">Products</Link>
            <Link href="/categories" className="text-white font-bold">Categories</Link>
            <Link href="/profile" className="text-white font-bold absolute right-5">Profile </Link>
        </nav>
    )
}