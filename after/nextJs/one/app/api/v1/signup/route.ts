import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json(); //extracts the body
  console.log(data);
  return NextResponse.json({ msg: "signed up" });
}
