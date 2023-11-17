"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

const SignInButtons = () => {
  return (
    <>
      <h1 className="text-center mt-8 text-2xl font-bold">Sign in</h1>

      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => signIn("github")}
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/40 transition"
        >
          <span>
            <Image
              src="/github-logo.svg"
              width={0}
              height={0}
              alt="github"
              className="w-8 h-auto"
              priority
            />
          </span>
          Sign In with Github
        </button>

        <button
          onClick={() => signIn("google")}
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/40 transition"
        >
          <span>
            <Image src="/google-logo.svg" width={30} height={30} alt="google" />
          </span>
          Sign In with Google
        </button>
      </div>
    </>
  );
};

export default SignInButtons;
