"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    if (!isPopupVisible) {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupVisible]);

  return (
    <nav className="flex justify-between pb-4 border-b mb-4 relative">
      <div>
        <Link href="/">
          <h1 className="text-4xl text-dark font-bold tracking-tighter">
            Tech News
          </h1>
        </Link>
        <p className="text-sm font-medium">
          Exploring Tomorrow&apos;s Innovations, <br />
          One Byte at a Time
        </p>
      </div>

      {status === "authenticated" ? (
        <>
          <div
            ref={popupRef}
            className={`absolute z-30 right-0 top-20 bg-white p-6 shadow-lg rounded-md flex flex-col gap-2 text-right min-w-[160px] ${
              isPopupVisible ? "flex" : "hidden"
            } `}
          >
            <div className="font-semibold">{session?.user?.name}</div>
            <div className="font-semibold">{session?.user?.email}</div>
            <Link onClick={() => setIsPopupVisible(false)} href={"/dashboard"}>
              Dashboard
            </Link>
            <Link
              onClick={() => setIsPopupVisible(false)}
              href={"/create-post"}
            >
              Create Post
            </Link>
            <button className="btn" onClick={() => signOut()}>
              Sign Out
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <Link
              href="/create-post"
              className="hidden md:flex gap-1 items-center mr-6"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="tracking-tighter">Create New</span>
            </Link>
            <Image
              src={session?.user?.image || ""}
              width="36"
              height="36"
              alt="profile"
              className="rounded-full cursor-pointer"
              onClick={() => setIsPopupVisible(!isPopupVisible)}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <Link href="/signin">
            <button className="btn">Sign In</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
