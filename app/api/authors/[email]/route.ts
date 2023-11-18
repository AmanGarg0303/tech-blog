import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;
    const posts = await prisma.user.findUnique({
      where: { email },
      include: {
        posts: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get your posts." },
      { status: 500 }
    );
  }
}
