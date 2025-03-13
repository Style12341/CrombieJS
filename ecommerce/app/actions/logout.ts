"use server";
import { redirect } from "next/navigation";
import { deleteSession } from "../lib/session";

export async function logout() {
  // 1. Destroy the user's session
  await deleteSession();
  // 2. Redirect user
  redirect("/");
}
