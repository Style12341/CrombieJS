import { deleteCategory, getCategoryById, updateCategory } from "@/app/lib/categories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: IdParam): Promise<Response> {
  const Id = (await params).Id;
  const category = await getCategoryById(Id);
  return NextResponse.json(category);
}
export async function PUT(request: NextRequest, { params }: IdParam): Promise<Response> {
  const Id = (await params).Id;
  const body: Category = await request.json();
  const cat = await updateCategory(Id, body.name);
  return NextResponse.json(cat, {status: 200});
}
export async function DELETE(request: NextRequest, { params }: IdParam): Promise<Response> {
  const Id = (await params).Id;
  deleteCategory(Id);
  return NextResponse.json({status: 204});
}
