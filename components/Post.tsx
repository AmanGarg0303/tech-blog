import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

interface PostProps {
  id: string;
  author: string;
  authorEmail?: string;
  date: string;
  thumbnail?: string;
  title: string;
  desc: string;
  links?: string[];
  category?: string;
}

const Post = ({
  id,
  author,
  authorEmail,
  date,
  title,
  thumbnail,
  desc,
  links,
  category,
}: PostProps) => {
  const isEditable = true;

  return (
    <div className="my-4 border-b-2 py-8">
      <div className="mb-3">
        {author ? (
          <>
            Posted by: <span className="font-bold">{author}</span> on {date}
          </>
        ) : (
          <>Posted on {date}</>
        )}
      </div>

      <div className="w-full h-72 relative">
        <Image
          src={thumbnail || "/thumbnail-placeholder.png"}
          alt={title}
          fill
          className="object-cover rounded-md object-center"
        />
      </div>

      {category && (
        <Link
          className="bg-slate-800 w-fit text-white px-4 py-0.5 text-sm font-bold rounded-md mt-4 block"
          href={`categories/${category}`}
        >
          {category}
        </Link>
      )}

      <h2 className="text-2xl font-bold my-4">{title}</h2>
      <p className="leading-loose">{desc}</p>

      {links && (
        <div className="my-4 flex flex-col gap-3">
          {links.map((link, i) => (
            <div key={i} className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>

              <Link className="link" href={link} target="_blank">
                {link}
              </Link>
            </div>
          ))}
        </div>
      )}

      {isEditable && (
        <div className="flex gap-3 font-bold w-fit">
          <Link href={`/edit-post/${id}`}>
            <button className="px-3 py-2 bg-slate-200 rounded-md">Edit</button>
          </Link>

          <DeleteButton />
        </div>
      )}
    </div>
  );
};

export default Post;
