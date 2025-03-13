"use server";
import { verifySession } from "@/app/lib/session";
import Link from "next/link";
import { logout } from "@/app/actions/logout";

export default async function Navbar() {
    // Get user from session    
    const session = await verifySession();

    return (
        <nav className="flex justify-center gap-6 items-center p-4">
            <Link href="/products" className="text-white font-bold">Products</Link>
            <Link href="/categories" className="text-white font-bold">Categories</Link>
            {session.isAuth ?
                <>
                    <Link href={session.userRole === "ADMIN" ? "/admin" : "/profile"} className="text-white font-bold absolute right-24">Profile</Link>
                    <div className="absolute right-5">
                        <form action={logout}>
                            <button type="submit" className="text-white font-bold">Logout</button>
                        </form>
                    </div>
                </>
                :
                <>
                    <Link href="/login" className="text-white font-bold absolute right-24">Login</Link>
                    <Link href="/signup" className="text-white font-bold absolute right-5">Signup</Link>
                </>
            }
        </nav>
    )
}