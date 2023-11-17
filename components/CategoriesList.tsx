import { categoriesData } from "@/data";
import Link from "next/link";

const CategoriesList = () => {
  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {categoriesData &&
        categoriesData.map((cat) => (
          <Link
            href={`/categories/${cat.name}`}
            key={cat?.id}
            className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
          >
            {cat.name}
          </Link>
        ))}
    </div>
  );
};

export default CategoriesList;
