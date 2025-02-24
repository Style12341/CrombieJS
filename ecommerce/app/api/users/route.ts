import getUser from "@/app/lib/users";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const user = getUser();
  return NextResponse.json(user);
}
export async function POST(): Promise<Response> {
  return NextResponse.json({ message: "POST request received" });
}