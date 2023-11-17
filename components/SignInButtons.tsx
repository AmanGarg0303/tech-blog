import Image from "next/image";

const SignInButtons = () => {
  return (
    <>
      <h1 className="text-center mt-8 text-2xl font-bold">Sign in</h1>

      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/40 transition">
          <span>
            <Image src="/github-logo.svg" width="30" height="30" alt="github" />
          </span>
          Sign In with Github
        </button>

        <button className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/40 transition">
          <span>
            <Image src="/google-logo.svg" width="30" height="30" alt="google" />
          </span>
          Sign In with Google
        </button>
      </div>
    </>
  );
};

export default SignInButtons;
