"use client";

import PostEditor from "@/components/PostEditor";
import { createPost } from "@/lib/actions";
import type { Block } from "@blocknote/core";

export default function NewPostPage() {
    const handleSave = async (data: {
        title: string;
        content: Block[];
    }) => {
        await createPost(data);
    };

    return <PostEditor onSave={handleSave} />;
}
