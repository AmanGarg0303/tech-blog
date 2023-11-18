import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Failed to get categories." },
      { status: 500 }
    );
  }
}
