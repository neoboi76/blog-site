import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { DeletePostButton } from "@/components/DeletePostButton";

export default async function AdminPage() {
  const posts = await prisma.post.findMany({
    orderBy: { updatedAt: "desc" },
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Posts</h2>
        <Link
          href="/admin/new"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          New Post
        </Link>
      </div>

      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center justify-between border border-foreground/10 rounded-md px-4 py-3"
          >
            <div>
              <p className="font-medium">{post.title}</p>
              <p className="text-xs text-foreground/50">
                {post.published ? "Published" : "Draft"} · updated{" "}
                {post.updatedAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={`/admin/edit/${post.slug}`}
                className="text-sm hover:underline"
              >
                Edit
              </Link>
              <DeletePostButton id={post.id} title={post.title} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
