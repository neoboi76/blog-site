import PostContent from "@/components/PostContent";
import { prisma } from "@/lib/prisma";
import type { Block } from "@blocknote/core";
import { notFound } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await prisma.post.findUnique({ where: { slug } });

    if (!post) notFound();

    return (
        <div className="flex flex-col gap-10">
            <h1 className="font-extrabold text-xl">Exit Strategies</h1>
            <div className="flex flex-col gap-8">
                <h1 className="font-extrabold text-5xl italic">{post.title}</h1>
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
                    <PostContent content={post.content as Block[]} />
                </span>
            </div>
        </div>
    );
}
