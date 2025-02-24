import { getProductById } from "@/app/lib/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ Id: string }> }): Promise<Response> {
  const Id = (await params).Id;
  const product = getProductById(Id);
  return NextResponse.json(product);
}
export async function PUT(request: NextRequest, { params }: { params: Promise<{ Id: string }> }): Promise<Response> {
  const Id = (await params).Id;
  return NextResponse.json({ message: `PUT request received for product ${Id}` });
}
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ Id: string }> }): Promise<Response> {
  const Id = (await params).Id;
  return NextResponse.json({ message: `DELETE request received for product ${Id}` });
}
