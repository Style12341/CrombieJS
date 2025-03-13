"use server";
import bcrypt from "bcryptjs";
import { FormState, SignupFormSchema } from "../lib/definitions";
import prisma from "../lib/prisma";
import { createSession } from "../lib/session";
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
    await createSession(user);
    // 5. Redirect user
    redirect("/");
}