import getCategories, { createCategory } from "@/app/lib/categories";
import { checkRole } from "@/utils/roles";
import { NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const categories = await getCategories();
  return NextResponse.json(categories);
}
export async function POST(request: NextRequest): Promise<Response> {
  const isAdmin = await checkRole('ADMIN');
  if (!isAdmin) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const body: Category = await request.json();
  const cat = await createCategory(body.name);
  return NextResponse.json(cat, { status: 201 });
}