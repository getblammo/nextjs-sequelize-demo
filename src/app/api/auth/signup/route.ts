import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { ensureDB, User } from "@/lib/db";
import { createToken } from "@/lib/auth";

export async function POST(req: Request) {
  await ensureDB();
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  const existing = await User.findOne({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email already registered" }, { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  const token = await createToken(user.id, user.email, user.name);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("session", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
