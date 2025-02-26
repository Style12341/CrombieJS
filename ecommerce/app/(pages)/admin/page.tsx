"use client"

import { useEffect, useState } from "react";

export default function CreateProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    }
    fetchCategories();
  }, []);

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
    <section className="flex flex-col gap-4 w-1/2 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 text-black"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 text-black"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 text-black"
        />
        <select
          value={categoryId}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 text-black"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button type="submit" className="p-2 bg-blue-500 text-white">Create Product</button>
      </form>
    </section>
  );

}