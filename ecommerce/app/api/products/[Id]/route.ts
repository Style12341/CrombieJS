import { deleteProduct, getProductById, updateProduct } from "@/app/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ Id: string }> }): Promise<Response> {
  const Id = (await params).Id;
  const product = await getProductById(Id);
  return NextResponse.json(product);
}
export async function PUT(request: NextRequest, { params }: { params: Promise<{ Id: string }> }): Promise<Response> {
  const Id = (await params).Id;
  const body: Product = await request.json();
  const prod = await updateProduct(Id, body);
  return NextResponse.json(prod, { status: 200 });
}
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ Id: string }> }): Promise<Response> {
  const Id = (await params).Id;
  deleteProduct(Id);
  return NextResponse.json({ status: 204 });
}
