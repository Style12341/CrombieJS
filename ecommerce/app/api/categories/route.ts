import getCategories from "@/app/lib/categories";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const categories = getCategories();
  return NextResponse.json(categories);
}
