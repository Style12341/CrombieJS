"use server";
import { SignupFormSchema, FormState, LoginFormSchema } from "@/app/lib/definitions";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { name, email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it

  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert the user into the database or call an Auth Library's API
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }
  // 4. Create user session
  await createSession(user.id);
  // 5. Redirect user
  redirect("/");
}
export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email, password } = validatedFields.data;

  // 1. Find the user in the database
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // 2. If the user does not exist, return an error
  if (!user) {
    return {
      message: "User not found.",
    };
  }

  // 3. Compare the user's password with the hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);

  // 4. If the password does not match, return an error
  if (!passwordMatch) {
    return {
      message: "Invalid password.",
    };
  }

  // 5. Create user session
  await createSession(user.id);

  // 6. Redirect user
  redirect("/");
}
export async function logout() {
  // 1. Destroy the user's session
  await deleteSession();
  // 2. Redirect user
  redirect("/");
}
