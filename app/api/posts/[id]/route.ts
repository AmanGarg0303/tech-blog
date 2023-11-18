import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const post = await prisma.post.findUnique({ where: { id } });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, content, links, selectedCategory, imageUrl, publicId } =
    await req.json();

  const id = params.id;

  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        links,
        catName: selectedCategory,
        imageUrl,
        publicId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Post has been deleted." });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
