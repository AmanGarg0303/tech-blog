import Post from "@/components/Post";

const getPosts = async (catName: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXTAUTH_URL}/api/categories/${catName}`,
      { cache: "no-store" }
    );

    if (res.ok) {
      const { posts } = await res.json();
      return posts;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

const CategoriesPostsPage = async ({
  params,
}: {
  params: { catName: string };
}) => {
  const category = params.catName;
  const posts = await getPosts(category);

  return (
    <>
      <h1 className="text-2xl font-bold">
        <span className="font-normal">Category: </span>
        {decodeURIComponent(category)}
      </h1>

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
};

export default CategoriesPostsPage;
