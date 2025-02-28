"use client"
import { useState } from "react";
import Link from "next/link";
export default function SearchProduct({ page, limit, categories }: { page: number, limit: number, categories: Category[] }) {
    const [searchName, setSearchName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    function setSearchParams() {
        let search = `/products?page=${page}&limit=${limit}`;
        if (searchName) {
            search += `&search=${searchName}`;
        }
        if (categoryId) {
            search += `&categoryId=${categoryId}`;
        }
        return search;
    }

    return (
        <div className="grid gri place-items-center justify-center py-4">
            <input
                type="text"
                placeholder="Search by name"
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4 bg-white shadow-sm transition-all"
            />
            <select
                name="categories"
                value={categoryId}
                onChange={e => setCategoryId(e.target.value)}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4 bg-white shadow-sm transition-all"
            >
                <option value="">All Categories</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <div className="flex justify-between w-full">
                <Link href={"/products"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Reset</Link>
                <Link href={setSearchParams()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Search</Link>
            </div>

        </div>
    )

}