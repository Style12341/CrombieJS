import { getCategoryById } from "@/app/lib/categories";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: IdParam): Promise<Response> {
  const Id = (await params).Id;
  const category = getCategoryById(Id);
  return NextResponse.json(category);
}
export async function PUT(request: NextRequest, { params }: IdParam): Promise<Response> {
  const Id = (await params).Id;
  return NextResponse.json({ message: `PUT request received for category ${Id}` });
}
export async function DELETE(request: NextRequest, { params }: IdParam): Promise<Response> {
  const Id = (await params).Id;
  return NextResponse.json({ message: `DELETE request received for category ${Id}` });
}
