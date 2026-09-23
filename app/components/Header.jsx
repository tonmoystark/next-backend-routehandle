import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-between px-10 py-5 text-2xl">
      <h1>Next.js</h1>
      <div className="flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/github-todos">Github Todos</Link>
      </div>
    </div>
  );
};

export default Header;
