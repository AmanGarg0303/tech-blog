import CreatePostForm from "@/components/CreatePostForm";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

const CreatePost = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  return <CreatePostForm />;
};

export default CreatePost;
