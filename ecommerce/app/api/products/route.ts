import getProducts from "@/app/lib/products";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const products = getProducts();
  return NextResponse.json(products);
}
export async function POST(): Promise<Response> {
  return NextResponse.json({ message: "POST request received" });
}
