import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const removeImg = async (publicId: string) => {
  try {
    const res = await cloudinary.v2.uploader.destroy(publicId);
    console.log("Image removed");
  } catch (error) {
    console.log(error);
  }
};

export async function POST(req: Request) {
  const { publicId } = await req.json();
  await removeImg(publicId);

  return NextResponse.json({ message: "Success, Image removed." });
}
