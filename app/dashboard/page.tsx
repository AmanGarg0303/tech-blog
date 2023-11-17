import Post from "@/components/Post";
import { postsData } from "@/data";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">My Posts</h1>
      {postsData && postsData.length > 0 ? (
        postsData?.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            authorEmail={"test@gmail.com"}
            date={post.datepublished}
            thumbnail={post.thumbnail}
            category={post.category}
            title={post.title}
            desc={post.content}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">
          No posts created yet.&nbsp;
          <Link href={"/create-post"} className="link underline">
            Create New
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
