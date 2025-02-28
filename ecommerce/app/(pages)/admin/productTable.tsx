"use client"

import { useState } from "react";

export default function ProductTable({ products }: { products: ProductDTO[] }) {
    const [prod, setProducts] = useState(products);
    const onDelete = async (id: string) => {
        const res = await fetch(`/api/products/${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            const newProducts = prod.filter(p => p.id !== id);
            setProducts(newProducts);
        }
    }
    return (
        <section className="grid place-items-center p-8 gap-4">
            <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white mb-6">Products</h1>
            <div className="w-full overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                        {prod.map(p => (
                            <tr key={p.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{p.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 max-w-xs truncate">{p.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">${p.price.toFixed(2)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{p.category.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => onDelete && onDelete(p.id)}
                                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}