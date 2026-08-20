import { posts } from "@/posts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-extrabold text-xl">Exit Strategies</h1>
      <div className="flex flex-col gap-8">
        <h1 className="font-extrabold text-5xl italic">{post?.title}</h1>
        <span>
          <i>
            <time dateTime={post.publishedAt?.toISOString()}>
              {post.publishedAt?.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </i>
          <div className="prose lg:prose-xl text-amber-50">
            {post?.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="">
                {paragraph}
              </p>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
}
