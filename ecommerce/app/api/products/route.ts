import getProducts, { createProduct } from "@/app/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const products = await getProducts();
  return NextResponse.json(products);
}
export async function POST(request: NextRequest): Promise<Response> {
  const body: ProductDTO = await request.json();
  const p = createProduct(body);
  return NextResponse.json(p, { status: 201 });
}
