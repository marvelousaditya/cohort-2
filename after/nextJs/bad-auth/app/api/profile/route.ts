import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { decode } from "querystring";
export function GET(req: NextRequest) {
  const headers = req.headers;
  const auth = req["auth"];
  const decoded = jwt.decode(token, "secret");
  const { username } = decode;
  return NextResponse.json({ msg: "heello bitch", username });
}
