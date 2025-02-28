"use client"
import { useState } from "react";
import Link from "next/link";
export default function SearchProduct({ page, limit }: { page: number, limit: number }) {
    const [searchName, setSearchName] = useState("");

    return (
        <div className="grid place-items-center justify-center py-4">
            <input type="text" placeholder="Search by name" value={searchName} onChange={e => setSearchName(e.target.value)} className="text-black mb-4"/>
            
            <Link href={`/products?page=${page}&limit=${limit}&search=${searchName}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-self-end">
            Search</Link>
        </div>
    )

}