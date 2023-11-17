"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  return (
    <nav className="flex justify-between pb-4 border-b mb-4">
      <div>
        <Link href="/">
          <h1 className="text-4xl text-dark font-bold tracking-tighter">
            Tech News
          </h1>
        </Link>
        <p className="text-sm font-medium">
          Exploring Tomorrow&#39;s Innovations, <br />
          One Byte at a Time
        </p>
      </div>

      {status === "authenticated" ? (
        <div className="flex items-center">
          <button className="btn" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
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
