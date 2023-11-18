import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";

const getPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
      cache: "no-store",
    });

    if (res.ok) {
      const posts = res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <CategoriesList />
      {posts && posts.length > 0 ? (
        posts?.map((post: any) => (
          <Post
            key={post.id}
            id={post?.id}
            author={post?.author?.name}
            authorEmail={post?.authorEmail}
            date={post?.createdAt}
            thumbnail={post?.imageUrl}
            category={post?.catName}
            title={post?.title}
            desc={post?.content}
            links={post?.links}
          />
        ))
      ) : (
        <div className="py-6">No posts found.</div>
      )}
    </>
  );
}
