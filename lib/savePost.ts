// lib/actions.ts
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost({
  title,
  content,
}: {
  title: string;
  content: any;
}) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const post = await prisma.post.create({
    data: {
      title,
      slug,
      content,
      published: true, 
    },
  });

  revalidatePath("/blog");
  redirect(`/blog/${post.slug}`);
  return post;
}