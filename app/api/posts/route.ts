import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, content, links, selectedCategory, imageUrl, publicId } =
    await req.json();

  const authorEmail = "gargaman0303@gmail.com";

  if (!title || !content) {
    return NextResponse.json({
      error: "Title and content are required",
      status: 500,
    });
  }

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        links,
        imageUrl,
        catName: selectedCategory,
        authorEmail,
        publicId,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { name: true } } },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch posts." },
      { status: 500 }
    );
  }
}
