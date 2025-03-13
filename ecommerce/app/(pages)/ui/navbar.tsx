import Link from "next/link";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { checkRole } from "@/utils/roles";

export default async function Navbar() {
    const isAdmin = await checkRole('ADMIN')
    return (
        <nav className="flex justify-center gap-6 items-center p-4">
            <Link href="/products" className="text-white font-bold">Products</Link>
            <Link href="/categories" className="text-white font-bold">Categories</Link>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
                <Link href={isAdmin ? "/admin" : "/profile"} className="text-white font-bold absolute right-5">Profile </Link>
            </SignedIn>
        </nav >
    )
}