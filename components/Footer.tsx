import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex">
      <p>The website code is availabe on my&nbsp;</p>
      <Link
        href="https://github.com/AmanGarg0303"
        className="underline"
        target="_blank"
      >
        Github
      </Link>
    </footer>
  );
};

export default Footer;
