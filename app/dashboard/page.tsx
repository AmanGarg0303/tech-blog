import Post from "@/components/Post";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    if (res.ok) {
      const { posts } = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }
};

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
  }
  const posts = await getPosts(session?.user?.email as string);

  return (
    <div>
      <h1 className="text-2xl font-bold">My Posts</h1>
      {posts && posts.length > 0 ? (
        posts?.map((post: any) => (
          <Post
            key={post.id}
            id={post.id}
            author={session?.user?.name!}
            authorEmail={post?.authorEmail}
            date={post.createdAt}
            thumbnail={post.imageUrl}
            category={post.catName}
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
