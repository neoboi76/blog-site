import Link from "next/link";
import { posts } from "@/posts";

export default async function Page() {
  //const posts = await getPosts()

  return (
    <div className="flex flex-col flex-1 gap-5">
      <h1 className="font-extrabold text-xl">Exit Strategies</h1>
      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <li key={post.id} className="flex flex-row gap-5">
            <span>
              <i>
                <time dateTime={post.publishedAt?.toISOString()}>
                  {post.publishedAt?.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </i>
            </span>
            <Link className="hover:underline" href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    // <ul>
    //   {posts.map((post) => (
    //     <Post key={post.id} post={post} />
    //   ))}
    // </ul>
  );
}
