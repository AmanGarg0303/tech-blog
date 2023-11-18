import Link from "next/link";

const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

    if (res.ok) {
      const categories = await res.json();
      return categories;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

const CategoriesList = async () => {
  const categories = await getCategories();

  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {categories &&
        categories.map((cat: any) => (
          <Link
            href={`/categories/${cat.catName}`}
            key={cat?.id}
            className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
          >
            {cat.catName}
          </Link>
        ))}
    </div>
  );
};

export default CategoriesList;
