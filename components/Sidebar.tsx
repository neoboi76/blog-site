import Link from "next/link";

export function Sidebar() {
  return (
    <div>
      <ul className="flex flex-row md:flex-col gap-3">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
