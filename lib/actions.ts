"use server";

import { prisma } from "@/lib/prisma";
import type { Block } from "@blocknote/core";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function generateUniqueSlug(baseSlug: string): Promise<string> {
    let slug = baseSlug;
    let counter = 1;

    while (await prisma.post.findUnique({ where: { slug } })) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    return slug;
}

export async function createPost({
    title,
    content,
    published = false,
}: {
    title: string;
    content: Block[];
    published?: boolean;
}): Promise<void> {
    const baseSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const slug = await generateUniqueSlug(baseSlug);

    const post = await prisma.post.create({
        data: {
            title,
            slug,
            content,
            published,
            publishedAt: published ? new Date() : null,
        },
    });

    revalidatePath("/blog");
    redirect(`/blog/${post.slug}`);
}

export async function updatePost({
    id,
    title,
    content,
}: {
    id: string;
    title: string;
    content: Block[];
}): Promise<void> {
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
        throw new Error("Post not found");
    }

    await prisma.post.update({
        where: { id },
        data: { title, content },
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);
    redirect(`/blog/${post.slug}`);
}

export async function deletePost(id: string): Promise<void> {
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
        throw new Error("Post not found");
    }

    await prisma.post.delete({ where: { id } });

    revalidatePath("/blog");
    revalidatePath(`/blog/${post.slug}`);
    revalidatePath("/admin");
}
