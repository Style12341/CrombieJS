"use server";
import { User, UserRole } from "@prisma/client";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";

const secretKey = process.env.JWT_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

interface Session {
  userId: string;
  userRole: UserRole;
  expiresAt: Date;
};
interface JWTSession extends JWTPayload, Session { }

export async function createSession(user: User) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const userId = user.id;
  const userRole = user.role;
  const session = await encrypt({ userId, userRole, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function encrypt(payload: JWTSession) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<JWTSession>(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (err) {
    console.log("Failed to verify session");
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);
  if (!session) {
    return { isAuth: false };
  }
  return { isAuth: true, userId: session?.userId, userRole: session?.userRole };
});
