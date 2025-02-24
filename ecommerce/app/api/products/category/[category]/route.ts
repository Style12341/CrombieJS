import getProducts from "@/app/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
): Promise<Response> {
  const category = (await params).category ?? null;
  const products = getProducts(category);
  return NextResponse.json(products);
}
