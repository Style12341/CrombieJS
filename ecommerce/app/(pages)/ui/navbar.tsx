"use server";
import { verifySession } from "@/app/lib/session";
import Link from "next/link";
import Button from "./button";
import { logout } from "@/app/actions/auth";

export default async function Navbar() {
    // Get user from session    
    const session = await verifySession();
    console.log

    return (
        <nav className="flex justify-center gap-6 items-center p-4">
            <Link href="/products" className="text-white font-bold">Products</Link>
            <Link href="/categories" className="text-white font-bold">Categories</Link>
            {session.isAuth ?
                <>
                    <Link href="/profile" className="text-white font-bold absolute right-24">Profile</Link>
                    <form action={logout}>
                        <button type="submit" className="text-white font-bold absolute right-5">Logout</button>
                    </form>
                </>
                :
                <>
                    <Link href="/login" className="text-white font-bold absolute right-20">Login</Link>
                    <Link href="/signup" className="text-white font-bold absolute right-5">Signup</Link>
                </>
            }
        </nav>
    )
}