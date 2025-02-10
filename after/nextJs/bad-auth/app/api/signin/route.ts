import jwt from "jsonwebtoken";
import next from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = req.json();
  const { username, password } = body;
  const token = jwt.sign({ username }, "secret");

  return NextResponse.json({ token });
}
