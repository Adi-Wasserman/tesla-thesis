import { NextResponse } from "next/server";
import { FALLBACK_CAREERS } from "@/data/careers";

export async function GET() {
  const live = !!FALLBACK_CAREERS.fetchedAt;
  return NextResponse.json({
    careers: FALLBACK_CAREERS,
    live,
  });
}
