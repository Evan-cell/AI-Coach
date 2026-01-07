import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function POST() {
  // ✅ Fix for TypeScript error
  const session = await auth();
  const userId = session.userId;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const clerkUser = await currentUser();

  if (!clerkUser) {
    return NextResponse.json({ error: "No Clerk user found" }, { status: 400 });
  }

  const email = clerkUser.emailAddresses[0]?.emailAddress ?? "";
  const name = clerkUser.fullName ?? clerkUser.username ?? "User";

  // Check if user already exists
  const existingUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerkUserId, userId))
    .limit(1);

  if (existingUser.length > 0) {
    return NextResponse.json(existingUser[0]);
  }

  // Insert new user
  const [newUser] = await db
    .insert(usersTable)
    .values({
      clerkUserId: userId,
      name,
      email,
      credits: 10,
    })
    .returning();

  return NextResponse.json(newUser);
}
