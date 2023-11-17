"use client";
import { categoriesData } from "@/data";
import Link from "next/link";
import { useState } from "react";

const CreatePostForm = () => {
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");

  const addLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (linkInput.trim() !== "") {
      setLinks((prev) => [...prev, linkInput]);
      setLinkInput("");
    }
  };

  const deleteLink = (idx: number) => {
    setLinks((prev) => prev.filter((_, i) => i != idx));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form className="flex flex-col gap-2">
        <input type="text" placeholder="Title" />

        <textarea placeholder="Description"></textarea>

        {links &&
          links.map((link, i) => (
            <div key={i} className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                  <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
              </span>
              <Link href={link} className="link" target="_blank">
                {link}
              </Link>
              <span className="cursor-pointer" onClick={() => deleteLink(i)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          ))}

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Paste the link and click on Add"
            className="flex-1"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
          />
          <button onClick={addLink} className="btn flex items-center gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </span>
            Add
          </button>
        </div>

        <select className="p-3 rounded-md border">
          <option value="">Select a Category</option>
          {categoriesData &&
            categoriesData.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
        </select>

        <button type="submit" className="primary-btn">
          Create Post
        </button>

        <div className="p-2 text-red-500 font-semibold">Error Message</div>
      </form>
    </div>
  );
};

export default CreatePostForm;
