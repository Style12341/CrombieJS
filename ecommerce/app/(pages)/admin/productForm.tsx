"use client"

import { useState } from "react";

export default function ProductForm({ categories }: { categories: Category[] }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategory] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch("/api/products", {
            method: "POST",
            body: JSON.stringify({ name, description, price: Number(price), category: { category: categoryId } }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                alert("Product created successfully");
            }
            setName("");
            setDescription("");
            setPrice("");
            setCategory("");
        }).catch((err) => {
            alert("Error creating product");
            console.log(err);
        });
    };
    return (
        <section className="flex flex-col gap-4 w-1/4 mx-auto bg-slate-500 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 text-black rounded"
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="p-2 text-black rounded"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="p-2 text-black rounded"
                />
                <select
                    value={categoryId}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 text-black rounded"
                >
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">Create Product</button>
            </form>
        </section>
    );
}