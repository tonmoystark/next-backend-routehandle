import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="my-2">Nothing just learning several routes</h1>
      <Link className="px-4 py-2 bg-lime-600" href="/create-profile">
        Create Profile
      </Link>
    </div>
  );
}
