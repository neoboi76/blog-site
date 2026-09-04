"use client";

import PostEditor from "@/components/PostEditor";
import { updatePost } from "@/lib/actions";
import type { Block } from "@blocknote/core";

interface Post {
    id: string;
    title: string;
    slug: string;
    content: Block[];
}

export default function EditPostClient({ post }: { post: Post }) {
    const handleSave = async (data: {
        title: string;
        content: Block[];
    }) => {
        await updatePost({ id: post.id, ...data });
    };

    return (
        <PostEditor
            initialTitle={post.title}
            initialContent={post.content}
            onSave={handleSave}
        />
    );
}
